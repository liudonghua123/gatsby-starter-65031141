const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const parseFilepath = require(`parse-filepath`)
const fs = require(`fs-extra`)
const slash = require(`slash`)
const slugify = require(`limax`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/template-blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const blogPosts = _.filter(
          result.data.allMarkdownRemark.edges,
          edge => {
            const slug = _.get(edge, `node.fields.slug`)
            if (!slug) return
            return edge
          }
        )

        // Create blog pages.
        blogPosts.forEach((edge, index) => {
          const next = index === 0 ? false : blogPosts[index - 1].node
          const prev =
            index === blogPosts.length - 1 ? false : blogPosts[index + 1].node

          createPage({
            path: `${edge.node.fields.slug}`, // required
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.fields.slug,
              prev,
              next,
            },
          })
        })

        return
      })
    )
  })
}

// Create slugs for files.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = node.frontmatter.slug
    if(! slug) {
      slug = `${slugify(path.basename(node.fileAbsolutePath, '.md'), {tone: false})}.html`
    }
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.onPostBuild = () => {
  // fs.copySync(
  //   `../docs/blog/2017-02-21-1-0-progress-update-where-came-from-where-going/gatsbygram.mp4`,
  //   `./public/gatsbygram.mp4`
  // )
}

import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"
import ArrowBackIcon from "react-icons/lib/md/arrow-back"
import Img from "gatsby-image"

import presets from "../utils/presets"
import typography, { rhythm, scale, options } from "../utils/typography"
import Container from "../components/container"

class BlogPostTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post =>
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    )

    return (
      <div>
        <Container className="post" css={{ paddingBottom: `0 !important` }}>
          <h1>
            {this.props.data.allMarkdownRemark.totalCount}
            {` `}posts tagged with “{this.props.pathContext.tag}”
          </h1>
          <ul>
            {postLinks}
          </ul>
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </Container>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

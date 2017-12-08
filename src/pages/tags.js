import React from "react"
import Link from "gatsby-link"
import kebabCase from "lodash/kebabCase"
import presets from "../utils/presets"
import { rhythm, scale, options } from "../utils/typography"
import Container from "../components/container"

class BlogTagsIndex extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group

    return (
      <div>
        <Container
          css={{
            [presets.Tablet]: {
              paddingBottom: `${rhythm(
                options.blockMarginBottom * 4
              )} !important`,
              backgroundSize: `30px 30px`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `bottom center`,
            },
          }}
        >
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag =>
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: `none`,
                }}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          )}
        </ul>
        </Container>
      </div>
    )
  }
}

export default BlogTagsIndex

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

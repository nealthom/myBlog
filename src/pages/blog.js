import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import sanitizeHtml from "sanitize-html"

export default ({ data }) => {
  const filterText = str => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec)
    })
  }

  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Thinking About Things
        </h1>

        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {filterText(node.title)}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.date}
                </span>
              </h3>
              <p>
                {`${sanitizeHtml(node.excerpt.slice(0, 50), {
                  allowedTags: [],
                })}...`}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MM.DD.YY")
        }
      }
    }
  }
`

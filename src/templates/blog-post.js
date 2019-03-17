import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #bbb;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        css={css`
          margin: 0 auto;
          max-width: 860px;
          padding: 1.45rem 1.0875rem;
        `}
      >
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>{post.frontmatter.date} - {post.fields.readingTime.text}</HeaderDate>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

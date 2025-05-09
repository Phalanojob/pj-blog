import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/Share"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <>
      <Header />
      <div className="md:my-[24px] mt-2 md:w-[800px] md:px-0 px-[24px]  w-auto mx-auto">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <article className="flex flex-col items-start mt-6">
            <header className="w-full">
              <h1
                itemProp="headline"
                className="text-gray-800 text-xl font-manrope text-start md:text-[36px] text-[24px] pt-[24px] md:pt-[32px] font-bold"
              >
                {post.frontmatter.title}
              </h1>
              <div className="border-b-[1px] border-gray-200 pb-3">
                <Share />
                <div className="mt-4 text-sm text-gray-500 font-medium">
                  Posted: {post.frontmatter.date}
                </div>
                <div className="mt-2 text-sm text-primary font-medium">
                  Phalano Job
                </div>
                <div></div>
              </div>
            </header>
            <div
              className="text-[16px] md:text-[18px] font-display leading-7 w-full mt-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>{" "}
          <hr />
        </article>
        <nav className="blog-post-nav mt-6">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

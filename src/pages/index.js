import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import Header from "../components/Header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div>
      <Header />
      <div className="max-w-[1400px] px-[20px] mx-auto mb-[48px]">
        <div className="flex justify-center items-center ">
          <div className="text-3xl text-gray-800 font-semibold mt-[32px]">
            <h1>Career Blogs</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image = getImage(post.frontmatter?.coverImage)

            return (
              <Link
                key={post.fields.slug}
                to={post.fields.slug}
                itemProp="url"
                className="hover:cursor-pointer w-[388px] h-auto rounded-xl bg-background border border-gray-300 relative p-4"
              >
                <div>
                  <div className="h-[216.6px] w-[100%]">
                    <StaticImage
                      className="object-cover w-full h-full rounded-md"
                      objectFit="cover"
                      quality={100}
                      height={100}
                      width={100}
                      src="../images/blog1.jpg"
                    />
                  </div>

                  {/* <div className="absolute top-6 right-6">
                  <div className="bg-[#fff9dc] border rounded-md border-[#E9E9EB]">
                    <h1 className="text-center py-1 px-3 text-primary text-[12px] font-manrope font-semibold rounded-full">
                      All
                    </h1>
                  </div>
                </div> */}
                  <div className="py-2 px-4 flex justify-start items-center sm:w-[90%] w-full">
                    <h1 className="text-gray-600 font-display text-[18px] font-semibold leading-7">
                      {title}
                    </h1>
                  </div>

                  <div className=" px-4 flex justify-start items-center w-[95%] overflow-y-hidden pb-[24px]">
                    <section className="text-gray-500 sm:w-[439px] w-auto mt-[12px]  font-normal text-[14px] leading-normal">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                  <div className="px-4 border-t-[1px] pt-2 border-gray-200 flex justify-between items-center gap-2 text-primary text-[14px]">
                    <p>{post.frontmatter.date}</p>
                    <p>9 min read</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          coverImage
        }
      }
    }
  }
`

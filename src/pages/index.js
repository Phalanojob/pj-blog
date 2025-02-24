import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import Header from "../components/Header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const categories = Array.from(
    new Set(posts.map(post => post.frontmatter.category))
  )
  const [activeCategory, setActiveCategory] = React.useState("All")
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter(post => post.frontmatter.category === activeCategory)

  // Function to calculate reading time
  const calculateReadingTime = wordCount => {
    const wordsPerMinute = 200 // Average reading speed
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
  }

  return (
    <div>
      <Header />
      <div className="max-w-[1400px] px-[20px] mx-auto mb-[48px]">
        <div className="flex justify-center items-center ">
          <div className="text-3xl text-gray-700 font-medium mt-[24px]">
            <h1>Career Blogs abcd</h1>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center my-4 space-x-4">
          {["All", ...categories].map(category => (
            <button
              key={category}
              style={{
                marginLeft: "10px",
              }}
              onClick={() => setActiveCategory(category)}
              className={`hover:cursor-pointer ${
                activeCategory === category
                  ? "bg-[#d7e0ee] "
                  : " bg-[#D7E0EE]/50"
              } rounded-full  flex-shrink-0 border-[1px] border-[#d7e0ee]`}
            >
              <div className="text-center py-2 px-4 text-[#111111] text-[12px] font-manrope font-semibold  whitespace-wrap w-full">
                {category}
              </div>
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="w-[95%] mx-auto pt-[24px]">
          <div className="flex flex-wrap gap-8 justify-start w-full">
            {filteredPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const image = getImage(
                post.frontmatter?.coverImage?.childImageSharp?.gatsbyImageData
              )
              const readingTime = calculateReadingTime(post.wordCount.words)

              return (
                <Link
                  key={post.fields.slug}
                  to={post.fields.slug}
                  itemProp="url"
                  className="hover:cursor-pointer w-[388px] h-auto rounded-xl bg-background border border-gray-300 relative p-4"
                >
                  <div>
                    <div className="h-[216.6px] w-[100%]">
                      <GatsbyImage
                        className="object-cover w-full h-full rounded-md"
                        image={image}
                        alt={title}
                      />
                    </div>
                    <div className="py-2 px-4 flex justify-start items-center sm:w-[90%] w-full">
                      <h1 className="text-gray-600 font-display text-[22px] font-semibold leading-7">
                        {title}
                      </h1>
                    </div>
                    // <div className=" px-4 flex justify-start items-center w-[95%] overflow-y-hidden pb-[24px]">
                    //   <section className="text-gray-500 sm:w-[439px] w-auto mt-[12px] font-normal text-[14px] leading-normal">
                    //     <p
                    //       dangerouslySetInnerHTML={{
                    //         __html:
                    //           post.frontmatter.description || post.excerpt,
                    //       }}
                    //       itemProp="description"
                    //     />
                    //   </section>
                    // </div>
                    <div className="px-4 border-t-[1px] pt-2 border-gray-200 flex justify-between items-center gap-2 text-primary text-[14px]">
                      <p>{post.frontmatter.date}</p>
                      <p>{readingTime}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
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
          category
          coverImage {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        wordCount {
          words
        }
      }
    }
  }
`

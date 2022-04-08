import { graphql } from 'gatsby';
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
  const { title } = data.contentfulBlogPost;

  return (
    <Layout>
    <GatsbyImage image={heroImage.gatsbyImageData} />
        <H1>{title}</H1>
        <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
    </Layout>
  );
}

export default BlogPost

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    heroImage {
      gatsbyImageData (
        layout: CONSTRAINED
        width: 960
      )
    } 
  }
}
`
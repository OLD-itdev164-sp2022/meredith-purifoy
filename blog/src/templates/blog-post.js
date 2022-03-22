import { graphql } from 'gatsby';
import React from 'react'
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
  const { title } = data.contentfulBlogPost;

  return (
    <Layout>
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
    }
  }
`
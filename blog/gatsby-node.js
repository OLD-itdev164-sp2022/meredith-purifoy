const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((res, rej) => {
    graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        rej(result.errors);
      }
      result.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            slug: edge.node.slug
          }
        })
      })
      res();
    })   
  });
};

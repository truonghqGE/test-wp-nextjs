import gql from "graphql-tag";
export const GET_CATEGORY = gql`
  query GraphQL {
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }
`;
export const GET_LIST_POSTS = gql`
  query GraphQL($categoryName: Array!) {
    informationalPost(where: { categoryName: $categoryName }) {
      nodes {
        title
        slug
        date
        content
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;

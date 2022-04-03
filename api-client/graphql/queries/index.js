import gql from "graphql-tag";
export const GET_CATEGORY = gql`
  query GraphQL {
    categories {
      nodes {
        name
        slug
        id
        uri
      }
    }
  }
`;
export const GET_LIST_POSTS = gql`
  query GraphQL($categoryName: String!) {
    informationalPost(where: { categoryName: $categoryName }) {
      nodes {
        title
        slug
        link
        id
        content
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;

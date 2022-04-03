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

export const GET_CATEGORY_BY_SLUG = gql`
  query getCategory($slug: [String]) {
    categories(where: { slug: $slug }) {
      edges {
        node {
          id
          count
          description
          link
          name
          uri
          slug
        }
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
            altText
            desiredSlug
            slug
            uri
            sourceUrl
          }
        }
      }
    }
  }
`;
export const GET_ALL_POST = gql`
  query NewQuery {
    informationalPost {
      edges {
        node {
          id
          slug
          title
          uri
          status
          modified
          template {
            templateName
          }
          content
          featuredImage {
            node {
              altText
              desiredSlug
              slug
              uri
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

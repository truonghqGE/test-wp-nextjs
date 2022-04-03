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
  query GraphQL($categoryName: String!) {
    informationalPost(where: { categoryName: $categoryName }) {
      nodes {
        title
        slug
        link
        id
        content
        date
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;
export const GET_POST_BY = gql`
  query GraphQL($slug: String!) {
    informationBy(slug: $slug) {
      title
      uri
      slug
      content
      featuredImage {
        node {
          uri
        }
      }
      date
      author {
        node {
          lastName
          name
          firstName
          email
          description
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

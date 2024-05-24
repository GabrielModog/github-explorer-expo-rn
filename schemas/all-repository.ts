import { gql } from "urql";

export const ALL_REPOSITORY_SCHEMA = gql`
  query ($nextPage: String) {
    search(
      first: 50
      after: $nextPage
      type: REPOSITORY
      query: "language:javascript language:go"
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          id
          name
          description
          createdAt
          stargazerCount
          forkCount
          url
          homepageUrl

          owner {
            id
            login
            avatarUrl
            ... on ProfileOwner {
              name
            }
          }

          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

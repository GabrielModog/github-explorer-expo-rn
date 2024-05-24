import { gql } from "urql";

export const REPOSITORY_SCHEMA = gql`
  query (
    $nextPage: String
    $repositoryName: String!
    $username: String!
    $state: [PullRequestState!]
  ) {
    repository(name: $repositoryName, owner: $username) {
      id
      name
      description

      open: pullRequests(states: OPEN) {
        totalCount
      }

      closed: pullRequests(states: CLOSED) {
        totalCount
      }

      pullRequests(
        first: 10
        after: $nextPage
        states: $state
        orderBy: { direction: DESC, field: CREATED_AT }
      ) {
        nodes {
          id
          title
          bodyText
          url
          createdAt

          author {
            login
            avatarUrl
            ... on User {
              name
            }
          }
        }

        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }

      owner {
        id
        avatarUrl
        login
      }
    }
  }
`;

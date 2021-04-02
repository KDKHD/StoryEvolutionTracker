import { gql } from "apollo-server-lambda";

export default gql`
  type Example {
    hello: String
  }

  extend type Query {
    example: Example
  }

  extend type Mutation {
    example: Example
  }
`;

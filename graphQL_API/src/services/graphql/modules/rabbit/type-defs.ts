import { gql } from "apollo-server-lambda";

export default gql`
  type MessageSent {
      keywords: [String]
      uid: String,
      nextQueue: [String]
      bookmarked: Boolean
  }

  extend type Query {
    pythonSearch(keywords: [String]): MessageSent
    processUrl(url: String): MessageSent
  }
`;

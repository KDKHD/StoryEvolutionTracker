import { gql } from "apollo-server-lambda";

export default gql`
  type User {
    _id: String
    bookmarks: [Search]
    history: [Search]
    notifications: [Search]
    email: String
    name: String
  }

  type Search{
    url: String
    title: String
    date: String
    text: String
  }

  extend type Query {
    user: User
  }
`;

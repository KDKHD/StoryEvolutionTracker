import { gql } from "apollo-server-lambda";

export default gql`

  type SearchBody {
    description: String
    link: String
    title: String
    publish_date: String
  }
  
`;

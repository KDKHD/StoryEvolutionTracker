import { gql } from "apollo-server-lambda";

export default gql`

  type KeyPhrase {
    BeginOffset: Int,
    EndOffset: Int,
    Score: Int,
    Text: String
  }

  type ComprehendArticle {
    authors: [String]
    publish_date: String
    text: String
    title: String
    top_image: String
    link: String
  }

  type ComprehendResponse {
    KeyPhrases: [KeyPhrase]
    SearchString: String
    article: ComprehendArticle
    search(num: Int, start: Int, date_min: String, date_max: String): [SearchBody]
  }
  
  extend type Query {
    comprehendArticle(url: String!): [ComprehendResponse] 
  }

`;

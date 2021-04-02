import { gql } from "apollo-server-lambda";

export default gql`

  type ArticleResponse {
    status: Int
    message: String
    article: Article
  }

  type Article {
    _id: String
    canonical_link: String
    authors: [String]
    images: [String]
    keywords: [ArticleKeywords]
    link_hash: String
    meta_data: MetaData
    meta_img: String
    meta_keywords: [ArticleKeywords]
    meta_lang: String
    movies: [String]
    publish_date: String
    source_url: String
    summary: String
    text: String
    title: String
    top_image: String
    url: String
    dork: DorkResponse
  }

  type ArticleKeywords {
    name: String
    value: String
    rant: Int
    major: String
  }

  type MetaData{
    viewport: String
    section: String
    referrer: String
    og: ArticleOG
    pubdate: String
    lastmod: String
    author: String
    twitter: Twitter
    description: String
    keywords: String
    thumbnail: String
    vr: ArticleVr
    template_top: String

  }

  type ArticleVr {
    canonical: String
  }

  type Twitter {
    title: String
    card: String
    image: String
  }

  type ArticleOG {
    pubdate: String
    url: String
    title: String
    description: String
    site_name: String
    type: String
    image: ArticleImage
  }

  type ArticleImage {
    identifier: String
    width: Int
    height: Int
  }

  extend type Query {
    article(url: String!): ArticleResponse 
    articles(urls: [String!]): [ArticleResponse]
  }

`;

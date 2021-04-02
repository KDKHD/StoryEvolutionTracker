import { gql } from "apollo-server-lambda";

export default gql`

  type DorkThumbnail {
    src: String
  }

  type DorkMetatags{
    template_top:String
    og_image:String
    twitter_card:String
    og_image_width:String
    theme_color:String
    og_site_name:String
    section:String
    vr_canonical:String
    article_content_tier:String
    og_description:String
    twitter_image:String
    og_pubdate:String
    lastmod:String
    pubdate:String
    witter_title:String
    og_type:String
    thumbnail:String
    author:String
    og_title:String
    og_image_height:String
    fb_pages:String
    referrer:String
    fb_app_id:String
    viewport:String
    twitter_description:String
    og_url:String
    article_opinion:String
  }

  type DorkCse_image {
    src:String
    width:String
    type:String
    height:String
  }

  type DorkNewsarticle {
    image:String
    keywords:String
    author:String
    ispartof:String
    description:String
    datecreated:String
    url:String
    articlebody:String
    datemodified:String
    articlesection:String
    alternativeheadline:String
    headline:String
    datepublished:String
    thumbnailurl:String
  }


  type DorkPagemap{
    thumbnail:[DorkThumbnail]
    metatags:[DorkMetatags]
    cse_image:[DorkCse_image]
    newsarticle:[DorkNewsarticle]
  }

  type DorkItem {
    kind:String
    title:String
    htmlTitle:String
    link:String
    displayLink:String
    snippet:String
    htmlSnippet:String
    formattedUrl:String
    htmlFormattedUrl:String
    pagemap:DorkPagemap
  }

  type DorkResponse {
    statusCode: Int
    body: DorkResponseBody
  }

  type DorkResponseBody {
    items: [DorkItem]
  }

  extend type Query {
    dork(keywords: [String!]!): DorkResponse 
  }

`;

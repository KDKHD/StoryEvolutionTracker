import { DorkProvider } from "../dork/provider";
import { ArticleProvider } from "./provider";

export const resolvers = {
  Query: {
    article: async (_parent, { url }, { userInfo }, info) => {
      let article = await ArticleProvider.getOrIngestArticles.load(url);
      return article;
    },
    articles: async (_parent, { urls }, { userInfo }, info) => {
      let articles = ArticleProvider.getOrIngestArticles.loadMany(urls);
      return articles;
    },
  },
  Article:{
    dork: async ({meta_keywords, meta_data:{keywords}}, _, { userInfo }, info) => {
      let dorkResult = DorkProvider.dorkByKeywords(["Subways, Goodson, Malaysia (1996-2019), Transit Systems, Elevators and Escalators, Metropolitan Transportation Authority, New York City, Falls, Accidents and Safety, Deaths (Fatalities), Disabilities"]) //meta_keywords.map(meta_keyword=>meta_keyword.value)
      return dorkResult;
    },
  }
};

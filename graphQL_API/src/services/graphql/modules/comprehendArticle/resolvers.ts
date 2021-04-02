import { DorkProvider } from "../dork/provider";
import { SearchProvider } from "../search/provider";
import { ComprehendProvider } from "./provider";

export const resolvers = {
  Query: {
    comprehendArticle: async (_parent, { url }, { userInfo }, info) => {
      let comprehendArticle = await ComprehendProvider.comprehendUrl(url);
      return comprehendArticle;
    },
  },
  ComprehendResponse: {
    search: async (
      { SearchString },
      { num, start, date_min, date_max },
      { userInfo },
      info
    ) => {
      let similarResults = await SearchProvider.searchString(SearchString, {
        num,
        start,
        date_min,
        date_max,
      });
      return similarResults;
    },
  },
};

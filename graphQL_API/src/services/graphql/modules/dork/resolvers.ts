import { DorkProvider } from "./provider";

export const resolvers = {
  Query: {
    dork: async (_parent, { keywords }, { userInfo }, info) => {
      let dorkResponse = await DorkProvider.dorkByKeywords(keywords);
      return dorkResponse;
    },
  },
};

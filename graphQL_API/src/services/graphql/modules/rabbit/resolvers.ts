import { RabbitProvider } from "./provider";

export const resolvers = {
  Query: {
    pythonSearch: async (_parent, args, { userInfo }, info) => {
      // return RabbitProvider.pythonSearch(args.keywords)
    },
    processUrl: async (_parent, args, { decodedToken }, info) => {
      return RabbitProvider.processUrl(args.url, decodedToken.data.id)
    },
  },
};

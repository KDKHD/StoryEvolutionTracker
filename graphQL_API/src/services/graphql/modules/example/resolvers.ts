export const resolvers = {
  Query: {
    example: async (_parent, args, { userInfo }, info) => {
      return { hello: "Hello World" };
    },
  },
  Mutation: {
    example: async (_parent, args, { userInfo }) => {
      return { hello: "Mutation Hello World" };
    },
  },
};

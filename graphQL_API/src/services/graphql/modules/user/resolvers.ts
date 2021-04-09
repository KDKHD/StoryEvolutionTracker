import { UserProvider } from "./provider";

export const resolvers = {
  Query: {
    user: async (_parent, args, { decodedToken }, info) => {
      let x = await UserProvider.user(decodedToken.data.id);
      if (x == null) return 
      x["bookmarksTemp"] = x["bookmarks"] || []
      delete x["bookmarks"]
      return x
    },
    updateBookmark: async (_parent, {url, state}, { decodedToken }, info) => {
      return UserProvider.updateBookmark(decodedToken.data.id, url, state);
    },
  },
  User:{
    bookmarks: async ({bookmarksTemp}, args, { decodedToken }, info) => {
      return UserProvider.search.loadMany(Object.keys(bookmarksTemp))
    },

    notifications: async ({bookmarksTemp}, args, { decodedToken }, info) => {
      return UserProvider.search.loadMany(Object.keys(bookmarksTemp).filter(key=>bookmarksTemp[key]>0))
    },
  }
  
};

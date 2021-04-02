import { ApolloServer } from "apollo-server-lambda";
import schema from "./modules";
import db from "../../database/connection";
import jwt from "jsonwebtoken";
require("dotenv").config();

db._connect();

export default new ApolloServer({
  schema,
  context: async ({ event, context }) => {
    const header = event.headers.authorization || event.headers.Authorization || "";
    let token = header.split(" ")[1];
    let decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    // add the user to the context
    return { decodedToken, token };
  },
});

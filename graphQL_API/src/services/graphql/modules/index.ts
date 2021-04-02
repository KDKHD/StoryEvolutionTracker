import { makeExecutableFromModules } from "../utils/modules";
import example from "./example";
import article from "./article";
import dork from "./dork"
import comprehendArticle from "./comprehendArticle"
import search from "./search"
import rabbit from "./rabbit"
import user from "./user"
const schema = makeExecutableFromModules({
  modules: [example, article, dork, comprehendArticle, search, rabbit, user],
});

export default schema;

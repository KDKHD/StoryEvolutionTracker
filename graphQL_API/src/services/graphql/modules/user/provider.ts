import User from "../../../../database/models/user";
import Search from "../../../../database/models/search";
import { shake128 } from "js-sha3";

import DataLoader from "dataloader";

export class UserProvider {
  static user = async (id: String) => {
    return User.findById(id).populate("history");
  };

  static updateBookmark = async (id: string, url: string, state: Boolean) => {
    let articlePath= `bookmarks.${shake128(url, 256).slice(0,24)}`

    if(state){
      await User.updateOne({ _id: id }, {[articlePath]:0})
    }
    else{
      await User.updateOne({ _id: id }, {"$unset":{[articlePath]:""}})
    }
    return {state}
  };

  static search = new DataLoader((id: String[]) => {
    return Search.find({ _id: { $in: id } });
  });
}

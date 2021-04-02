import User from "../../../../database/models/user";
import Search from "../../../../database/models/search";

import DataLoader from "dataloader";

export class UserProvider {
  static user = async (id: String) => {
    return User.findById(id).populate("history");
  };

  static search = new DataLoader((id: String[]) => {
    return Search.find({ _id: { $in: id } });
  });
}

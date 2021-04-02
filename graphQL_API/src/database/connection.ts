import { connect } from "mongoose";

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await connect(`mongodb+srv://dev:j16c8SXcLTlIty1R@cluster0.uwf3u.mongodb.net/articles?authSource=admin&replicaSet=atlas-tcrrsf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true });
      require('./models/search');

      console.log("Database connection successful");
    }
    catch(error) {
      console.error(error)
    }
  }
}

export default new Database();



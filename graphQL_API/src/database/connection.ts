import { connect } from "mongoose";

const MONGO_DB_URL= process.env.MONGO_DB_URL


class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await connect(MONGO_DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true });
      require('./models/search');

      console.log("Database connection successful");
    }
    catch(error) {
      console.error(error)
    }
  }
}

export default new Database();



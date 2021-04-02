import mongoose, { Schema } from "mongoose";
require('./search');

var UserSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  passwordh: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  bookmarks: {
    type: Object
  },
  history: [{ type: Schema.Types.ObjectId, ref: "Search" }],
});

export default mongoose.model("User", UserSchema, "users");

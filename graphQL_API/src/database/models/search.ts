import mongoose, { Schema } from "mongoose";
var SearchSchema = new mongoose.Schema({
  url: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  publish_date: {
    type: "string",
    required: true,
  },
  text: {
    type: "string",
    required: true,
  },

  similar: [{ type: Schema.Types.ObjectId, ref: "Search" }],
});

export default mongoose.model("Search", SearchSchema, "search");

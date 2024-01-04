const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  designer: { type: String, required: true },
  followers: { type: String },
  like: { type: Number },
});

const HomeModel = mongoose.model("home", homeSchema);
module.exports = HomeModel;

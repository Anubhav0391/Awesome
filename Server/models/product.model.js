const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
});

const ProductModel = mongoose.model("earring", productSchema);
module.exports = ProductModel;

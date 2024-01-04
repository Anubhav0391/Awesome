const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId:{type: String,required:true},
  user:{type: String,required:true},
  title: { type: String, required: true },
  img1: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  size:{type: String,required:true},
  quantity:{type: Number,required:true}
});

const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
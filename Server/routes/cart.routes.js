const express = require("express");
const CartModel = require("../models/cart.model");
const cartRouter = express.Router();

//user routes

cartRouter.get("/", async (req, res) => {
  try {
    const Cart = await CartModel.find({ userId: req.body.userId });
    res.status(200).send(Cart);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const alreadyAdded = await CartModel.find(req.body);
    console.log(alreadyAdded)
    if (alreadyAdded.length) {
      res.status(400).send({ msg: "Already added to the cart" });
    } else {
      req.body.quantity = 1;
      const Cart = new CartModel(req.body);
      await Cart.save();
      res.status(200).send({ msg: "Product added to the cart" });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

cartRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const a=await CartModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Cart updated successfully",a });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product deleted from the cart"});
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = cartRouter;

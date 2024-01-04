const express = require("express");
const ProductModel = require("../models/product.model");
const productRouter = express.Router();

//user routes

productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findOne({ _id: id });
    if (!product) {
      res.status(400).send({ msg: "Product not found" });
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

//admin routes

productRouter.post("/", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).send({ msg: "Product added successfully" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

productRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product updated successfully" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

productRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = productRouter;

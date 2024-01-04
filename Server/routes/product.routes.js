const express = require("express");
const ProductModel = require("../models/product.model");
const productRouter = express.Router();

//user routes

productRouter.get("/", async (req, res) => {
  let order, page, limit, from, till, pages, products;

  if (req.query.order === "asc") {
    order = 1;
  } else if (req.query.order === "desc") {
    order = -1;
  }

  let sort = req.query.sort;
  let sortObj = {};
  sortObj[sort] = order;

  page = +req.query.page;
  limit = +req.query.limit;

  from = +req.query.from;
  till = +req.query.till;

  delete req.query.order;
  delete req.query.sort;
  delete req.query.page;
  delete req.query.limit;
  delete req.query.from;
  delete req.query.till;

  try {
    if (order && sort && from >= 0 && till > 0) {
      products = await ProductModel.find({
        $and: [
          req.query,
          { $and: [{ price: { $gte: from } }, { price: { $lte: till } }] },
        ],
      }).sort(sortObj);
    } else if (from >= 0 && till > 0) {
      products = await ProductModel.find({
        $and: [
          req.query,
          { $and: [{ price: { $gte: from } }, { price: { $lte: till } }] },
        ],
      });
    } else if (order && sort) {
      products = await ProductModel.find(req.query).sort(sortObj);
    } else {
      products = await ProductModel.find(req.query);
    }

    if (page > 0 && limit > 0) {
      pages = Math.ceil(products.length / limit);
      products = products.slice((page - 1) * limit, page * limit);
    } else if (page <= 0 || limit <= 0) {
      products = [];
    }

    res.status(200).send([products, pages]);
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

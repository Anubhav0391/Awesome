const express = require("express");
const HomeModel = require("../models/home.model");
const homeRouter = express.Router();

//user routes

homeRouter.get("/", async (req, res) => {
  try {
    const {page, limit } = req.query;

    let products = await HomeModel.find();
    
    if (page > 0 && limit > 0) {
      products = products.slice((page - 1) * limit, page * limit);
    } else if (page <= 0 || limit <= 0) {
      products = [];
    }

    res.status(200).send(products);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

homeRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await HomeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Like added successfully" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = homeRouter;

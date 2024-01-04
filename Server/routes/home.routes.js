const express = require("express");
const HomeModel = require("../models/home.model");
const homeRouter = express.Router();

//user routes

homeRouter.get("/", async (_, res) => {
  try {
    const products = await HomeModel.find();
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

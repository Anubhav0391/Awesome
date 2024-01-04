const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const { adminAuth } = require("../middlewares/authorization");

const userRouter = express.Router();

//user routes

userRouter.post("/register", async (req, res) => {
  const { name, email, password, admin} = req.body;

  if (!name || !email || !password || admin === undefined) {
    return res.status(400).send({ err: "All fields are required." });
  }

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).send({ err: err.message });
      } else {
        const existing = await UserModel.findOne({ email });
        if (existing) {
          res.send({ msg: "User already exist" });
        } else {
          let user = new UserModel({
            name,
            email,
            admin,
            password: hash,
          });
          await user.save();
          res.status(200).send({ msg: "Registered Successfully" });
        }
      }
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ err: "All fields are required." });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (_, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user.name, admin: user.admin },
            process.env.key
          );
          res.status(200).send({
            msg: `Login Successful`,
            token,
            user,
          });
        } else {
          res.status(400).send({ msg: "Wrong Password" });
        }
      });
    } else {
      res.status(400).send({ msg: `${email} does not exist.` });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});


//admin routes
userRouter.use(adminAuth)

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find(req.query);
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    if (req.body.password) {
      bcrypt.hash(req.body.password, 5, async (err, hash) => {
        if (err) {
          res.status(400).send({ err: err.message });
        } else {
          req.body.password = hash;
          await UserModel.findByIdAndUpdate({ _id: id }, req.body);
          res.status(200).send({ msg: "Password changed successfully" });
        }
      });
    } else {
      await UserModel.findByIdAndUpdate({ _id: id }, req.body);
      res.status(200).send({ msg: "User updated successfully" });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = userRouter;

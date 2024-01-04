const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.key);
      if (decoded) {
        req.body.userId = decoded.userId;
        req.body.user = decoded.user;
        next();
      } else {
        res.status(400).send({ msg: "Please login" });
      }
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  } else {
    res.status(400).send({ msg: "Please login" });
  }
};

const authorization = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.key);
      if (decoded && decoded.admin) {
        next();
      } else {
        res.status(400).send({ msg: "You are not authorized to this action" });
      }
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  } else {
    res.status(400).send({ msg: "You are not authorized to this action" });
  }
};

module.exports = { authentication, authorization };

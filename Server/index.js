const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const homeRouter = require("./routes/home.routes");
const cartRouter = require("./routes/cart.routes");
const { authentication } = require("./middlewares/auth");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", homeRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use(authentication)
app.use("/cart", cartRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
});
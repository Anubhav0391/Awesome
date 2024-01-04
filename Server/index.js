const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(_,res)=>{
  res.send("Home")
})

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
});
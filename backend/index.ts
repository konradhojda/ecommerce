import express from "express";
import { data } from "./data";
import mongoose, { ConnectOptions } from "mongoose";
import userRouter from "./routers/userRouter";
require("dotenv").config();
const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xcwc9.mongodb.net/test`
);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  product
    ? res.send(product)
    : res.status(404).send({ message: "Product not found." });
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use("/api/users", userRouter);
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

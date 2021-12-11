import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import userRouter from "./routers/userRouter";
import productRouter from "./routers/productRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(
  process.env.MONGO_URL ||
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xcwc9.mongodb.net/test`
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

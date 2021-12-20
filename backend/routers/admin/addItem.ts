import express from "express";
import Product from "../../models/productModel";
import expressAsyncHandler from "express-async-handler";

const addItemRouter = express.Router();

addItemRouter.post(
  "/additem",
  expressAsyncHandler(async (req, res) => {
    const item = await Product.insertMany(req.body);
    res.status(200).send({ message: "Data has been inserted" });
    res.status(400).send({ message: "Invalid data" });
    res.send(item);
  })
);

export default addItemRouter;

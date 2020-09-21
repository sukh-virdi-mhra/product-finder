import mongoose from "mongoose";
import Order from "./order";
import Product from "./product";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/product-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { Product, Order };

export { connectDb };

export default models;
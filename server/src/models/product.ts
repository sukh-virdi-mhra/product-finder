import mongoose from "mongoose";

// TODO: work out best way to have methods on these models

export interface IProduct extends Document {
  plNumber: String
  name: String
  dose: String
  substance: String
  url: String
}

const productSchema = new mongoose.Schema(
  {
    plNumber: {
      type: String,
      unique: false,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
    dose: {
      type: String,
      unique: false,
      required: true,
    },
    substance: {
      type: String,
      unique: false,
      required: true,
    },
    url: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", productSchema)

export default Product;
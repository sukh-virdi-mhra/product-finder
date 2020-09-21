import mongoose from "mongoose";

// TODO: work out best way to have methods on these models

export interface IOrder extends Document {
    plNumber: String
    customerId: String
    orderId: String
}

const orderSchema = new mongoose.Schema(
  {
    plNumber: {
      type: String,
      unique: false,
      required: true,
    },
    
    customerId: {
      type: String,
      unique: false,
      required: true,
    },

    orderId: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", orderSchema)

export default Order;
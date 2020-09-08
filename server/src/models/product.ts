import mongoose from "mongoose";

// export default class Product {
//   plNumber: string
//   name: string
//   dose: string
//   substance: string

//   url: string

//   constructor(
//     plNumber: string,
//     name: string,
//     dose: string,
//     substance: string,
//     url: string
//   ) {
//     this.plNumber = plNumber
//     this.name = name
//     this.dose = dose
//     this.substance = substance
//     this.url = url
//   }

//   toString(): string {
//     return `
//     PL Number: ${this.plNumber}
//     Name: ${this.name}
//     Dose: ${this.dose}
//     Substance: ${this.substance}
//     URL: ${this.url}
//     `
//   }
// }

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

const Product = mongoose.model("Product", productSchema);

export default Product;
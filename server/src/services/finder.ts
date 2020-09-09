import Product, { IProduct } from "../models/product";
import models from "../models";

export default class ProductFinder {
  menu: IProduct[]

  constructor() {
    models.Product.find({}, (err, productItems) => {
    console.log(productItems)
    this.menu = productItems
  })
 }

}
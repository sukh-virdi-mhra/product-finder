import Product from "../models/product";
import models from "../models";

export default class ProductFinder {
  menu: typeof models.Product[];

  // dataSource: () => Object

  // constructor(dataSource) {
  //   this.dataSource = dataSource
  // }

  // getProduct(product: string): Product {
  //   let productObjects = this.dataSource()
  //   return productObjects[product]
  // }

  constructor() {
    models.Product.find({}, (err, productItems) => {
      console.log(productItems);
      this.menu = productItems;
    });
  }
}
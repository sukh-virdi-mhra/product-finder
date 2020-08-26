import Product from "../models/product"
export default class ProductFinder {
  dataSource: () => Object

  constructor(dataSource) {
    this.dataSource = dataSource
  }

  getProduct(product: string): Product {
    let productObjects = this.dataSource()
    return productObjects[product]
  }
}

import Product from "../models/product"

export default function getData() {
  const product1 = new Product("PL123456", "name", "dose", "substance", "url")
  const product2 = new Product("PL513872", "name", "dose", "substance", "url")
  const product3 = new Product("PL999999", "name", "dose", "substance", "url")
  const product4 = new Product("PL654321", "name", "dose", "substance", "url")
  const product5 = new Product("PL818181", "name", "dose", "substance", "url")
  const products = [product1, product2, product3, product4, product5]

  let productObjects = {}
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    productObjects[product.plNumber] = product
  }

  return productObjects
}

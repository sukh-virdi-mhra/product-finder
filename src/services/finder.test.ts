import ProductFinder from "./finder"
import Product from "../models/product"

function setup(name) {
  let mockProduct = new Product(
    "PL1000",
    name,
    "test-dose",
    "test-substance",
    "test-url"
  )
  return () => {
    return { PL1000: mockProduct }
  }
}

describe("Product Finder Test", () => {
  test("returns product when product exists", () => {
    let mockDataSource = setup("test-name")

    let finder = new ProductFinder(mockDataSource)
    let result = finder.getProduct("PL1000")
    expect(result).toBeInstanceOf(Product)
  })
  test("check if Product name matches", () => {
    let expected = "test-name"
    let mockDataSource = setup(expected)

    let finder = new ProductFinder(mockDataSource)
    let result = finder.getProduct("PL1000").name

    expect(result).toBe(expected)
  })
})

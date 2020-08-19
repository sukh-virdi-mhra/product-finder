import Product from "./product"

describe("Product class test", () => {
  test("can be created", () => {
    let product1 = new Product("plNumber", "name", "dose", "substance", "url")
    expect(product1.plNumber).toBe("plNumber")
  }),
    test("can be created", () => {
      console.log = jest.fn()
      let product1 = new Product("plNumber", "name", "dose", "substance", "url")
      let expectedOutput = `
    PL Number: plNumber
    Name: name
    Dose: dose
    Substance: substance
    URL: url
    `
      expect(product1.toString()).toBe(expectedOutput)
    })
})

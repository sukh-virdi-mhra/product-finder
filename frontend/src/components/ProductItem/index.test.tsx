import React from "react"
import { shallow, mount } from "enzyme"
import ProductItem from "./index"

let Product = {
    plNumber: "PL001730050",
    name: "Ibugel gel",
    dose: "10mg",
    substance: "Ibuprofen",
    url: "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca"
}

describe("ProductItem", () => {
  it("renders shallow", () => {
    const component = shallow(<ProductItem item={Product} />)
    expect(component).toMatchSnapshot()
  }),
    it("renders mount", () => {
      const component = mount(<ProductItem item={Product} />)
      expect(component).toMatchSnapshot()
    })
})
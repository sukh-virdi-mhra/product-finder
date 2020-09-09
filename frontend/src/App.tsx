import React, { useState, useEffect } from "react"
import "./App.css"
import ProductSelect from "./components/ProductSelect/index"
import IProduct from "./models/product"
import ProductItem from "./components/ProductItem"

function App() {
  // let [basket, setBasket] = useState<string[]>([])
  let [menu, setMenu] = useState<IProduct[]>([])  


  useEffect(() => {
    fetch("/menu")
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [])

  return (
    <div className="App">
      {menu.map((productItem) => {
        return <ProductItem item={productItem} />
      })}
    </div>
  )
}


export default App

import React, { useState, useEffect } from "react"
import "./App.css"
import ProductSelect from "./components/ProductSelect/index"
import IProduct from "./models/product"

function App() {
  // let [basket, setBasket] = useState<string[]>([])
  let [menu, setMenu] = useState<IProduct[]>([])  


  useEffect(() => {
    fetch("/menu")
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [])

  return <div className="App"></div>
}

export default App

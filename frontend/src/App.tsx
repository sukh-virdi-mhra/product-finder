import React, { useState, useEffect } from "react"
import "./App.css"
import ProductSelect from "./components/ProductSelect/index"

function App() {
  let [basket, setBasket] = useState<string[]>([])

  const updateBasket = (product: string) => {
    basket.push(product)
    setBasket(basket)
  }

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((response) => console.log(response))
  })

  return (
    <div className="App">
      <ProductSelect name="Ibugel gel" onSubmit={updateBasket} />
      <ProductSelect name="Anadin Extra" onSubmit={updateBasket} />
      <ProductSelect name="Tadalafil" onSubmit={updateBasket} />
      <ProductSelect name="Nabilone" onSubmit={updateBasket} />
      <ProductSelect name="Ramipril" onSubmit={updateBasket} />
    </div>
  )
}

export default App
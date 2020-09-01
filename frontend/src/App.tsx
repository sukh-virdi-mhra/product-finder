import React, { useState} from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/index"
import ProductSearch from "./components/ProductSearch/index"
import ProductSelect from "./components/ProductSelect/index"

function App() { 
  let [basket, setBasket] = useState<string[]>([])
  const updateBasket = (food: string) => {
    basket.push(food)
    setBasket(basket)
  }

  return (
    <div className="App">
      <ProductSelect name="Ibugel gel" onSubmit={updateBasket} />
      <ProductSelect name="Anadin Extra" onSubmit={updateBasket}/>
      <ProductSelect name="Tadalafil" onSubmit={updateBasket}/>      
      <ProductSelect name="Nabilone" onSubmit={updateBasket}/>      
      <ProductSelect name="Ramipril" onSubmit={updateBasket}/>        
    </div>
  )
}

export default App

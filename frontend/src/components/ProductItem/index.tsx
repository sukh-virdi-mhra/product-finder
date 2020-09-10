import React, { useState, FormEvent } from "react"
import IProduct from "../../models/product"
import styled from "styled-components"

const StyledProductItem = styled.div`
  font-family: Calibri;
  color: red;
  font-size: 20px;
  font-weight: 900;
  border-style: solid;
  margin: 20px;
  padding: 10px;
`

interface IProductItem {
  item: IProduct
}

const ProductItem: React.FC<IProductItem> = (props) => {
  function handleClick() {
    console.log("Button clicked")
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch("/order", { method: "POST" })
  }

  return (
    <StyledProductItem>
      <p>{props.item.plNumber}</p>
      <p>{props.item.name}</p>
      <p>{props.item.dose}</p>
      <p>{props.item.substance}</p>
      <p>{props.item.url}</p>
      <button type="button" onClick={handleClick}>
        Order
      </button>
    </StyledProductItem>
  )
}

export default ProductItem
import React, { useState, FormEvent } from "react"
import IProduct from "../../models/product"
import styled from "styled-components"

const StyledFoodItem = styled.div`
  font-family: Calibri;
  color: red;
  font-size: 60px;
  font-weight: 900;
`

interface IProductItem {
  item: IProduct
}

const ProductItem: React.FC<IProductItem> = (props) => {
  return (
    <StyledFoodItem>
      <p>{props.item.plNumber}</p>
      <p>{props.item.name}</p>
      <p>{props.item.dose}</p>
      <p>{props.item.substance}</p>
      <p>{props.item.url}</p>
    </StyledFoodItem>
  )
}

export default ProductItem
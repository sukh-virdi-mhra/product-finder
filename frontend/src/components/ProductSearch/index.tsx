import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: blue;
  font-size: 80px;
`

export default function ProductSearch() {
  return (
    <form> 
      <label> Search for Products:
      <input type="text" name="product" id="product" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
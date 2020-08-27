import React, { useState, FormEvent } from "react";

export default function ProductSearch() {
  let [searchedProduct, setSearchedProduct] = useState("");
  let [searchedProducts, setSearchedProducts] = useState<string[]>([]);

  const updateProduct = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSearchedProduct(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchedProducts.push(searchedProduct);
    setSearchedProducts(searchedProducts);
    setSearchedProduct("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search For Product:
          <input
            type="text"
            name="product"
            id="product"
            value={searchedProduct}
            onChange={updateProduct}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Searched products</h2>
        {searchedProducts.map((product) => (
          <p>{product}</p>
        ))}
      </div>
    </div>
  );
}
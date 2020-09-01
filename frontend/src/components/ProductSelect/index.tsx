import React, { useState, FormEvent } from "react";

interface IProductSelectProps {
  name: string
  onSubmit: (food: string) => void
}

export default function ProductSearch(props: IProductSelectProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(props.name);
};

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{props.name}</button>
    </form>
  )
}


//return (
//  <div>
//    <form onSubmit={handleSubmit}>
//      <button type="button"> </button>
//    </form>
//    <div>
//      <h2>Searched products</h2>
//      {searchedProducts.map((product) => (
//        <p>{product}</p>
//      ))}
//    </div>
//  </div>
//);
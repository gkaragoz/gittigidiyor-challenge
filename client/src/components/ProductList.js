import React from "react";
import ProductCard from "./ProductCard";

import { getProductsQuery } from "../api/queries";
import { useQuery } from "@apollo/client";

function ProductList() {
  const DisplayProductCards = () => {
    const { loading, error, data } = useQuery(getProductsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    console.log(data);
  };

  return (
    <div>
      <h1>İlginizi Çekebilecek Ürünler</h1>
      {DisplayProductCards()}
      <ProductCard />
    </div>
  );
}

export default ProductList;

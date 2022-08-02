import React from "react";
import productsData from "../../../data/phones.js";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <div className="products p-4">
      <div className="products__list row row-cols-4 g-4 m-0 ">
        {productsData.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

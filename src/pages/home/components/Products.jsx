import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../../context/FilterProvider.js";

import productsData from "../../../data/phones.js";
import ProductItem from "./ProductItem";
const Products = () => {
  const { filter } = useContext(FilterContext);
  console.log(filter);
  // const { filter } = useContext(FilterProvider);
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

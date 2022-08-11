import React from "react";
import ProductDetails from "./components/ProductDetails";
import "./ProductDetails.css";
const ProductDetailsContainer = () => {
  return (
    <div className="product-details__container cover">
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsContainer;

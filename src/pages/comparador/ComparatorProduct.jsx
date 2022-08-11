import React from "react";
import { useLocation } from "react-router-dom";
import ComparadorTabla from "./ComparadorTabla";
import "./ComparadorProduct.css";
const ComparatorProduct = () => {
  return (
    <div className="cover d-flex justify-content-center align-items-center comparator-product">
      <ComparadorTabla />
    </div>
  );
};

export default ComparatorProduct;

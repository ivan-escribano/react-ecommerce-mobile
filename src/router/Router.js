import React from "react";
import { Routes, Route } from "react-router-dom";
import ComparadorGraphic from "../pages/comparador/ComparadorGraphic";
import ComparadorTabla from "../pages/comparador/ComparadorTabla";
import ComparatorProduct from "../pages/comparador/ComparatorProduct";
import { Comparador, Home, ProductDetailsContainer } from "../pages/index";
import ProductDetails from "../pages/product-details/components/ProductDetails";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="product-details" element={<ProductDetailsContainer />}>
        <Route path=":product" element={<ProductDetails />}></Route>
      </Route>
      <Route path="comparador" element={<Comparador />} />
      <Route path="comparator-product" element={<ComparatorProduct />}>
        <Route index element={<ComparadorTabla />} />
        <Route path="table" element={<ComparadorTabla />} />
        <Route path="graphic" element={<ComparadorGraphic />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;

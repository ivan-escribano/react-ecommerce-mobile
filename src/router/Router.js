import React from "react";
import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
};

export default Router;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Checkout, ProductDetails } from "../pages/index";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="product-details" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;

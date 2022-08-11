import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProductDetailsContainer } from "../pages/index";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="product-details" element={<ProductDetailsContainer />} />
    </Routes>
  );
};

export default Router;

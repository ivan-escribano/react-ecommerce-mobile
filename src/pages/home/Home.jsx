import React from "react";
import Cover from "./components/Cover";
import Products from "./components/Products";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Cover />
      <h1 className="m-5">Our products.</h1>
      <Products />
    </>
  );
};

export default Home;

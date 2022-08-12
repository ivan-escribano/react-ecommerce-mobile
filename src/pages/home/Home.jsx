import React from "react";
import Footer from "../../components/footer/Footer";
import Cover from "./components/Cover";
import Products from "./components/Products";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Cover />
      <div className="products-header d-flex justify-content-between m-5 align-items-center">
        <h2 className="h1">Our products.</h2>
        <button
          className="fw-normal btn btn-color"
          data-bs-toggle="modal"
          data-bs-target="#filterModal"
        >
          filtros
          <i className=" ms-2 fa-solid fa-filter"></i>
        </button>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Home;

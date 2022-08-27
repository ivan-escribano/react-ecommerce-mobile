import React from "react";
import { useContext } from "react";
import EmptyComponent from "../../../components/empty/EmptyComponent.jsx";
import { FilterContext } from "../../../context/FilterProvider.js";
import emptyImg from "../../../assets/img/empty.webp";
import productsData from "../../../data/phones.js";
import ProductItem from "./ProductItem";
const Products = () => {
  const { filter: options } = useContext(FilterContext);
  const filterProducts = () => {
    const products = productsData
      .filter((product) => {
        if (!options.price.min && !options.price.max) return product;
        else if (
          product.price >= options.price.min &&
          product.price <= options.price.max
        )
          return product;
      })
      .filter((product) => {
        if (options.color === "all") return product;
        else if (product.color === options.color) return product;
      })
      .filter((product) => {
        if (options.brand === "all") return product;
        else if (product.brand === options.brand) return product;
      })
      .map((product) => <ProductItem product={product} key={product.id} />);
    return products.length > 0 ? (
      products
    ) : (
      <div className="d-flex flex-column m-auto">
        <h3>No products finded</h3>
        <img src={emptyImg} alt="Empty image" />
      </div>
    );
    return products;
  };
  console.log(options);
  // const { filter } = useContext(FilterProvider);
  return (
    <div className="products p-4">
      <div className="products__list row row-cols-4 g-4 m-0 ">
        {filterProducts()}
      </div>
    </div>
  );
};

export default Products;

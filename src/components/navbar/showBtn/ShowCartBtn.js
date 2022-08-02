import React from "react";
import { BsCartFill } from "react-icons/bs";
const ShowCartBtn = () => {
  return (
    <>
      {/* Button trigger modal  */}

      <i
        class="fa-solid fa-cart-shopping navbar-icons"
        data-bs-toggle="modal"
        data-bs-target="#shoppingCart"
      ></i>
    </>
  );
};

export default ShowCartBtn;

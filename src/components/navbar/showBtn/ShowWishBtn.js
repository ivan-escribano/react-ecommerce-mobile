import React from "react";
import { BsHeartFill } from "react-icons/bs";
const ShowWishBtn = () => {
  return (
    <>
      <i
        className="fa-solid fa-heart navbar-icons"
        data-bs-toggle="modal"
        data-bs-target="#wishListModal"
      ></i>
    </>
  );
};

export default ShowWishBtn;

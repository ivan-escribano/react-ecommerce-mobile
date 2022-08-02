import React from "react";
import SearchForm from "./SearchForm";
import ShowCartBtn from "./ShowCartBtn";
import ShowLoginBtn from "./ShowLoginBtn";
import ShowWishBtn from "./ShowWishBtn";

const ShowBtn = () => {
  return (
    <div className="navbar__buttons d-flex">
      <SearchForm />
      <ShowCartBtn />
      <ShowWishBtn />
      <ShowLoginBtn />
    </div>
  );
};

export default ShowBtn;

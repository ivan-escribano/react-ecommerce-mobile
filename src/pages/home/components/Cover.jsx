import React from "react";
import CoverDescrtiption from "./CoverDescrtiption";
import CoverImg from "./CoverImg";
const Cover = () => {
  return (
    <div className="cover d-flex p-5">
      <CoverDescrtiption />
      <CoverImg />
    </div>
  );
};

export default Cover;

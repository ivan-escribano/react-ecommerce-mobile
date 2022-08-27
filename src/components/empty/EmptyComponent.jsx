import React from "react";
import emptyImg from "../../assets/img/empty.webp";
const EmptyComponent = ({ cartTitle }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h4>{cartTitle} is empty.</h4>
      <img src={emptyImg} alt="Empty image" className="w-50" />
    </div>
  );
};

export default EmptyComponent;

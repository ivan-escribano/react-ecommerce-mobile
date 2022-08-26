import React from "react";

const CoverDescrtiption = () => {
  return (
    <div className="cover__description d-flex flex-column justify-content-center mb-5">
      <h1 className="cover__description-title" style={{ width: "62%" }}>
        At <span className="fw-bolder text-danger">GoTech</span> , we take pride
        in our work and enjoy the satisfaction of a job well done
      </h1>
      <div className="cover__description-button">
        <button className="btn btn-color my-3">
          <i className="fa-solid fa-cart-shopping me-2"></i>Start shopping
        </button>
      </div>
    </div>
  );
};

export default CoverDescrtiption;

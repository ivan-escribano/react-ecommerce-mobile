import React from "react";

const FilterColor = () => {
  return (
    // !COLORS
    <div className="filter-colors my-4">
      <h5 className="my-3">
        Colors <i class="fa-solid fa-palette mx-1"></i> :
      </h5>
      <div className="d-flex row row-cols-4 gy-3 ">
        <div className="col d-flex flex-column align-items-center ">
          <input
            type="radio"
            name="color"
            value="white"
            id="all-color"
            className="input-filter"
          />
          <label htmlFor="all-color" className="label-filter input-all"></label>{" "}
          <span className="fs-6">Default</span>
        </div>
        <div className="col d-flex flex-column align-items-center ">
          <input
            type="radio"
            name="color"
            value="black"
            id="black"
            className="input-filter"
          />
          <label htmlFor="black" className="label-filter input-black"></label>
          <span className="fs-6">Black</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="white"
            id="white"
            className="input-filter"
          />
          <label htmlFor="white" className="label-filter input-white"></label>
          <span className="fs-6">White</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="blue"
            id="blue"
            className="input-filter"
          />
          <label htmlFor="blue" className="label-filter input-blue"></label>
          <span className="fs-6">Blue</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="red"
            id="red"
            className="input-filter"
          />
          <label htmlFor="red" className="label-filter input-red"></label>
          <span className="fs-6">Red</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="green"
            id="green"
            className="input-filter"
          />
          <label htmlFor="green" className="label-filter input-green"></label>
          <span className="fs-6">Green</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="pink"
            id="pink"
            className="input-filter"
          />
          <label htmlFor="pink" className="label-filter input-pink"></label>
          <span className="fs-6">Pink</span>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <input
            type="radio"
            name="color"
            value="purple"
            id="purple"
            className="input-filter"
          />
          <label htmlFor="purple" className="label-filter input-purple"></label>
          <span className="fs-6">Purple</span>
        </div>
      </div>
    </div>
  );
};

export default FilterColor;

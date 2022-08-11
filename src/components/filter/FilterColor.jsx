import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";
const FilterColor = () => {
  const { setFilter } = useContext(FilterContext);
  const handleColor = (event) => {
    const color = event.target.value;
    setFilter((prevState) => ({ ...prevState, color: color }));
  };
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
            value="all"
            id="all-color"
            className="input-filter"
            onChange={handleColor}
          />
          <label htmlFor="all-color" className="label-filter input-all"></label>
          <span className="fs-6">All</span>
        </div>
        <div className="col d-flex flex-column align-items-center ">
          <input
            type="radio"
            name="color"
            value="black"
            id="black"
            className="input-filter"
            onChange={handleColor}
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
            onChange={handleColor}
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
            onChange={handleColor}
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
            onChange={handleColor}
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
            onChange={handleColor}
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
            onChange={handleColor}
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
            onChange={handleColor}
          />
          <label htmlFor="purple" className="label-filter input-purple"></label>
          <span className="fs-6">Purple</span>
        </div>
      </div>
    </div>
  );
};

export default FilterColor;

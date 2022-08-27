import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";

const FilterBrand = () => {
  const { setFilter } = useContext(FilterContext);

  const handleChange = (event) => {
    const brand = event.target.value;
    setFilter((prevState) => ({ ...prevState, brand: brand }));
  };
  return (
    <div className="filter-brand my-4">
      <h5>
        Brand <i className="fa-solid fa-mobile-screen-button mx-1"></i> :
      </h5>
      <div className="d-flex flex-column">
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="all"
          />
          <span>All</span>
        </label>
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="samsung"
          />
          <span>Samsung</span>
        </label>
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="xiaomi"
          />
          <span>Xiaomi</span>
        </label>
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="asus"
          />
          <span>Asus</span>
        </label>
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="vivo"
          />
          <span>Vivo</span>
        </label>
        <label htmlFor="" className="my-1">
          <input
            type="radio"
            className="form-check-input mx-3"
            name="phone"
            onChange={handleChange}
            value="google"
          />
          <span>Google</span>
        </label>
      </div>
    </div>
  );
};

export default FilterBrand;

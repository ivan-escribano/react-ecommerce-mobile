import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";
const FilterPrice = () => {
  const [error, setError] = useState(null);
  const { setFilter } = useContext(FilterContext);
  const inputMax = useRef();
  const inputMin = useRef();
  const handlePrice = () => {
    const max = inputMax.current.value;
    const min = inputMin.current.value;
    if (max && min) {
      setError(null);
      setFilter((prevState) => ({
        ...prevState,
        price: { max: max, min: min },
      }));
    } else {
      setError(true);
    }
  };
  return (
    <div className="filter-price my-4">
      <h5>
        Price <i class="fa-solid fa-money-bill-1-wave"></i> :
      </h5>
      <div className="d-flex">
        <input
          type="number"
          placeholder="Min. price"
          className="form-control w-75 me-2"
          ref={inputMin}
          min={0}
        />
        <input
          type="number"
          placeholder="Max. price"
          className="form-control w-75 me-2"
          ref={inputMax}
          min={0}
        />
      </div>
      <p className="text-danger">{error && "Need to set both ranges"}</p>
      <button className="btn btn-color my-2" onClick={handlePrice}>
        Add range
      </button>
    </div>
  );
};

export default FilterPrice;

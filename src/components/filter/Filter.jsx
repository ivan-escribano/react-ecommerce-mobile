import React from "react";
import "./Filter.css";
import FilterBrand from "./FilterBrand";
import FilterColor from "./FilterColor";
import FilterPrice from "./FilterPrice";
const Filter = () => {
  return (
    <div>
      <div
        className="modal fade right"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-filter modal-dialog-scrollable">
          <div className="modal-content modal__content-filter">
            <div className="modal-header cover">
              <div className="d-flex align-items-center">
                <h5 className="modal-title" id="filterModalLabel">
                  Filter
                </h5>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/*//!ALL FILTERS */}
            <div className="modal-body container">
              <FilterPrice />
              <FilterColor />
              <FilterBrand />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

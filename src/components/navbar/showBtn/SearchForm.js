import React from "react";

const SearchForm = () => {
  return (
    <div className="navbar__search mx-3">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        data-bs-toggle="modal"
        data-bs-target="#searcherModal"
      />
    </div>
  );
};

export default SearchForm;

import React from "react";

const SearchForm = () => {
  return (
    <div className="navbar__search mx-3">
      <input
        className="form-control mr-sm-2 search__read-only"
        type="search"
        placeholder="Search"
        data-bs-toggle="modal"
        data-bs-target="#searcherModal"
        readOnly
      />
    </div>
  );
};

export default SearchForm;

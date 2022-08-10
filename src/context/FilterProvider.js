import React, { createContext, useState } from "react";

export const FilterContext = createContext({});
const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    color: "all",
    price: { max: false, min: false },
    brand: "all",
  });
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

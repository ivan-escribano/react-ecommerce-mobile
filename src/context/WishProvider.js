import React, { createContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useWishReduce from "../hooks/useWishReduce";
import getLocalStorage from "../utils/getLocalStorage";

export const WishContext = createContext();
const WishProvider = ({ children }) => {
  const initialData = getLocalStorage("wishList");
  const [wishList, dispatch] = useReducer(useWishReduce, initialData);
  useLocalStorage("wishList", wishList);
  return (
    <WishContext.Provider value={{ wishList, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};

export default WishProvider;

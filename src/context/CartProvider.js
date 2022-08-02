import React from "react";
import { createContext, useReducer } from "react";
import useShoppingCart from "../hooks/useShoppingCart";
import getLocalStorage from "../utils/getLocalStorage";
import useLocalStorage from "../hooks/useLocalStorage";
export const ContextCart = createContext({});
const CartProvider = ({ children }) => {
  const initialData = getLocalStorage("shoppingCart");
  const [shoppingCart, dispatch] = useReducer(useShoppingCart, initialData);
  useLocalStorage("shoppingCart", shoppingCart);
  return (
    <ContextCart.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </ContextCart.Provider>
  );
};

export default CartProvider;

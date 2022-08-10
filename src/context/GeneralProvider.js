import React from "react";
import AlertProvider from "./AlertProvider";
import CartProvider from "./CartProvider";
import FilterProvider from "./FilterProvider";
import LoginProvider from "./LoginProvider";
import WishProvider from "./WishProvider";
const GeneralProvider = ({ children }) => {
  return (
    <>
      <AlertProvider>
        <CartProvider>
          <WishProvider>
            <LoginProvider>
              <FilterProvider>{children}</FilterProvider>
            </LoginProvider>
          </WishProvider>
        </CartProvider>
      </AlertProvider>
    </>
  );
};

export default GeneralProvider;

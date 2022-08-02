import React from "react";
import AlertProvider from "./AlertProvider";
import CartProvider from "./CartProvider";
import LoginProvider from "./LoginProvider";
import WishProvider from "./WishProvider";
const GeneralProvider = ({ children }) => {
  return (
    <>
      <AlertProvider>
        <CartProvider>
          <WishProvider>
            {children}
            <LoginProvider>{children}</LoginProvider>
          </WishProvider>
        </CartProvider>
      </AlertProvider>
    </>
  );
};

export default GeneralProvider;

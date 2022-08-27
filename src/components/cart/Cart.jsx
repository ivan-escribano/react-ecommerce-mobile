import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../context/CartProvider";
import ProductCart from "./ProductCart";
import emptyImg from "../../assets/img/empty.webp";
import EmptyComponent from "../empty/EmptyComponent";
const Cart = () => {
  const { shoppingCart } = useContext(ContextCart);
  return (
    <div>
      {shoppingCart.length > 0 ? (
        shoppingCart.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))
      ) : (
        <EmptyComponent cartTitle={"Shopping cart"} />
      )}
    </div>
  );
};
export default Cart;

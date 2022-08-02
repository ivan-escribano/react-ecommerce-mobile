import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../context/CartProvider";
import ProductCart from "./ProductCart";
const Cart = () => {
  const { shoppingCart } = useContext(ContextCart);
  return (
    <div>
      {shoppingCart.map((product) => (
        <ProductCart product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Cart;

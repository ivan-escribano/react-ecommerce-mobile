import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../context/CartProvider";
import { totalPrice } from "../../utils/getTotalPrice";

const Checkout = () => {
  const { shoppingCart } = useContext(ContextCart);
  const price = totalPrice(shoppingCart);
  return (
    <>
      <h5 className="card-text">Total price: {price}€</h5>
      {/* onClick={goCheckout} */}
      <button
        className="btn btn-color"
        data-bs-target="#checkoutModal"
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
        disabled={shoppingCart.length > 0 ? false : true}
      >
        Checkout
      </button>
    </>
  );
};

export default Checkout;

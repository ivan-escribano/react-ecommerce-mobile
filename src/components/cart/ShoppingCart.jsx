import React from "react";
// import { useRef } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  //   const shoppingFormClose = useRef();
  //   useRef
  return (
    <div>
      {/* Button trigger modal  */}

      <div
        className="modal fade"
        id="shoppingCart"
        aria-labelledby="shoppingCartLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header cover">
              <h5 className="modal-title">Shopping cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // ref={shoppingFormClose}
              ></button>
            </div>
            <div className="modal-body">
              <Cart />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import confirmation from "../../assets/img/confirmation.png";
import { ContextCart } from "../../context/CartProvider";
const CheckoutConfirm = () => {
  const navigate = useNavigate();
  const close = useRef();
  const { dispatch } = useContext(ContextCart);
  const handleClick = async () => {
    dispatch({ type: "resetShop", payload: { product: "" } });
    close.current.click();
  };
  return (
    <div
      class="modal fade"
      id="confirmModal"
      tabindex="-1"
      aria-labelledby="confirmModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={close}
            ></button>
          </div>
          <div class="modal-body text-center">
            <img
              src={confirmation}
              alt="Confirmation order"
              className="img w-50"
            />
            <h3>Your order is completed!</h3>
            <p>You will be receiving a confirmation email with order details</p>
            <button
              className="btn btn-color w-100"
              onClick={() => handleClick()}
            >
              Go home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirm;

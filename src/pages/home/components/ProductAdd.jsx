import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../../context/CartProvider";
import { AlertContext } from "../../../context/AlertProvider";
import { BsFillBasketFill } from "react-icons/bs";
const ProductAdd = ({ product }) => {
  const contextCart = useContext(ContextCart);
  const { shoppingCart, dispatch } = contextCart;
  const { setAlert, alertType } = useContext(AlertContext);
  //!DISPATCH FUNCTION CORRESPONDANT TYPE
  const handleClick = () => {
    dispatch({ type: "add", payload: { product: product } });
    setAlert(alertType.add);
  };
  //!CHECK BUTTON STATUS
  const checkBtnStatus = () => {
    //Check if product exist in shopping cart and return false/true
    const statusBtn = shoppingCart.some((item) => item.id === product.id);
    return statusBtn;
  };
  return (
    <button
      className="btn btn-color d-flex justify-content-center align-items-center"
      onClick={() => handleClick()}
      disabled={checkBtnStatus()}
    >
      <span className="me-2">Buy now </span>
      <BsFillBasketFill />
    </button>
  );
};

export default ProductAdd;

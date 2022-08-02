import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../context/CartProvider";
import { AlertContext } from "../../context/AlertProvider";
const ProductDeleteBtn = ({ product }) => {
  const { dispatch } = useContext(ContextCart);
  const { setAlert, alertType } = useContext(AlertContext);
  const handleClick = () => {
    dispatch({ type: "delete", payload: { product: product } });
    setAlert(alertType.delete);
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={() => handleClick()}>
        Delete
      </button>
    </div>
  );
};

export default ProductDeleteBtn;

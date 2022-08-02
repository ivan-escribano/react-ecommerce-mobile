import { useContext } from "react";
import { ContextCart } from "../../context/CartProvider";

const ProductQuantity = ({ product }) => {
  const { dispatch } = useContext(ContextCart);
  const substractFunction = () => {
    dispatch({ type: "substractQuantity", payload: { product: product } });
  };
  const addFunction = () => {
    dispatch({ type: "addQuantity", payload: { product: product } });
  };
  return (
    <div className="product-quantity">
      <input
        type="number"
        className="form-control  form-control-sm
          w-25"
        min="1"
        value={product.quantity}
        readOnly
      />
      <div className="quantity__btn-container">
        <div className="quantity__btn-item">
          <button onClick={() => substractFunction()} className="quantity__btn">
            <span className="quantity__btn-span">➖</span>
          </button>
        </div>
        <div className="quantity__btn-item">
          <button onClick={() => addFunction()} className="quantity__btn">
            <span className="quantity__btn-span">➕</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;

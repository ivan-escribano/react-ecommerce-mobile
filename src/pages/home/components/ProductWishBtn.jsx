import React from "react";
import { useContext } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { WishContext } from "../../../context/WishProvider";
const ProductWishBtn = ({ product }) => {
  const { wishList, dispatch } = useContext(WishContext);
  const inWishList = wishList.some((wish) => wish.id === product.id);

  return (
    <div>
      {inWishList ? (
        <BsHeartFill
          style={{ color: "red", cursor: "pointer", fontSize: "25px" }}
          onClick={() =>
            dispatch({ type: "removeWishList", payload: { product: product } })
          }
        />
      ) : (
        <BsHeart
          style={{ color: "red", cursor: "pointer", fontSize: "25px" }}
          onClick={() =>
            dispatch({ type: "addWishList", payload: { product: product } })
          }
        />
      )}
    </div>
  );
};

export default ProductWishBtn;

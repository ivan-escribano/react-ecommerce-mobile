import React from "react";
import { useLocation } from "react-router-dom";
import ProductAdd from "../../home/components/ProductAdd";
import ProductWishBtn from "../../home/components/ProductWishBtn";
const ProductDetails = () => {
  const { state } = useLocation();
  const { name, price, description, img, color, brand } = state;
  return (
    <div className="product-details ">
      <div className="product-image p-5">
        <div className="product-image__main">
          <img src={img} alt="" className="w-100" />
        </div>
        <div className="product-image__carroussel">
          <div className="product-miniature">
            <img src={img} alt="" className="w-100 p-2" />
          </div>
          <div className="product-miniature">
            {/* //TODO IMAGES FRONT AND BACK */}
            <img src={img} alt="" className="w-100 p-2" />
          </div>
          <div className="product-miniature">
            {/* //TODO IMAGES FRONT AND BACK */}
            <img src={img} alt="" className="w-100 p-2" />
          </div>
        </div>
      </div>
      {/* //TODO COLOR AND BRAND ADD */}
      <div className="product-description p-5 d-flex flex-column justify-content-center">
        <h1 className="py-2">{name}</h1>
        <hr className="cover btn-color" />
        <p className="py-2">{description}</p>
        <h3 className="py-2">{price}€</h3>
        <div className="d-flex align-items-center justify-content-between">
          <ProductAdd product={state} />
          <ProductWishBtn product={state} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

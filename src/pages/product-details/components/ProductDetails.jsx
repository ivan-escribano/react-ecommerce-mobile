import React from "react";
import productData from "../../../data/phones";
const ProductDetails = () => {
  console.log(productData[0]);
  return (
    <div className="product-details ">
      <div className="product-image p-5">
        <div className="product-image__main">
          <img src={productData[2].img} alt="" className="w-100" />
        </div>
        <div className="product-image__carroussel">
          <div className="product-miniature">
            <img src={productData[2].img} alt="" className="w-100 p-2" />
          </div>
          <div className="product-miniature">
            <img src={productData[2].img} alt="" className="w-100 p-2" />
          </div>
          <div className="product-miniature">
            <img src={productData[2].img} alt="" className="w-100 p-2" />
          </div>
        </div>
      </div>
      <div className="product-description p-5 d-flex flex-column justify-content-center">
        <h1 className="py-2">{productData[2].name}</h1>
        <hr className="cover btn-color" />
        <p className="py-2">{productData[2].description}</p>
        <h3 className="py-2">{productData[2].price}€</h3>
        <button className="btn btn-color w-25 py-2">
          Buy now<i class="fa-solid fa-basket-shopping ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import ProductAdd from "../../pages/home/components/ProductAdd";
import ProductWishBtn from "../../pages/home/components/ProductWishBtn";

const WishListItem = ({ wishItem }) => {
  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={wishItem.img}
            className="img-fluid rounded-start p-3"
            alt={wishItem.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{wishItem.name}</h5>
            <p className="card-text">{wishItem.price} €</p>
            <div className="card-text d-flex justify-content-between align-items-center">
              <ProductAdd product={wishItem} />
              <ProductWishBtn product={wishItem} className="wish__btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;

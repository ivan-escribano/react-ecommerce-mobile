import React from "react";
import { useContext } from "react";
import { WishContext } from "../../context/WishProvider";
import "./WishList.css";
import WishListItem from "./WishListItem";
const WishListModal = () => {
  const { wishList } = useContext(WishContext);

  return (
    <div
      class="modal fade right"
      id="wishListModal"
      tabindex="-1"
      aria-labelledby="wishListModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-wish modal-dialog-scrollable">
        <div class="modal-content modal-contentWish">
          <div class="modal-header cover">
            <h5 class="modal-title" id="wishListModalLabel">
              Wish List
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {wishList.map((wishItem) => (
              <WishListItem key={wishItem.id} wishItem={wishItem} />
            ))}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListModal;

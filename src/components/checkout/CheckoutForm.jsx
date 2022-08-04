import React from "react";
import Cart from "../cart/Cart";

const CheckoutForm = () => {
  return (
    <div
      class="modal fade"
      id="checkoutModal"
      aria-hidden="true"
      aria-labelledby="checkoutModalLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header cover">
            <h5 class="modal-title" id="exampleModalToggleLabel">
              Payment details
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ">
            <h6>
              User info <i class="fa-solid fa-user"></i> :
            </h6>
            <hr className="cover" />
            <div className="form-payment py-2">
              <div className="user info">
                {/* First row name , Lastname */}
                <div class="row ">
                  <div class="col">
                    <label for="name" class="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      id="name"
                    />
                  </div>
                  <div class="col">
                    <label for="inputEmail4" class="form-label">
                      Lastname:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      id="Lastname"
                    />
                  </div>
                </div>
                {/* 2 row email and address */}

                <div class="col py-2">
                  <label for="email" class="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    id="email"
                  />
                </div>

                <div class="col py-2">
                  <label for="inputEmail4" class="form-label">
                    Adress:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Adress"
                    aria-label="Adress"
                    id="Adress"
                  />
                </div>
              </div>
              <div className="payment-info py-3">
                {/* PAYMENT CARD */}
                <h6>
                  Payment info <i class="fa-brands fa-cc-visa"></i>:
                </h6>
                <hr className="cover" />
                <div class="col py-2">
                  <label for="name-credit" class="form-label">
                    Name credit card:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full name"
                    aria-label="Full name"
                    id="name-credit"
                  />
                </div>
                <div class="col py-2">
                  <label for="card-number" class="form-label">
                    Card number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="**** **** **** ****"
                    aria-label="Card number"
                    id="card-number"
                  />
                </div>
                <div className="row py-2 ">
                  <div className="col d-flex flex-column">
                    <label for="expiration" class="form-label">
                      Expires:
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className=" form-control me-1"
                        placeholder="MM/MM"
                        id="expire-month"
                      />
                      <input
                        type="text"
                        className=" form-control"
                        placeholder="YY/YY"
                        id="expire-year"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="cvc" class="form-label">
                      CVC:
                    </label>
                    <input
                      type="text"
                      className=" form-control"
                      placeholder="XXX"
                      id="cvc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-color w-100"
              data-bs-target="#confirmModal"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

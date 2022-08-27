import React from "react";
import Cart from "../cart/Cart";
import { useForm } from "react-hook-form";
import { checkoutValidation } from "../../utils/checkoutValidation";
import "./Checkout.css";

const CheckoutForm = () => {
  //useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    //When to apply treact-hook-form event
    mode: "onChange",
  });
  //Date disable in input -  get current date disable dates past today
  const date = new Date();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const minDate = `${date.getFullYear()}-${month}`;
  const handleCheckout = (data) => {};
  const handleError = (errors) => {};
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
            <form
              className="form-payment py-2"
              onSubmit={handleSubmit(handleCheckout, handleError)}
            >
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
                      name="firstname"
                      {...register("firstname", checkoutValidation.firstName)}
                    />
                    <small className="checkout__error">
                      {errors?.firstname && errors.firstname.message}
                    </small>
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
                      name="lastname"
                      {...register("lastname", checkoutValidation.lastName)}
                    />
                    <small className="checkout__error">
                      {errors?.lastname && errors.lastname.message}
                    </small>
                  </div>
                </div>
                {/* 2 row email and address */}

                <div class="col py-2">
                  <label for="email" class="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    id="email"
                    name="email"
                    {...register("email", checkoutValidation.email)}
                  />
                  <small className="checkout__error">
                    {errors?.email && errors.email.message}
                  </small>
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
                    name="address"
                    {...register("address", checkoutValidation.address)}
                  />
                  <small className="checkout__error">
                    {errors?.address && errors.address.message}
                  </small>
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
                    name="nameCard"
                    {...register("nameCard", checkoutValidation.nameCard)}
                  />
                  <small className="checkout__error">
                    {errors?.nameCard && errors.nameCard.message}
                  </small>
                </div>
                <div class="col py-2">
                  <label for="card-number" class="form-label">
                    Card number:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="**** **** **** ****"
                    aria-label="Card number"
                    id="card-number"
                    name="cardNumber"
                    {...register("cardNumber", checkoutValidation.creditCard)}
                  />
                  <small className="checkout__error">
                    {errors?.cardNumber && errors.cardNumber.message}
                  </small>
                </div>
                <div className="row py-2 ">
                  <div className="col d-flex flex-column">
                    <label for="expiration" class="form-label">
                      Expires:
                    </label>
                    <div>
                      <input
                        type="month"
                        className=" form-control me-1"
                        placeholder="MM"
                        id="expire-month"
                        min={minDate}
                        name="expire"
                        {...register("expire", checkoutValidation.expire)}
                      />
                      <small className="checkout__error">
                        {errors?.expire && errors.expire.message}
                      </small>
                    </div>
                  </div>
                  <div className="col">
                    <label for="cvc" class="form-label">
                      CVC:
                    </label>
                    <input
                      type="number"
                      className=" form-control"
                      placeholder="XXX"
                      id="cvc"
                      name="cvc"
                      {...register("cvc", checkoutValidation.cvc)}
                    />
                    <small className="checkout__error">
                      {errors?.cvc && errors.cvc.message}
                    </small>
                  </div>
                </div>
              </div>{" "}
              <div class="modal-footer">
                <button
                  class="btn btn-color w-100 btn__checkout"
                  data-bs-target="#confirmModal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  disabled={!isValid}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

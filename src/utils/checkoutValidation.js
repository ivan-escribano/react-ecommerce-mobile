//Otion validations for react hook forms
export const checkoutValidation = {
  firstName: { required: "First name is required" },
  lastName: { required: "Last name is required " },
  email: {
    required: "Email is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email",
    },
  },
  address: {
    required: "Address is required",
  },
  nameCard: {
    required: "Credit card name is required",
  },
  creditCard: {
    required: "Credit card is required",
    pattern: {
      value: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
      message: "Only visa and master cards are allowed",
    },
  },
  expire: {
    required: "Expire date is required",
  },
  cvc: {
    required: "Cvc is required",
    minLength: { value: 3, message: "Need 3 digits" },
    maxLength: { value: 3, message: "Need 3 digits" },
  },
};

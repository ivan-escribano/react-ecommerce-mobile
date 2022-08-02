function useShoppingCart(state, action) {
  const { type, payload } = action;
  const { product } = payload;
  switch (type) {
    case "add":
      return add(product, state);
    case "delete":
      return deleteItem(product, state);
    case "substractQuantity":
      return substractQuantity(product, state);
    case "addQuantity":
      return addQuantity(product, state);
    default:
      break;
  }
}

//!CHECK PRODUCT EXISTANCE
let checkProductExistance = (product, state) => {
  const existProduct = state.some((item) => item.id == product.id);
  return existProduct;
};
//!ADD ITEMS TO SHOPPING CART
const add = (product, state) => {
  let existProduct = checkProductExistance(product, state);
  //Check if product exist in state
  if (!existProduct) {
    //If doesnt exist add property quantity
    product.quantity = 1;
    //Add new product to shopping cart
    return [...state, product];
  } else {
    return [...state];
  }
};
//! DELETE ITEMS
const deleteItem = (product, state) => {
  //Store only the items that not have the ID clicked on because its deleted and we ant to erase it from array
  const filterCart = state.filter((item) => {
    if (item.id !== product.id) {
      return item;
    } else {
      item.quantity = 0;
    }
  });

  return filterCart;
};

//!ADD QUANTITY
const addQuantity = (product, state) => {
  const shopCart = [...state];
  shopCart.map((item) => {
    if (product.id === item.id) item.quantity = item.quantity + 1;
  });
  return shopCart;
};

//!SUBSTRACT QUANTITY
const substractQuantity = (product, state) => {
  if (product.quantity > 1) {
    const shopCart = [...state];
    shopCart.map((item) => {
      if (product.id === item.id) item.quantity = item.quantity - 1;
    });
    return shopCart;
  } else {
    return state;
  }
};
export default useShoppingCart;

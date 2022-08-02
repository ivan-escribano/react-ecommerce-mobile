const useWishReduce = (currentState, action) => {
  const { type, payload } = action;
  const { product } = payload;
  switch (type) {
    case "addWishList":
      return add(product, currentState);
    case "removeWishList":
      return remove(product, currentState);

    default:
      break;
  }
};

const add = (product, currentState) => {
  const newState = [...currentState, product];
  return newState;
};
const remove = (product, currentState) => {
  const filteredWish = currentState.filter(
    (wishProduct) => wishProduct.id !== product.id
  );
  return filteredWish;
};
export default useWishReduce;

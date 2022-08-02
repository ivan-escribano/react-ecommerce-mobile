export const totalPrice = (shoppingCart) => {
  const price = shoppingCart.reduce((total, product) => {
    return product.price * product.quantity + total;
  }, 0);
  return price;
};

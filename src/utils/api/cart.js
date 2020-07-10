export default {
  addCartItem: (item) => {
    localStorage.setItem(
      'cart',
      JSON.stringify(
        JSON.parse(localStorage.getItem('cart'))
          ? [...JSON.parse(localStorage.getItem('cart')), item]
          : [item]
      )
    );
  },
  getCartItems: () => {
    return JSON.parse(localStorage.getItem('cart'));
  },
  removeCartItem: (index) => {
    const items = JSON.parse(localStorage.getItem('cart')).filter(
      (item, key) => index !== key
    );
    localStorage.setItem('cart', JSON.stringify([...items]));
    return JSON.parse(localStorage.getItem('cart'));
  },
};

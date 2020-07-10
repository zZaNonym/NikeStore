import { cartApi, productsApi } from '../../utils/api';

const actions = {
  setCartItems: (items) => ({
    type: 'SET_CART_ITEMS',
    payload: items,
  }),
  removeCartItem: (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
  }),
  fetchAddCartItem: (item) => (dispatch) => {
    const itemObj = { ...productsApi.getSelectedItem(item.id)[0] };
    itemObj.size = item.size;
    cartApi.addCartItem(itemObj);
    dispatch(actions.setCartItems(cartApi.getCartItems()));
  },
  fetchGetCartItems: () => (dispatch) => {
    dispatch(actions.setCartItems(cartApi.getCartItems()));
  },
  fetchRemoveCartItems: (index) => (dispatch) => {
    dispatch(actions.setCartItems(cartApi.removeCartItem(index)));
  },
};

export default actions;

import { productsApi } from '../../utils/api';

const actions = {
  setItems: (items) => ({
    type: 'SET_ITEMS',
    payload: items,
  }),
  setSelectedItem: (item) => ({
    type: 'SET_SELECTED_ITEM',
    payload: item,
  }),
  fetchSelectedItem: (id) => (dispatch) => {
    dispatch(actions.setSelectedItem(productsApi.getSelectedItem(id)[0]));
  },
  fetchProductsData: () => (dispatch) => {
    dispatch(actions.setItems(productsApi.getProductsData()));
    return true;
  },
};

export default actions;

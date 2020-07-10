const initialState = {
  items: [],
};

const NavBar = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CART_ITEMS': {
      return { ...state, items: payload };
    }
    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        items: state.items.filter((item, index) => index !== payload),
      };
    }
    default:
      return { ...state };
  }
};

export default NavBar;

const initialState = {
  items: [],
  selectedItem: {},
};

const NavBar = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_ITEMS': {
      return { ...state, items: [...payload] };
    }
    case 'SET_SELECTED_ITEM': {
      return { ...state, selectedItem: { ...payload } };
    }
    default:
      return { ...state };
  }
};

export default NavBar;

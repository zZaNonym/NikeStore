const initialState = {
  page: null,
  isLoading: false,
};

const NavBar = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PAGE_DATA': {
      return { ...state, page: payload };
    }
    case 'SET_IS_LOADING': {
      return { ...state, isLoading: payload };
    }
    default:
      return { ...state };
  }
};

export default NavBar;

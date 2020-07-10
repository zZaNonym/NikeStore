const initialState = {
  windowDimension: window.innerWidth,
};

const NavBar = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET-WINDOW-DIMENSION': {
      return { ...state, windowDimension: payload };
    }
    default:
      return { ...state };
  }
};

export default NavBar;

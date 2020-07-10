import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { NavBarActions, CartActions } from '../redux/actions';

import { NavbarDesktop, NavbarMobile } from '../components';

const Navbar = ({
  setWindowDimension,
  windowDimension,
  fetchGetCartItems,
  cartItems,
}) => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  // eslint-disable-next-line
  const updateWindowDimensions = () => {
    if (windowDimension > 890 && window.innerWidth < 890) {
      setWindowDimension(window.innerWidth);
    } else if (windowDimension < 890 && window.innerWidth > 890) {
      setWindowDimension(window.innerWidth);
    }
  };
  const handleOutsideClick = (el, e) => {
    if (burgerMenu && el && !el.contains(e.target)) {
      setBurgerMenu(false);
    }
  };
  const handleClickMenu = () => {
    setBurgerMenu(true);
  };
  const handleClickInput = () => {
    setInputActive(!inputActive);
  };
  useEffect(() => {
    fetchGetCartItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [windowDimension, updateWindowDimensions]);

  if (windowDimension < 890) {
    return (
      <NavbarMobile
        cartNr={cartItems && cartItems.length}
        inputActive={inputActive}
        handleClickInput={handleClickInput}
        handleClickMenu={handleClickMenu}
        burgerMenu={burgerMenu}
        handleOutsideClick={handleOutsideClick}
      />
    );
  } else {
    return <NavbarDesktop cartNr={cartItems && cartItems.length} />;
  }
};

export default connect(
  ({ navbar, cart }) => ({ ...navbar, cartItems: cart.items }),
  {
    ...NavBarActions,
    ...CartActions,
  }
)(Navbar);

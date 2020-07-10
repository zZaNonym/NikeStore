import React from 'react';
import { Link } from 'react-router-dom';

import BurgerMenu from './burgerMenu';

import {
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import './navbar.scss';
import SearchInput from './searchInput';

const NavbarMobile = ({
  handleOutsideClick,
  handleClickInput,
  handleClickMenu,
  burgerMenu,
  inputActive,
  cartNr,
}) => {
  return (
    <div className='navbar_mobile'>
      <Link to='/' className='navbar_mobile-brand'>
        <img
          src='https://image.flaticon.com/icons/png/512/732/732084.png'
          alt='nikebrand'
        />
      </Link>
      <div className='navbar_mobile-menu'>
        {!inputActive ? (
          <SearchOutlined
            onClick={handleClickInput}
            className='navbar_mobile-menu-item'
          />
        ) : (
          <SearchInput handleClose={handleClickInput} />
        )}
        <Link to='/cart' className='navbar_desktop-top-end-item'>
          <ShoppingCartOutlined className='navbar_mobile-menu-item' />
          {cartNr !== 0 && cartNr}
        </Link>
        <MenuOutlined
          onClick={handleClickMenu}
          className='navbar_mobile-menu-item'
        />
        {burgerMenu && <BurgerMenu handleOutsideClick={handleOutsideClick} />}
      </div>
    </div>
  );
};

export default NavbarMobile;

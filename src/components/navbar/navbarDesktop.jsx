import React from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartOutlined, EnvironmentFilled } from '@ant-design/icons';
import './navbar.scss';
import SearchInput from './searchInput';

const NavbarDesktop = ({ cartNr }) => {
  return (
    <div className='navbar_desktop-container'>
      <div className='navbar_desktop-top'>
        <Link to='/' className='navbar_desktop-top-start'>
          <span>Join Us</span>
        </Link>
        <div className='navbar_desktop-top-end'>
          <div className='navbar_desktop-top-end-item'>
            <span>Join/Log In To Nike Member Profile</span>
          </div>
          <Link to='/cart' className='navbar_desktop-top-end-item'>
            <ShoppingCartOutlined style={{ fontSize: '18px' }} />
            {cartNr !== 0 && cartNr}
          </Link>
          <div className='navbar_desktop-top-end-item'>
            <EnvironmentFilled
              style={{ fontSize: '18px', marginRight: '5px' }}
            />
            <span>Language</span>
          </div>
        </div>
      </div>
      <div className='navbar_desktop-bottom'>
        <Link to='/' className='navbar_desktop-bottom-brand'>
          <img
            src='https://image.flaticon.com/icons/png/512/732/732084.png'
            alt='nikebrand'
          />
        </Link>
        <div className='navbar_desktop-bottom-menu'>
          <Link to='/p/new' className='navbar_desktop-bottom-menu-item'>
            NEW RELEASES
          </Link>
          <Link to='/men' className='navbar_desktop-bottom-menu-item'>
            MEN
          </Link>
          <Link to='/women' className='navbar_desktop-bottom-menu-item'>
            WOMEN
          </Link>
          <Link to='/kids' className='navbar_desktop-bottom-menu-item'>
            KIDS
          </Link>
        </div>
        <SearchInput />
      </div>
    </div>
  );
};

export default NavbarDesktop;

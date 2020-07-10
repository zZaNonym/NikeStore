import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ handleOutsideClick }) {
  useEffect(() => {
    const el1 = document.querySelector('.background-trasparent');
    const el2 = document.querySelector('.navbar_mobile-menu-burger');
    el1.addEventListener('click', handleOutsideClick.bind(this, el2));
    return () => {
      el1.removeEventListener('click', handleOutsideClick.bind(this, el2));
    };
  }, [handleOutsideClick]);

  return (
    <div className='background-trasparent'>
      <div className={'navbar_mobile-menu-burger'}>
        <div className='navbar_mobile-menu-burger-item'>
          <span>Join/Log In To Nike Member Profile</span>
        </div>
        <Link to='/p/new' className='navbar_mobile-menu-burger-item'>
          <span>NEW RELEASES</span>
        </Link>
        <Link to='/men' className='navbar_mobile-menu-burger-item'>
          <span>MEN</span>
        </Link>
        <Link to='/women' className='navbar_mobile-menu-burger-item'>
          <span>WOMEN</span>
        </Link>
        <Link to='/kids' className='navbar_mobile-menu-burger-item'>
          <span>KIDS</span>
        </Link>
      </div>
    </div>
  );
}

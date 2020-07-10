import React from 'react';
import { Link } from 'react-router-dom';

import './advertismentCard.scss';

const AdvertismentCard = ({ src, text }) => {
  return (
    <Link to='/'>
      <div className='advCard_container'>
        <p className='advCard_container-text'>{text && text}</p>
        <img
          className='advCard_container-img'
          src={src}
          alt='AdvertismentCard'
        />
      </div>
    </Link>
  );
};

export default AdvertismentCard;

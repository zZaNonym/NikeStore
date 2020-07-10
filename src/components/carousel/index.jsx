import React, { useEffect } from 'react';

import './carousel.scss';
import { ItemCard } from '../';
import { CarouselSetup } from '../../utils/helpers';

const Carousel = ({ moto, items }) => {
  useEffect(() => {
    const el = document.getElementById('carousel_items');

    el.addEventListener('mousedown', CarouselSetup.bind(this, el));
    el.addEventListener('touchstart', CarouselSetup.bind(this, el));
    return () => {
      el.removeEventListener('mousedown', CarouselSetup.bind(this, el));
      el.removeEventListener('touchstart', CarouselSetup.bind(this, el));
    };
  }, []);
  return (
    <div className='carousel' id='carousel'>
      <h2>{moto}</h2>
      <div className='carousel_items' id='carousel_items'>
        {items.map((item, index) => (
          <div key={index} className='carousel_items-item'>
            <ItemCard key={index} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react';
import { Link } from 'react-router-dom';

import './itemCard.scss';

const ItemCard = ({ item }) => {
  return (
    <div className='itemCard'>
      <Link to={`/p/item/${item.id}`}>
        <div className='itemCard__wrapper'>
          <img
            className='itemCard__img'
            src={item.img[0]}
            alt='item-img'
            draggable={false}
          />
        </div>

        <div className='itemCard_info'>
          <h4 className='itemCard_info-name'>{item.name}</h4>
          <p className='itemCard_info-category'>{item.category}</p>
          <span className='itemCard_info-price'>{item.price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;

import React from 'react';

import { ImageBox } from '../';

const CartItem = ({ item, removeCartItem, index }) => {
  return (
    <div className='cartItem'>
      <div className='cartItem__image'>
        <ImageBox src={item.img[0]} />
      </div>
      <div className='cartItem__body'>
        <div>
          <span className='big__text'>{item.name}</span>
          <span className='small__text'>{item.category}</span>
          <span className='small__text'>Size {item.size}</span>
        </div>
        <span className='cartItem__body-price big__text'>{item.price}</span>
        <span
          onClick={removeCartItem.bind(this, index)}
          className='cartItem__body-btn '>
          Remove
        </span>
      </div>
    </div>
  );
};

export default CartItem;

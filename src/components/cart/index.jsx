import React from 'react';

import './cart.scss';
import { Button } from '../';
import CartItem from './cartItem';

const Cart = ({
  handleBuy,
  removeCartItem,
  items,
  subtotal,
  shipping,
  total,
}) => {
  return (
    <div className='content'>
      <div className='cart'>
        <div className='cart__items'>
          <span className='big__text'>Cart</span>
          {items &&
            items.map((item, index) => (
              <CartItem
                item={item}
                key={index}
                index={index}
                removeCartItem={removeCartItem}
              />
            ))}
        </div>
        <div className='cart__summary'>
          <span className='big__text'>Summary</span>
          <div className='cart__summary-wrapper'>
            <div className='cart__summary-row'>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className='cart__summary-row'>
              <span>Estimated Shipping & Handling</span>
              <span>${shipping}</span>
            </div>
            <div className='cart__summary-row'>
              <span>Estimated Tax</span>
              <span>__</span>
            </div>
          </div>
          <div className='cart__summary-wrapper'>
            <div className='cart__summary-row'>
              <span className='big__text'>Total</span>
              <span>${total}</span>
            </div>
          </div>
          <Button onClick={handleBuy}>Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

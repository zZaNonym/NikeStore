import React, { useState, useLayoutEffect } from 'react';

import { CartActions } from '../redux/actions';

import { Cart } from '../components';
import { connect } from 'react-redux';

const CartContainer = ({ items, fetchRemoveCartItems }) => {
  const [subtotal, setSubtotal] = useState(0);

  // eslint-disable-next-line
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBuy = () => {
    console.log('buy');
  };
  const calculateSubtotal = () => {
    if (items && items.length) {
      if (items.length === 1) {
        return items[0].price;
      } else return items.reduce((a, b) => a.price + b.price);
    } else return 0;
  };

  useLayoutEffect(() => {
    setSubtotal(calculateSubtotal(items));
    setTotal(subtotal + shipping);
    // eslint-disable-next-line
  }, [items]);

  useLayoutEffect(() => {
    setTotal(subtotal + shipping);
  }, [subtotal, shipping]);

  return (
    <Cart
      shipping={shipping}
      subtotal={subtotal}
      total={total}
      items={items}
      removeCartItem={fetchRemoveCartItems}
      handleBuy={handleBuy}
    />
  );
};

export default connect(
  ({ cart }) => ({ items: cart.items }),
  CartActions
)(CartContainer);

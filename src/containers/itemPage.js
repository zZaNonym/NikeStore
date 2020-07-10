import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ProductsActions, CartActions } from '../redux/actions';

import { ItemPage } from '../components';

const ItemPageContainer = ({
  fetchAddCartItem,
  fetchSelectedItem,
  match,
  item,
}) => {
  const [sizeState, setSizeState] = useState({ value: '', error: '' });

  const handleSetSize = (selectedSize) => {
    setSizeState({
      value: selectedSize === sizeState.value ? '' : selectedSize,
      error: '',
    });
  };
  const handleAddTOCart = (id) => {
    if (!sizeState.value) {
      setSizeState({ ...sizeState, error: 'Please select a size' });
    } else {
      fetchAddCartItem({ id, size: sizeState.value });
      setSizeState({ value: '', error: '' });
    }
  };
  useEffect(() => {
    fetchSelectedItem(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <ItemPage
      handleAddTOCart={handleAddTOCart}
      selectedSize={sizeState}
      handleSetSize={handleSetSize}
      item={item}
    />
  );
};

export default connect(({ products }) => ({ item: products.selectedItem }), {
  ...ProductsActions,
  ...CartActions,
})(ItemPageContainer);

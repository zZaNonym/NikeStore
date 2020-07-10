import React, { useState } from 'react';

import './itemPage.scss';
import ImageBox from '../imageBox';
import { Modal, Button } from '../';

const ItemPage = ({ item, selectedSize, handleSetSize, handleAddTOCart }) => {
  const [imgSrc, setImgSrc] = useState('');
  const handleSetImg = (src) => {
    setImgSrc(src);
  };
  const handleClose = () => {
    setImgSrc('');
  };
  return (
    <div className='content'>
      <Modal show={!!imgSrc} onClose={handleClose}>
        <ImageBox src={imgSrc} />
      </Modal>
      <div className='itemPage'>
        <div className='itemPage__info'>
          <div className='itemPage__info-header'>
            <span className='itemPage__info-category'>{item.category}</span>
            <span className='itemPage__info-name'>{item.name}</span>
            <span className='itemPage__info-price'>${item.price}</span>
          </div>
          <div className='itemPage__info-size'>
            <h2 style={selectedSize.error ? { color: 'red' } : null}>
              Select size
            </h2>
            <div className='itemPage__info-size-options'>
              {item.size &&
                item.size.map((size, index) => (
                  <div
                    style={
                      selectedSize.value === size
                        ? { borderColor: 'black' }
                        : null
                    }
                    onClick={handleSetSize.bind(this, size)}
                    key={index}>
                    <span>{size}</span>
                  </div>
                ))}
            </div>
            <span style={{ color: 'red', fontSize: '18px' }}>
              {selectedSize.error}
            </span>
          </div>
          <Button onClick={handleAddTOCart.bind(this, item.id)}>
            Add to card
          </Button>
          <p className='itemPage__info-description'>{item.description}</p>
        </div>
        <div className='itemPage__images'>
          {item.img &&
            item.img.map((src, index) => (
              <ImageBox
                onClick={handleSetImg.bind(this, src)}
                key={index}
                src={src}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

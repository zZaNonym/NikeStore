import React from 'react';

const ImageBox = ({ src, onClick }) => {
  return (
    <div onClick={onClick} className='image__box'>
      <img src={src} alt='item-img' />
    </div>
  );
};

export default ImageBox;

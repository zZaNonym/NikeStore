import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='itemPage__btn'>
      {children}
    </button>
  );
};

export default Button;

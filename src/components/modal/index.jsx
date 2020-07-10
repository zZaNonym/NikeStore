import React, { useLayoutEffect } from 'react';

import './modal.scss';

const Modal = ({ children, style, onClose, show }) => {
  useLayoutEffect(() => {
    const el = document.querySelector('.modal__content');

    const handleClick = (e) => {
      if (el && !el.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, [show]);
  return (
    show && (
      <div className='modal'>
        <div className='modal__content' style={style}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;

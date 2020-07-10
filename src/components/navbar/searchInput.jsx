import React from 'react';

import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
export default function searchInput({ handleClose }) {
  return (
    <div className='search_input-container'>
      <SearchOutlined className='search_input-icon-search' />
      <input placeholder='Search' className='search_input' />
      <CloseOutlined
        className='search_input-icon-close'
        onClick={handleClose}
      />
    </div>
  );
}

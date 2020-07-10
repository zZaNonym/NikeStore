import React, { useState } from 'react';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

import CheckBox from './checkBox';

const FilterGroup = ({ type, setSelected, selected, options }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const optionsRender = options.map((option, index) => (
    <CheckBox
      key={index}
      setSelected={setSelected}
      selected={selected}
      option={option}
    />
  ));
  return (
    <div className='products__filter-group'>
      <div onClick={handleClick} className='trigger_content'>
        <span>{type}</span>
        {open ? (
          <UpOutlined className='trigger_content-icon' />
        ) : (
          <DownOutlined className='trigger_content-icon' />
        )}
      </div>
      <div
        style={{ height: open ? 'fit-content' : '0' }}
        className='group__content'>
        {optionsRender}
      </div>
    </div>
  );
};

export default FilterGroup;

import React from 'react';

import { CheckSquareOutlined, CheckSquareTwoTone } from '@ant-design/icons';

const CheckBox = ({ selected, option, setSelected }) => {
  return (
    <div
      className='group__content-item'
      onClick={() => setSelected(selected === option ? '' : option)}>
      {selected === option ? (
        <CheckSquareTwoTone className='group__content-item-icon' />
      ) : (
        <CheckSquareOutlined className='group__content-item-icon' />
      )}
      <span>{option[0].toUpperCase() + option.slice(1)}</span>
    </div>
  );
};

export default CheckBox;

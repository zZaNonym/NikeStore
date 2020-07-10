import React from 'react';
import { AdvCard } from '../components';

const AdvCardContainer = ({ moto, items }) => {
  return (
    <div className='advCard'>
      <h2>{moto}</h2>
      <div className='advCard-wrapper'>
        {items.map((item, key) => (
          <AdvCard key={key} text={item.text} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default AdvCardContainer;

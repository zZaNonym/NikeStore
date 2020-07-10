import React from 'react';

import FilterGroup from './filterGroup';
import SortBox from './sortBox';
import { ItemCard } from '../';

import './products.scss';

const Products = ({
  windowDimension,
  items,
  openFilter,
  setOpenFilter,
  openSort,
  setOpenSort,
  sortOption,
  setSortOption,
  gender,
  setGender,
  brand,
  setBrand,
  material,
  benefits,
  setBenefits,
  setMaterial,
  tag,
}) => {
  return (
    <div className='content'>
      <div className='products__header'>
        <h1>New Releases</h1>
        <div className='products__filter-options'>
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className='products__filter-option '>
            <div className={`icon__filter ${openFilter && 'isToggle'}`}>
              {windowDimension > 890
                ? openFilter
                  ? 'Hide Filtres'
                  : 'Show Filtres'
                : 'Filter'}
            </div>
          </div>
          <SortBox
            showText={windowDimension > 890}
            setOpenSort={setOpenSort}
            openSort={openSort}
            setSortOption={setSortOption}
            sortOption={sortOption}
            options={['Price: high-low', 'Price: low-high']}
          />
        </div>
      </div>
      <div className='products__container'>
        <div
          style={
            openFilter
              ? windowDimension > 890
                ? null
                : {
                    position: 'absolute',
                    paddingRight: '48px',
                    borderRadius: '10px',
                  }
              : {
                  transform: 'translateX(-300px)',
                  position: 'absolute',
                }
          }
          className='products__filter'>
          {tag[0] === 'new' && (
            <>
              <FilterGroup
                type={'Gender'}
                setSelected={setGender}
                selected={gender}
                options={['men', 'women']}
              />
              <FilterGroup
                type={'Kids'}
                setSelected={setGender}
                selected={gender}
                options={['boys', 'girls']}
              />
            </>
          )}
          <FilterGroup
            type={'Brand'}
            setSelected={setBrand}
            selected={brand}
            options={['Nike', 'Jordan', 'Nike sportswer']}
          />
          <FilterGroup
            type={'Material'}
            setSelected={setMaterial}
            selected={material}
            options={['Canvas', 'Leather', 'Synthetic']}
          />
          <FilterGroup
            type={'Benefits'}
            setSelected={setBenefits}
            selected={benefits}
            options={['Ultra conform', 'Tuned Speed', 'Natural Motion']}
          />
        </div>
        <div className='products__items'>
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

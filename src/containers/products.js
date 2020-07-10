import React, { useEffect, useState } from 'react';

import { Products as ProductsBase } from '../components';
import { connect } from 'react-redux';
import { ProductsActions } from '../redux/actions';

const Products = ({ windowDimension, fetchProductsData, items, match }) => {
  const [filtredItems, setFiltredItems] = useState([]);
  const [openFilter, setOpenFilter] = useState(true);
  const [openSort, setOpenSort] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const [gender, setGender] = useState('');
  const [brand, setBrand] = useState('');
  const [material, setMaterial] = useState('');
  const [benefits, setBenefits] = useState('');

  const handleFiltredItems = (items) => {
    const filterIntems = items.filter((item) => {
      const params = match.params.tag.split('-');
      if (match.params.tag !== 'new') {
        if (item.gender !== params[0] || item.category !== params[1])
          return false;
      }

      if (gender && item.gender !== gender) {
        return false;
      }

      if (brand && item.brand !== brand) {
        return false;
      }
      if (material && item.material !== material) {
        return false;
      }
      if (benefits && item.benefits !== benefits) {
        return false;
      }

      return true;
    });
    if (sortOption) {
      if (sortOption === 'Price: low-high') {
        filterIntems.sort((a, b) => {
          if (a.price < b.price) return -1;
          else if (a.price > b.price) return 1;
          return 0;
        });
      } else {
        filterIntems.sort((a, b) => {
          if (a.price < b.price) return 1;
          else if (a.price > b.price) return -1;
          return 0;
        });
      }
    }
    return filterIntems;
  };

  useEffect(() => {
    setFiltredItems(handleFiltredItems(items));
    // eslint-disable-next-line
  }, [sortOption, gender, brand, material, benefits, match.params.tag, items]);
  useEffect(() => {
    fetchProductsData();
    // eslint-disable-next-line
  }, []);

  return (
    <ProductsBase
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      openSort={openSort}
      setOpenSort={setOpenSort}
      sortOption={sortOption}
      setSortOption={setSortOption}
      gender={gender}
      setGender={setGender}
      brand={brand}
      setBrand={setBrand}
      items={filtredItems}
      material={material}
      benefits={benefits}
      setBenefits={setBenefits}
      setMaterial={setMaterial}
      windowDimension={windowDimension}
      tag={match.params.tag.split('-')}
    />
  );
};

export default connect(
  ({ navbar, products }) => ({
    windowDimension: navbar.windowDimension,
    items: products.items,
  }),
  ProductsActions
)(Products);

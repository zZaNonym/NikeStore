import React from 'react';

const SortBox = ({
  setOpenSort,
  openSort,
  setSortOption,
  sortOption,
  options,
  showText,
}) => {
  const optionsReducer = options.map((option, key) => (
    <span
      style={sortOption === option ? { color: 'grey' } : null}
      key={key}
      onClick={() => setSortOption(option)}>
      {option}
    </span>
  ));
  return (
    <div
      onClick={() => setOpenSort(!openSort)}
      className={`products__filter-option downoutlined ${
        openSort ? ' upoutlined' : ''
      }`}>
      {showText ? (
        <>
          Sort by
          <span style={{ color: 'grey' }}>
            {sortOption && ': ' + sortOption}
          </span>{' '}
        </>
      ) : (
        'Sort'
      )}
      <div
        style={
          openSort ? { opacity: '1' } : { transform: 'translateY(-200px)' }
        }
        className='products__filter-sort'>
        {optionsReducer}
      </div>
    </div>
  );
};

export default SortBox;

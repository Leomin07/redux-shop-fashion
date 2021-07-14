import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductBySize } from '../actions/productActions';

const Filter = () => {
  const filterItems = useSelector(state => state.listProducts.filterItems);
  const dispatch = useDispatch();
  const sizes = ['ALL', 'XS', 'M', 'L', 'XL', 'XXL'];

  const handlerSelectSizes = event => {
    dispatch(filterProductBySize(filterItems, event.target.value));
  };
  return (
    <>
      <label className="mt-3">
        <h5>Sizes</h5>
      </label>
      <select onChange={handlerSelectSizes}>
        {sizes.map(value => (
          <option key={value}>{value} </option>
        ))}
      </select>
    </>
  );
};

export default Filter;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductByBrand } from '../actions/productActions';

const FilterBrand = () => {
  const filterItems = useSelector(state => state.listProducts.filterItems);
  const dispatch = useDispatch();
  const brands = ['ALL', 'CHANNEL', 'Louis Vuitton', 'DIOR', 'PRADA'];
  const handlerSelectBrands = event => {
    dispatch(filterProductByBrand(filterItems, event.target.value));
  };
  return (
    <>
      <label className="mt-3">
        <h5>Brand</h5>
      </label>
      <select onChange={handlerSelectBrands}>
        {brands.map(value => (
          <option key={value}>{value} </option>
        ))}
      </select>
    </>
  );
};

export default FilterBrand;

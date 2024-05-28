import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiURL from '../../../api';
import sortFilter from '../../../../assets/icons/sort-filter.svg';

export default function Filter({
  products,
  setProducts,
  isFilterHidden,
  toggleFilter,
}) {
  const [categories, setCategories] = useState([]);

  const applyFilter = (products, value) => {
    let filteredProducts;
    if (value) {
      filteredProducts = products.filter((product) => {
        return product.categoryId === value;
      });
    } else {
      filteredProducts = products;
    }
    setProducts(filteredProducts);
    console.log('After applying filter, value: ', value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiURL}/categories`);
        console.log('Fetched categories:', response.data);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className=' text-end items-center flex  gap-4 justify-end'>
        filter by
        <img
          src={sortFilter}
          alt='Sort and filter'
          className='text-end'
          onClick={toggleFilter}
        />
        <select
          onChange={(e) => applyFilter(products, e.target.value)}
          className={!isFilterHidden ? 'border border-primary-light-gray px-3 py-1 rounded-full' : 'hidden'}
        >
          <option value=''>select filter</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

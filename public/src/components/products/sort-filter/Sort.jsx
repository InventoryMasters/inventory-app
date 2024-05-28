import React from 'react'
import sortFilter from '../../../../assets/icons/sort.svg'

export default function Sort({ products, setProducts, isSortHidden, toggleSort }) {

  const applySort = (products, value) => {
    let sortedProducts;
    switch (value) {
      case 'nameAscending': {
        sortedProducts = [...products].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        break;
      }
      case 'nameDescending': {
        sortedProducts = [...products].sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
        break;
      }
      case 'priceAscending': {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      }
      case 'priceDescending': {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      }
      default: {
        sortedProducts = products;
      }
    }
    setProducts(sortedProducts);
  }

  return (
    <div className={' text-center  flex items-center gap-4 justify-end'}>
      sort by
      <img src={sortFilter} alt='Sort and filter' className='text-end' onClick={toggleSort}/>
      <select onChange={(e) => applySort(products, e.target.value)} className={!isSortHidden ? 'border border-primary-light-gray rounded-full py-1 px-3': 'hidden'}>
        <option value='' >select an option</option>
        <option value='nameAscending'>Alphabetically A-Z</option>
        <option value='nameDescending'>Alphabetically Z-A</option>
        <option value='priceAscending'>Price, low to high</option>
        <option value='priceDescending'>Price, high to low</option>
      </select>
    </div>
  );
}

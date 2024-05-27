import React from 'react'
import sortFilter from '../../../../assets/icons/sort-filter.svg'

export default function Sort({ products, setProducts }) {

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
    <div className=' text-end tracking-wide flex  gap-4 justify-end'>
      Sort By:
      <img src={sortFilter} alt="Sort and filter" className='text-end' />
      <select onChange={(e) => applySort(products, e.target.value)}>
        <option value=''>-------------------</option>
        <option value='nameAscending'>Alphabetically A-Z</option>
        <option value='nameDescending'>Alphabetically Z-A</option>
        <option value='priceAscending'>Price, low to high</option>
        <option value='priceDescending'>Price, high to low</option>
      </select>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../../../api';
import Filter from '../sort-filter/Filter';
import Sort from '../sort-filter/Sort';
import { Link } from 'react-router-dom';

export default function AllProducts({ isSliderHidden }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortHidden, setIsSortHidden] = useState(true);
  const [isFilterHidden, setIsFilterHidden] = useState(true);
  const pageSize = 9;

  const paginate = (products, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  };

  const paginatedProducts = paginate(products, currentPage, pageSize);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const searchQuery = new URLSearchParams(location.search).get('name');
        const response = await axios.get(`${apiURL}/items`, {
          params: {
            name: searchQuery,
          },
        });
        console.log('Fetched products:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [location.search]);

  console.log({ products });

  const toggleSort = () => {
    setIsSortHidden(!isSortHidden);
  };

  const toggleFilter = () => {
    setIsFilterHidden(!isFilterHidden);
  };

  return (
    <section className='pt-20 font-encode '>
      <section className='w-full banner-container flex flex-col justify-center items-center px-4 '>
        <img
          src='https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg'
          className='w-full object-cover h-80 rounded-b-xl'
        />
        <div className='relative text-white '>
          {!isSliderHidden ? (
            ''
          ) : (
            <h1 className='uppercase text-[7rem] absolute -translate-x-[45%] -translate-y-[140%] bg-transparent text-nowrap'>
              all products
            </h1>
          )}
        </div>
      </section>
      <section className='container mx-auto flex flex-col'>
        <div>
          <h1 className=' mt-10 uppercase font-medium text-lg text-center'>
            Products {`(${products.length})`}
          </h1>
          <div className='flex items-center justify-end text-sm gap-8'>
            <Filter
              products={products}
              setProducts={setProducts}
              isFilterHidden={isFilterHidden}
              toggleFilter={toggleFilter}
            />
            <Sort
              products={products}
              setProducts={setProducts}
              isSortHidden={isSortHidden}
              toggleSort={toggleSort}
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-12 gap-y-12 mt-10 self-center'>
          {Array.isArray(products) && products.length ? (
            paginatedProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div
                  key={product.id}
                  className='max-w-[350px] flex flex-col items-center text-center'
                >
                  <img
                    className='w-full h-auto'
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <h2 className='uppercase font-regular pt-1'>
                    {product.name}
                  </h2>
                  <p className='font-thin'>${product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        {products ? (
          <div className='text-center my-12'>
            {products.length > 9 ? (
              <div>
                {currentPage > 1 ? (
                  <button onClick={() => setCurrentPage(currentPage - 1)}>
                    &lt;
                  </button>
                ) : (
                  ''
                )}
                {currentPage}
                {currentPage < paginatedProducts.length ? (
                  <button onClick={() => setCurrentPage(currentPage + 1)}>
                    &gt;
                  </button>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </section>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import apiURL from '../../../api';
import SortFilter from '../sort-filter/SortFilter';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const paginate = (products, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  };

  const paginatedProducts = paginate(products, currentPage, pageSize);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}/items`);
        console.log('Fetched products:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log({ products });

  return (
    <section className='pt-20 font-encode'>
      <section className='w-full banner-container flex flex-col justify-center items-center px-4'>
        <img
          src='https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg'
          className='w-full object-cover h-80 rounded-b-xl'
        />
        <div className='relative text-white'>
          <h1 className='uppercase text-[7rem] absolute -translate-x-[45%] -translate-y-[140%] bg-transparent text-nowrap'>
            all products
          </h1>
        </div>
      </section>
      <section className='container mx-auto flex flex-col'>
        <div>
          <h1 className=' mt-10 uppercase font-medium text-lg text-center'>
            All Products
          </h1>
          <SortFilter/>
        </div>
        <div className='grid grid-cols-3 gap-12 gap-y-12 mt-10 self-center'>
          {Array.isArray(products) && products.length ? (
            paginatedProducts.map((product) => (
              <Link to={`/products/${product.id}`}>
              <div
              key={product.id}
              className='max-w-[350px] flex flex-col items-center text-center'
              >
              <img
              className='w-full h-auto'
              src={product.imageUrl}
              alt={product.name}
              />
              <h2 className='uppercase font-regular pt-1'>{product.name}</h2>
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
      </section>
    </section>
  );
}

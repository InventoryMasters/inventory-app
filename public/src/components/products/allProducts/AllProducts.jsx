import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiURL from '../../../api';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const paginate = (products, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  }

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

  return (
    <section className='pt-20'>
      <div className='w-full banner-container flex flex-col items-center p-4'>
        <img
          src='https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg'
          alt='Banner Image'
          className='w-full object-cover h-80 rounded-b-xl'
        />
        <h1 className='font-abril mt-10'>All Products</h1>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8' id=''>
          {Array.isArray(products) && products.length ? (
            paginatedProducts.map((product) => (
              <div key={product.id} className='max-w-[350px] flex flex-col items-center text-center'>
                <img className='w-full h-auto' src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        {products ?
          <div className='text-center my-12'>
            {currentPage > 1 ? <button onClick={() => setCurrentPage(currentPage - 1)}>&lt;</button> : ''}
            {currentPage}
            {currentPage < paginatedProducts.length ? <button onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button> : ''}
          </div>
          : ""}
      </div>
    </section>
  );
}

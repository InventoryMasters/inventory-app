import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiURL from '../../../api';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

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
      <div className='container mx-auto'>
        <div className='w-full banner-container'>
          <img src='https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg' alt='Banner Image' className='w-full object-cover h-40'/>
          <h1 className='font-abril '>All Products</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {Array.isArray(products) && products.length ? (
            products.map((product) => (
              <div key={product.id}>
                <img className='w-[350px] h-auto' src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.qty}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>

        {/* </div>
      <div className=''> */}
      </div>
    </section>
  );
}

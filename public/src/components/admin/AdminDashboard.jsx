import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../../api';
import AdminProductCard from './AdminProductCard';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProds = async () => {
      try {
        const response = await axios.get(`${apiURL}/items`);
        console.log({ prods: response.data });
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products', err.message);
        throw err;
      }
    };

    fetchProds();
  }, []);


    const handleDelete = (productId) => {
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts); 
    };


  return (
    <section className='pt-28 px-20 text-encode text-primary-dark-gray'>
      <div className='flex justify-end'>
        <Link
          to={'/admin/dashboard/new-product'}
          className=' border border-primary-dark-gray px-9 py-2 rounded-full font-medium'
        >
          ADD NEW PRODUCT
        </Link>
      </div>
      <h1 className='uppercase text-3xl text-center pb-14 font-medium'>
        admin dashboard
      </h1>
      <div className='flex flex-col gap-10'>
        {Array.isArray(products) && products.length ? (
          products.map((product) => (
            <AdminProductCard
              product={product}
              key={product.id}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
}

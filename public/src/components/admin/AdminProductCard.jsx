import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../../api';

export default function AdminProductCard({ product, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`${apiURL}/admin/items/${product.id}`);
      console.log('Product deleted successfully');
      onDelete(product.id); 
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleDeleteButtonClick = () => {
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      if (window.confirm('Are you sure you want to delete this product?')) {
        handleDeleteProduct();
      } else {
        setShowConfirmation(false);
      }
    }
  }, [showConfirmation]);

  // console.log({product})
  return (
    <section className='max-w-[100dvw]'>
      <div className='w-fit'>
        <div key={product.id} className='flex w-fit gap-8'>
          <img
            className='w-[250px]'
            src={product.imageUrl}
            alt={product.name}
          />
          <div className='flex flex-col justify-start items-start pt-4 '>
            <Link
              to={`/products/${product.id}`}
              className='uppercase font-semi-bold pb-1 underline underline-offset-2'
            >
              {product.name}
            </Link>
            <p>
              <span className='font-semi-bold pb-1'>ID: </span>
              {product.id}
            </p>
            {product.category && (
              <p className='italic'>
                <span className='font-semi-bold not-italic'>CATEGORY: </span>
                {product.category.name}
              </p>
            )}
            <p>
              <span className='font-semi-bold'>QTY IN STOCK:</span>{' '}
              {product.qty}
            </p>
            <p className=''>
              <span className='font-semi-bold'>PRICE: </span>${product.price}
            </p>

            <div className='flex items-end justify-end h-20 gap-5 pt-10'>
              <Link
                to={`/admin/dashboard/edit-product/${product.id}`}
                className='border border-primary-dark-gray px-7 py-1 rounded-full text-nowrap font-medium'
              >
                EDIT PRODUCT
              </Link>
              <button
                onClick={handleDeleteButtonClick}
                className='border border-primary-dark-gray px-7 py-1 rounded-full text-nowrap font-medium'
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

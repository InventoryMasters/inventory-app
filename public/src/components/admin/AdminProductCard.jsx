import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminProductCard({ product }) {
  console.log({ product });
  return (
    <section className='w-[100dvw]'>
      <div className=' '>
        <div key={product.id} className='flex border border-black w-[80dvw]'>
          <img
            className='w-[250px]'
            src={product.imageUrl}
            alt={product.name}
          />
          <div className='flex flex-col justify-start items-start pt-4 '>
            <h2 className='uppercase font-semi-bold pb-1 underline underline-offset-2'>
              {product.name}
            </h2>
            <p>
              <span className='font-semi-bold pb-1'>ID: </span>
              {product.id}
            </p>
            <p className='italic'>
              {' '}
              <span className='font-semi-bold not-italic'>CATEGORY: </span>
              {product.category.name}
            </p>
            <p>
              <span className='font-semi-bold'>QTY IN STOCK:</span>{' '}
              {product.qty}
            </p>
            <p className=''>
              {' '}
              <span className='font-semi-bold'>PRICE: </span>${product.price}
            </p>
          </div>

          <div className='flex items-end'>
            <button className='border border-primary-dark-gray px-7 py-1 rounded-full'>
              EDIT PRODUCT
            </button>
            <button className='border border-primary-dark-gray px-7 py-1 rounded-full'>
              DELETE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

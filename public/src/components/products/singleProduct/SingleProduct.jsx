import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../../api';
import shevronLeft from '../../../../assets/icons/shevron-left.svg';
import ProductCard from './ProductCard';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log({ id });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiURL}/items/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log({ product });

  return (
    <main className=' flex w-[100dvw] h-[100dvh] justify-center pt-[5rem]'>
      <section className='bg-primary-backdrop rounded-t-3xl'>
        <ProductCard product={product}/>
        <Link
          to='/products'
          className='bg-transparent text-sm flex gap-7 items-start ml-20 justify-start'
        >
          <section className='flex flex-row-reverse gap-10 items-center bg-transparent font-encode font-thin mt-36 border border-primary-dark-gray w-fit px-12 py-2 rounded-full'>
            back to products
            <img
              className='bg-transparent h-4'
              src={shevronLeft}
              alt='Back to products'
            />
          </section>
        </Link>
      </section>
    </main>
  );
}

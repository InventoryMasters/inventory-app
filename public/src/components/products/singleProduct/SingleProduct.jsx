import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../../api';
import shevronLeft from '../../../../assets/icons/shevron-left.svg'

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
        <div className='flex max-w-[80vw] gap-36 pt-36 bg-primary-backdrop rounded-t-full px-36'>
          <div className='w-5/12 h-auto'>
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className='text-center font-encode pt-10 w-7/12 bg-transparent'>
            <h1 className='bg-transparent text-[1.6rem] font-light uppercase'>
              {product.name}
            </h1>
            <p className='lowercase font-epilogue italic font-thin text-sm pt-2 bg-transparent'>
              {product.category.name}
            </p>
            <article className='bg-transparent font-extra-light pt-6'>
              {product.description}
            </article>
            <p className='bg-transparent uppercase pt-6 font-light'>
              qty in stock: {product.qty}
            </p>
            <p className='bg-transparent font-thin pt-1 uppercase'>
              Price: ${product.price}
            </p>
          </div>
        </div>

        <section className='bg-transparent font-encode font-thin flex justify-start items-center gap-6 mt-36 ml-36 border border-primary-dark-gray w-fit px-12 py-2 rounded-full'> 
        <img className='bg-transparent h-4' src={shevronLeft} alt="Back to products" />
        <Link className='bg-transparent text-sm' to={'/products'}>back to products</Link>
        </section>
      </section>
    </main>
  );
}

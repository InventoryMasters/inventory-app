import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import apiURL from '../../../api';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log({ id });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiURL}/items/${id}`);
        setProduct(response.data);
        console.log({ product });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-slate-500 flex w-[100dvw] h-[100dvh] justify-center pt-36'>
      <section className='bg-primary-backdrop max-w-[80vw]'>
        <div className='flex gap-36'>
          <img
            className='w-[400px] h-auto'
            src={product.imageUrl}
            alt={product.name}
          />
          <div className='text-center font-encode'>
          <h1 className='bg-transparent '>{product.name}</h1>
          <p className='bg-transparent'>{product.description}</p>
          <p className='bg-transparent'>Price: ${product.price}</p>
          <p className='bg-transparent'>Quantity: {product.qty}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

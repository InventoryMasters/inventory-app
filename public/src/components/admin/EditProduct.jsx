import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiURL}/items/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(`Error fetching product with ID: ${id} `, err.message);
        throw err;
      }
    };

    fetchProduct();
  }, [id]);

  const zodProduct = () => {
    z.object({
      name: z
        .string()
        .min(3, { message: 'Product name must be at least 3 characters long' }),
      description: z.string().min(30, {
        messaage: 'Product description must be at least 30 charactees long',
      }),
      price: z
        .number()
        .nonnegative({ message: 'Price must not be a negative number' })
        .min(5, { message: 'Price must be greater than 5' }),
      qty: z
        .number()
        .nonnegative({ message: 'Qty must not be a negative number' })
        .min(1, { message: 'Qty must be greater than 5' }),
      imageUrl: z.string().url({ message: 'Should be a valid image URL' }),
      category: z.string(),
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodProduct),
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      price: product?.price || '',
      qty: product?.qty || '',
      imageUrl: product?.imageUrl || '',
    },
  });
  console.log({ product });
  // console.log({ prd: product.name });
  return (
    <section className='pt-28 font-encode text-3xl text-center font-semi-bold text-primary-dark-gray px-20'>
      <h1>EDIT PRODUCT</h1>

      <div className='flex justify-between'>
        <div>
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className='w-[400px]'
          />
        </div>
        <form
          action='submit'
          className='text-sm font-light border border-black -translate-x-[40%] w-[40vw] flex flex-col text-start'
        >
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            placeholder={product?.name || ''}
            className='border border-black w-[80%]'
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}


          <label htmlFor='name'>description</label>
          <textarea
            type='text'
            id='description'
            placeholder={product?.description || ''}
            className='border border-black w-[80%]'
            {...register('description')}
          />
          {errors.name && <p>{errors.name.message}</p>}


        </form>
      </div>
    </section>
  );
}

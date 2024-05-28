import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { useForm, Controller } from 'react-hook-form';

export default function CreateProduct() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await axios.get(`${apiURL}/categories`);
        setCategories(response.data);
      } catch (err) {
        console.error(err);
        throw err;
      }
    };

    fetchAllCategories();
    console.log({ categories });
  }, []);

  const zodProduct = z.object({
    name: z.string().min(3, {
      message: 'Product name must be at least 3 characters long',
    }),
    description: z.string().min(30, {
      message: 'Product description must be at least 30 characters long',
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
    category: z.array(z.string()),
  });

  const onSubmit = async (data) => {
    try {
      const prod = await axios.post(`${apiURL}/admin/items`, data);
      console.log({ prod });
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Error updating product', err);
      throw err;
    }
  };

  return (
    <section className='flex justify-center'>
      <section className='pt-28 font-encode text-3xl text-center font-semi-bold text-primary-dark-gray px-20'>
        <h1 className='text-center  pr-28'>ADD NEW PRODUCT</h1>

        <div className='flex justify-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='text-sm font-light pt-10 w-[500px] flex flex-col text-start'
          >
            <label htmlFor='name' className='pt-5'>
              name
            </label>
            <Controller
              control={control}
              name='name'
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  id='name'
                  className='border border-black w-[80%] text-black py-2 rounded-md px-3'
                />
              )}
            />
            {errors.name && (
              <p className='text-red-800'>
                Product name must be at least 3 characters long
              </p>
            )}

            <label htmlFor='description' className='pt-5'>
              description
            </label>
            <Controller
              control={control}
              name='description'
              rules={{ required: true, minLength: 30 }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id='description'
                  className='border border-black w-[80%] h-20 text-black py-2 rounded-md px-3'
                />
              )}
            />
            {errors.description && (
              <p className='text-red-800'>
                Product description must be at least 30 characters long
              </p>
            )}

            <label htmlFor='price' className='pt-5'>
              price
            </label>
            <Controller
              control={control}
              name='price'
              rules={{ required: true, min: 5 }}
              render={({ field }) => (
                <input
                  {...field}
                  type='number'
                  id='price'
                  className='border border-black w-[80%] text-black py-2 rounded-md px-3'
                />
              )}
            />
            {errors.price && (
              <p className='text-red-800'>Price must be greater than 5</p>
            )}

            <label htmlFor='qty' className='pt-5'>
              qty
            </label>
            <Controller
              control={control}
              name='qty'
              rules={{ required: true, min: 1 }}
              render={({ field }) => (
                <input
                  {...field}
                  type='number'
                  id='qty'
                  className='border border-black w-[80%] text-black py-2 rounded-md px-3'
                />
              )}
            />
            {errors.qty && (
              <p className='text-red-800'>Qty must be greater than 5</p>
            )}

            <label htmlFor='imageUrl' className='pt-5'>
              Image URL
            </label>
            <Controller
              control={control}
              name='imageUrl'
              rules={{ required: true, pattern: /^https?:\/\/.+$/ }}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  id='imageUrl'
                  className='border border-black w-[80%] text-black py-2 rounded-md px-3'
                />
              )}
            />
            {errors.imageUrl && (
              <p className='text-red-800'>Should be a valid image URL</p>
            )}

            {/**
            <h3 className='pt-5'>select category: </h3>
            <Controller
            control={control}
            name='category'
            rules={{ required: true, min: 1 }}
            render={({ field }) => (
              <CreatableSelect
              {...field}
              closeMenuOnSelect={true}
              isMulti={false}
              options={categories.map((category) => ({
                value: category.name,
                label: category.name,
              }))}
              className='w-[80%]'
              />
              )}
              />
              {errors.category && (
                <p className='text-red-800'>Category is required</p>
                )}
              */}

            <button
              type='submit'
              className='border border-black py-2 rounded-full text-md mt-10 font-lg w-[80%] font-medium'
            >
              SAVE PRODUCT
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

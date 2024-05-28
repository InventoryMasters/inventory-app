import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { useNavigate } from 'react-router';
import { useForm, Controller } from 'react-hook-form';

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiURL}/items/${id}`);
        setProduct(response.data);
        const { name, description, price, qty, imageUrl, category } =
          response.data;
        setValue('name', name);
        setValue('description', description);
        setValue('price', price);
        setValue('qty', qty);
        setValue('imageUrl', imageUrl);
        setValue(
          'category',
          category ? { value: category.name, label: category.name } : null
        );
      } catch (err) {
        console.error(`Error fetching product with ID: ${id} `, err.message);
        throw err;
      }
    };

    fetchProduct();
  }, [id, setValue]);

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
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setValue('category', selectedOption);
  };

  const onSubmit = async (data) => {
    try {
      const productFields = {
        name: data.name,
        description: data.description,
        price: data.price,
        qty: data.qty,
        imageUrl: data.imageUrl,
        category: data.category,
      };

      const prod = await axios.put(
        `${apiURL}/admin/items/${id}`,
        productFields
      );
      console.log('Product updated:', prod.data);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Error updating product', err.message);
      throw err;
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className='pt-28 font-encode text-3xl text-center font-semi-bold text-primary-dark-gray px-20'>
      <h1 className='text-center'>EDIT PRODUCT</h1>
      <div className='flex justify-around gap-44'>
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='w-[400px]'
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='text-sm font-light -translate-x-[40%] w-[40vw] flex flex-col text-start pt-10'
        >
          <label htmlFor='name'>name</label>
          <input
            type='text'
            {...register('name', { required: 'Name is required' })}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          {errors.name && <p className='text-red-800'>{errors.name.message}</p>}

          <label htmlFor='description' className='pt-5'>
            description
          </label>
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            className='border border-black w-[80%] h-28 text-black py-2 rounded-md px-3'
          />
          {errors.description && (
            <p className='text-red-800'>{errors.description.message}</p>
          )}

          <label htmlFor='price' className='pt-5'>
            price
          </label>
          <input
            type='number'
            {...register('price', { required: 'Price is required' })}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          {errors.price && (
            <p className='text-red-800'>{errors.price.message}</p>
          )}

          <label htmlFor='qty' className='pt-5'>
            qty
          </label>
          <input
            type='number'
            {...register('qty', { required: 'Quantity is required' })}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          {errors.qty && <p className='text-red-800'>{errors.qty.message}</p>}

          <label htmlFor='imageUrl' className='pt-5'>
            image URL
          </label>
          <input
            type='text'
            {...register('imageUrl', { required: 'Image URL is required' })}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          {errors.imageUrl && (
            <p className='text-red-800'>{errors.imageUrl.message}</p>
          )}

          {/**
          <h3 className='pt-5'>select category:</h3>
          <Controller
          control={control}
          name='category'
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <CreatableSelect
            {...field}
            options={categories.map((category) => ({
              value: category.name,
              label: category.name,
            }))}
            className=' w-[80%] text-black rounded-md'
            onChange={handleCategoryChange}
            />
            )}
            />
            {errors.category && (
              <p className='text-red-800'>{errors.category.message}</p>
              )}
            */}

          <button
            type='submit'
            className='border border-black w-[80%] text-black py-2 rounded-full px-3 mt-10 text-lg font-medium'
          >
            EDIT PRODUCT
          </button>
        </form>
      </div>
    </section>
  );
}

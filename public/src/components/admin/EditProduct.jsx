import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router';

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  console.log({ categories });

  const zodProduct = z.object({
    name: z
      .string()
      .min(3, { message: 'Product name must be at least 3 characters long' }),
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
    category: z.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    control,
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

  const submitEditProduct = async (data) => {
    const productFields = {
      name: data.name,
      description: data.description,
      price: data.price,
      qty: data.qty,
      imageUrl: data.imageUrl,
      category: data.category.map((cat) => cat.label),
    };

    try {
      console.log('attempting submit......');
      const prod = await axios.put(`${apiURL}/items/${id}`, productFields);
      console.log('submitting successful......');
      console.log({ prod });
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
          id='editProduct'
          onSubmit={handleSubmit(submitEditProduct)}
          action='submit'
          className='text-sm font-light border border-black -translate-x-[40%] w-[40vw] flex flex-col text-start'
        >
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            // value={product.name}
            // defaultValue={product.name}
            className='border border-black w-[80%] text-black'
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor='name'>description</label>
          <textarea
            type='text'
            id='description'
            // value={product.description}
            // placeholder={product?.description || ''}
            className='border border-black w-[80%]'
            {...register('description')}
          />
          {errors.description && <p>{errors.description.message}</p>}

          <label htmlFor='price'>price </label>
          <input
            type='number'
            id='price'
            // value={product.price}
            // placeholder={`$ ${product?.price}` || ''}
            {...register('price', { valueAsNumber: true })}
            className='border border-black'
          />
          {errors.price && <p>{errors.price.message}</p>}

          <label htmlFor='qty'>qty</label>
          <input
            type='number'
            id='qty'
            // value={product.qty}
            // placeholder={product?.qty || ''}
            {...register('priceqty', { valueAsNumber: true })}
            className='border border-black'
          />
          {errors.qty && <p>{errors.qty.message}</p>}

          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='text'
            id='imageUrl'
            // value={product.imageUrl}
            // placeholder={product?.imageUrl || ''}
            {...register('imageUrl')}
            className='border border-black'
          />
          {errors.imageUrl && <p>{errors.imageUrl.message}</p>}

          <h3>select category: </h3>
          <Controller
            control={control}
            name='category'
            rules={{ required: true, min: 1 }}
            render={({ field: { value, onChange, onBlur } }) => {
              return (
                <CreatableSelect
                  closeMenuOnSelect={true}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  isMulti={true}
                  options={
                    categories &&
                    categories.length &&
                    categories.map((category) => {
                      return {
                        value: category.name,
                        label: category.name,
                      };
                    })
                  }
                />
              );
            }}
          ></Controller>

          <button type='submit' form='editForm'>
            EDIT PRODUCT
          </button>
        </form>
      </div>
    </section>
  );
}

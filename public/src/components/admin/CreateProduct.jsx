import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { z } from 'zod';
import { useNavigate } from 'react-router';

export default function CreateProduct() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    qty: '',
    imageUrl: '',
    category: [],
  });
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCategoryChange = (selectedOptions) => {
    const categories = selectedOptions.map((option) => option.label);
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: categories,
    }));
  };

  const submitCreateProduct = async (e) => {
    e.preventDefault();
    console.log('hello from submit');
    try {
      console.log('attempting submit......');
      const prod = await axios.post(`${apiURL}/admin/items`, product);
      console.log('submitting successful......');
      console.log({ prod });
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Error updating product', err);
      throw err;
    }
  };

  return (
    <section className='pt-96'>
      <section className='pt-28 font-encode text-3xl text-center font-semi-bold text-primary-dark-gray px-20'>
        <h1>ADD NEW PRODUCT</h1>

        <div className='flex justify-center'>
          <form
            onSubmit={submitCreateProduct}
            className='text-sm font-light border border-black  w-[40vw] flex flex-col text-start'
          >
            <label htmlFor='name'>name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={product.name}
              onChange={handleChange}
              className='border border-black w-[80%] text-black'
            />
            {/* Error handling for name */}
            {product.name.length < 3 && (
              <p>Product name must be at least 3 characters long</p>
            )}

            <label htmlFor='description'>description</label>
            <textarea
              id='description'
              name='description'
              value={product.description}
              onChange={handleChange}
              className='border border-black w-[80%]'
            />
            {/* Error handling for description */}
            {product.description.length < 30 && (
              <p>Product description must be at least 30 characters long</p>
            )}

            <label htmlFor='price'>price</label>
            <input
              type='number'
              id='price'
              name='price'
              value={product.price}
              onChange={handleChange}
              className='border border-black'
            />
            {/* Error handling for price */}
            {product.price < 5 && <p>Price must be greater than 5</p>}

            <label htmlFor='qty'>qty</label>
            <input
              type='number'
              id='qty'
              name='qty'
              value={product.qty}
              onChange={handleChange}
              className='border border-black'
            />
            {/* Error handling for qty */}
            {product.qty < 1 && <p>Qty must be greater than 5</p>}

            <label htmlFor='imageUrl'>Image URL</label>
            <input
              type='text'
              id='imageUrl'
              name='imageUrl'
              value={product.imageUrl}
              onChange={handleChange}
              className='border border-black'
            />
            {/* Error handling for image URL */}
            {!/^https?:\/\/.+/.test(product.imageUrl) && (
              <p>Should be a valid image URL</p>
            )}

            <h3>select category: </h3>
            <CreatableSelect
              closeMenuOnSelect={true}
              onChange={handleCategoryChange}
              isMulti={true}
              options={categories.map((category) => ({
                value: category.name,
                label: category.name,
              }))}
            />

            <button type='submit' className='border border-black'>
              SAVE PRODUCT
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

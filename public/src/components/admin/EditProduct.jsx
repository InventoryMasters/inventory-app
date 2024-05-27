import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiURL from '../../api';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { useNavigate } from 'react-router';

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    qty: '',
    imageUrl: '',
    category: '',
  });

  const navigate = useNavigate();

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${apiURL}/items/${id}`);
      setProduct(response.data);
      setFormData({
        name: response.data.name,
        description: response.data.description,
        price: response.data.price,
        qty: response.data.qty,
        imageUrl: response.data.imageUrl,
        category:
          response.data.category && response.data.category.length > 0
            ? {
                value: response.data.category[0].name,
                label: response.data.category[0].name,
              }
            : '',
      });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData({
      ...formData,
      category: selectedOption,
    });
  };
  const submitEditProduct = async (e) => {
    e.preventDefault();
    try {
      const productFields = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        qty: formData.qty,
        imageUrl: formData.imageUrl,
        category: formData.category,
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
          onSubmit={submitEditProduct}
          className='text-sm font-light -translate-x-[40%] w-[40vw] flex flex-col text-start pt-10'
        >
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          <label htmlFor='description' className='pt-5'>
            description
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='border border-black w-[80%] h-28 text-black py-2 rounded-md px-3'
          />
          <label htmlFor='price' className='pt-5'>
            price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          <label htmlFor='qty' className='pt-5'>
            qty
          </label>
          <input
            type='number'
            id='qty'
            name='qty'
            value={formData.qty}
            onChange={handleInputChange}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          <label htmlFor='imageUrl' className='pt-5'>
            image URL
          </label>
          <input
            type='text'
            id='imageUrl'
            name='imageUrl'
            value={formData.imageUrl}
            onChange={handleInputChange}
            className='border border-black w-[80%] text-black py-2 rounded-md px-3'
          />
          <h3 className='pt-5'>select category:</h3>
          <CreatableSelect
            options={categories.map((category) => ({
              value: category.name,
              label: category.name,
            }))}
            value={formData.category}
            onChange={handleCategoryChange}
            className=' w-[80%] text-black rounded-md '
          />
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

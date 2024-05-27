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
          category: response.data.category.name,
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
      category: selectedOption.value,
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
      <h1>EDIT PRODUCT</h1>
      <div className='flex justify-between'>
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='w-[400px]'
          />
        </div>
        <form
          onSubmit={submitEditProduct}
          className='text-sm font-light border border-black -translate-x-[40%] w-[40vw] flex flex-col text-start'
        >
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='border border-black w-[80%] text-black'
          />
          <label htmlFor='description'>description</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='border border-black w-[80%]'
          />
          <label htmlFor='price'>price</label>
          <input
            type='number'
            id='price'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
            className='border border-black'
          />
          <label htmlFor='qty'>qty</label>
          <input
            type='number'
            id='qty'
            name='qty'
            value={formData.qty}
            onChange={handleInputChange}
            className='border border-black'
          />
          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='text'
            id='imageUrl'
            name='imageUrl'
            value={formData.imageUrl}
            onChange={handleInputChange}
            className='border border-black'
          />
          <h3>select category:</h3>
          <CreatableSelect
            options={categories.map((category) => ({
              value: category.name,
              label: category.name,
            }))}
            value={{ value: formData.category, label: formData.category }}
            onChange={handleCategoryChange}
          />
          <button type='submit' className='border border-black'>
            EDIT PRODUCT
          </button>
        </form>
      </div>
    </section>
  );
}

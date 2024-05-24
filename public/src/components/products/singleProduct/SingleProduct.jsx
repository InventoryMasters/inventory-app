import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import apiURL from '../../../api'


export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log({id})
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiURL}/items/${id}`);
        setProduct(response.data);
        console.log({product})
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
    <section className='bg-slate-500 flex '>
      <h1>{product.name}</h1>
      <img className='w-[300px]' src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.qty}</p>
    </section>
  );
}

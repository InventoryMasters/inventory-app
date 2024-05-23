import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/items');
        console.log('Fetched products:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <h1>All Products</h1>
    <div>
      {Array.isArray(products) ? ( 
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.qty}</p>
          </div>
        ))
      ) : (
        <p>No products available</p> 
      )}
    </div>
  </div>
);
};

export default AllProducts;

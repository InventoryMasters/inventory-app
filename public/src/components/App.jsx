import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import apiURL from '../api';
import AllProducts from './products/allProducts/AllProducts';
import Navbar from './navbar/Navbar';
import Homepage from './Homepage';
import SingleProduct from './products/singleProduct/SingleProduct';

export const App = () => {
  return (
    <section className='bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:productId' element={<SingleProduct/>}/>
      </Routes>
    </section>
  );
};

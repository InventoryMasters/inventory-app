import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import apiURL from '../api';
import React from 'react';
import AllProducts from './products/allProducts/AllProducts';
import Navbar from './navbar/Navbar';
import Homepage from './Homepage';
import SingleProduct from './products/singleProduct/SingleProduct';
import About from './About';
import Login from './profiledropdown/LoginForm';
import Profile from './profiledropdown/ProfilePage';

export const App = () => {
  const { token } = useUser();

  return (
    <section className='bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />

        <Route
          path='/login'
          element={token ? <Navigate to='/profile' /> : <Login />}
        />
        <Route
          path='/profile'
          element={token ? <Profile /> : <Navigate to='/login' />}
        />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </section>
  );
};

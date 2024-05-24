import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import apiURL from '../api';
import AllProducts from './AllProducts';
import Navbar from './Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/products' element={<AllProducts />} />
      </Routes>
    </>
  );
};

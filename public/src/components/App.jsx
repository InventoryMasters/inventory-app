import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import apiURL from '../api';
import AllProducts from './AllProducts';
import Navbar from './Navbar';
import Homepage from './Homepage';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<AllProducts />} />
      </Routes>
    </>
  );
};

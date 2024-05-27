import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import apiURL from '../api';
import AllProducts from './products/allProducts/AllProducts';
import Navbar from './navbar/Navbar';
import Homepage from './Homepage';
import SingleProduct from './products/singleProduct/SingleProduct';
import About from './About';
import Login from './profiledropdown/LoginForm';
import Profile from './profiledropdown/ProfilePage';
import SliderWrapper from './profiledropdown/sliderWrapper';
import AdminDashboard from './admin/AdminDashboard';
import EditProduct from './admin/EditProduct';
import CreateProduct from './admin/CreateProduct';

export const App = () => {
  const { token } = useUser();
  const [isSliderHidden, setIsSliderHidden] = useState(true);

  const toggleFormWrapper = () => {
    console.log(isSliderHidden);
    setIsSliderHidden(!isSliderHidden);
  };

  return (
    <section className='bg-white'>
      <Navbar
        isSliderHidden={isSliderHidden}
        setIsSliderHidden={setIsSliderHidden}
        toggleFormWrapper={toggleFormWrapper}
      />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />

        {/**
        <Route
        path='/login'
        element={token ? <Navigate to='/profile' /> : <SliderWrapper isSliderHidden={isSliderHidden} setIsSliderHidden={setIsSliderHidden}/>}
        />
      */}
        {/**
        <Route
        path='/profile' 
        element={token ? <Profile /> : <Navigate to='/login' />}
        />
      */}
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route
          path='/admin/dashboard/edit-product/:id'
          element={<EditProduct />}
        />
        <Route
          path='/admin/dashboard/new-product'
          element={<CreateProduct />}
        />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </section>
  );
};

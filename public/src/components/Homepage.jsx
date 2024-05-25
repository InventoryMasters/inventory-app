import React from 'react'
import { Link } from 'react-router-dom';
// import leftImage from '../assets/homepage/homepage-left'
// import rightImage from '../assets/homepage/homepage-right'
import Navbar from "./navbar/Navbar";


export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-row rounded-lg overflow-hidden w-[70vw] h-[7-vh]'>
          <div className="w-1/2 h-full p-1">
            <img
              src='../assets/homepage/homepage-left.webp'
              alt='homepage img'
              className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className="flex flex-col w-1/2 h-full p-1">
            <img
              src='../assets/homepage-right.webp'
              alt='homepage img'
              className='w-full h-full object-cover rounded-lg flex-grow'
            />
          </div>
          <div className='flex justify-center mt-2'>
            <Link to={'/products'}>
              <button className="p-4 py-2">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

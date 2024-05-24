import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import user from '../../../assets/icons/user.svg';
import search from '../../../assets/icons/search.svg';

export default function Navbar() {
  return (
    <header className='fixed w-screen'>
      <nav className='font-encode font-medium  h-20 max-w-[100vw]'>
        <section className='flex justify-between items-center text-[1.2rem] text-primary-dark-gray h-full px-20'>
          <div className='flex mx-auto gap-8'>
            <Link to='/'>HOME</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/about'}>ABOUT</Link>
          </div>
          <div className='flex gap-8 h-5 pt-2'>
            <img src={search} alt='Search' className='h-[1.1rem]' />
            <img src={user} alt='User' className='h-[1.1rem]' />
          </div>
        </section>
        <Logo />
      </nav>
    </header>
  );
}

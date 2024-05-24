import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { header } from 'express-validator';

export default function Navbar() {
  return (
    <header className='fixed w-screen '>
      <nav className=' font-abril text-center  border border-black h-20 max-w-[100vw]'>
        NAVBAR
        <Link to={'/products'}>SHOP</Link>
        <Logo />
      </nav>
    </header>
  );
}

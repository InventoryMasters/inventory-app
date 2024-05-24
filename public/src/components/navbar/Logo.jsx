import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <section className='relative'>
      <h1 className='text-[4rem] forn-abril text-primary-logo leading-none -top-6 left-5 absolute'>
        cure
      </h1>
      <span className='text-[1.3rem] font-encode text-primary-light-gray font-thin absolute top-6 left-32 leading-none bg-transparent'>
        skin
      </span>
    </section>
  );
}

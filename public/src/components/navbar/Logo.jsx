import React from 'react';
import { Link } from 'react-router-dom';


export default function Logo() {
  return (
    <section className='relative'>
      <Link to='/' className='absolute -top-[4.9rem] left-5'>
        <h1 className='text-[4rem] font-abril text-primary-logo leading-none'>
          cure
        </h1>
        <span className='text-[1.3rem] font-encode text-primary-light-gray font-thin absolute top-12 left-28 leading-none bg-transparent'>
          skin
        </span>
      </Link>
    </section>
  );
}

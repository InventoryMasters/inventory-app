import React, { useState } from 'react';
import Login from './LoginForm';
import SignupForm from './SignupForm';
import x from '../../../assets/icons/x.svg';

export default function SliderWrapper({ isSliderHidden, setIsSliderHidden }) {
  const [formMode, setFormMode] = useState('login');
  console.log('hello wrappeer');

  return (
    <section
      className={
        !isSliderHidden
          ? 'h-[calc(100dvh_-_5rem)] w-[100dvw] flex flex-col fixed  bottom-0 right-0 bg-primary-light-gray/20 backdrop-blur-md'
          : 'hidden'
      }
    >
      <div className='flex justify-end translate-y-10 -translate-x-6 z-50 bg-transparent '>
        <img
          src={x}
          alt='Close slider'
          className=' bg-transparent h-5 fixed'
          onClick={() => setIsSliderHidden(true)}
        />
      </div>

      <div className='w-[40dvw] bg-primary-popup relative flex h-full flex-col self-end rounded-l-3xl'>
        {formMode === 'login' ? <Login /> : <SignupForm />}
      </div>
    </section>
  );
}

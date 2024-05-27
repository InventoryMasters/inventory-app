import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import apiURL from '../../../api';

export default function EditUserInfo({ user, onUpdate }) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: '',
    },
  });

  console.log({ user });
  const onSubmit = async (data) => {
    try {
      const newData = { ...data, passwordHash: data.password };
      delete newData.password;
      const response = await axios.put(`${apiURL}/users/${user.id}`, newData);
      onUpdate(response.data);
      // console.log('updated user ');
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <section className='pt-44 bg-transparent text-primary-dark-gray w-[60%]'>
      <h1 className='bg-transparent text-center text-[3rem] pb-10'>
        edit profile
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-transparent w-full'>
        <div className='bg-transparent flex flex-col'>
          <label htmlFor='firstName' className='slider-label'>
            first name:
          </label>
          <input
            type='text'
            id='firstName'
            {...register('firstName')}
            className='slider-input'
          />

          <label htmlFor='lastName' className='slider-label'>
            last name:
          </label>
          <input
            type='text'
            id='lastName'
            {...register('lastName')}
            className='slider-input'
          />

          <label htmlFor='email' className='slider-label'>
            email:
          </label>
          <input
            type='email'
            id='email'
            {...register('email')}
            className='slider-input'
          />

          <label htmlFor='password' className='slider-label'>
            password:
          </label>
          <input
            type='password'
            id='password'
            {...register('password')}
            // value={showPassword ? user.password : '********'}
            // readOnly={!showPassword}
            className='slider-input'
          />
          {/**
          <button type='button' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'} Password
          </button>
        */}
        </div>

        <button
          type='submit'
          className='border border-primary-dark-gray py-2 w-full uppercase rounded-full'
        >
          edit profile
        </button>
      </form>
    </section>
  );
}

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import apiURL from '../../../api';

export default function EditUserInfo({ user, onUpdate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const newData = { ...data, passwordHash: data.password };
      delete newData.password;
      const response = await axios.put(`${apiURL}/users/${user.id}`, newData);
      onUpdate(response.data);
      setServerError('');
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.log('Server error:', err.response.data);
        setServerError(err.response.data.message);
      } else if (err.request) {
        console.log('No response received from server:', err.request);
      } else {
        console.log('Error setting up request:', err.message);
      }
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
            {...register('firstName', { required: 'first name is required' })}
            className='slider-input font-light'
          />
          {errors.firstName && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.firstName.message}
            </p>
          )}

          <label htmlFor='lastName' className='slider-label'>
            last name:
          </label>
          <input
            type='text'
            id='lastName'
            {...register('lastName', { required: 'last name is required' })}
            className='slider-input font-light'
          />
          {errors.lastName && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.lastName.message}
            </p>
          )}

          <label htmlFor='email' className='slider-label'>
            email:
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'email is required' })}
            className='slider-input font-light'
          />
          {errors.email && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.email.message}
            </p>
          )}

          <label htmlFor='password' className='slider-label'>
            password:
          </label>
          <input
            type='password'
            id='password'
            {...register('password')}
            placeholder='************'
            className='slider-input font-light '
          />
          {errors.password && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.password.message}
            </p>
          )}
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

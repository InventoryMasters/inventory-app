import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import apiURL from '../../api';

const Login = ({ setFormMode, toggleFormWrapper }) => {
  const { login } = useUser();

  const zodLogin = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodLogin),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiURL}/auth/login`, data);
      login(response.data.token);
      toggleFormWrapper();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('authentication', {
          type: 'manual',
          message: 'User not found. Please check your email and password.',
        });
      } else {
        console.error('Server error:', error);
        // Handle other errors here, if needed
      }
    }
  };

  return (
    <div className='w-96 h-96 flex justify-start flex-col absolute top-20 right-40 bg-transparent font-encode text-primary-dark-gray'>
      <h2 className='text-center text-[3rem] bg-transparent pb-20 font-semi-bold tracking-wide text-primary-dark-gray/85'>
        login
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col bg-transparent'
      >
        {errors.authentication && (
          <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
            {errors.authentication.message}
          </p>
        )}
        <div className='flex flex-col bg-transparent'>
          <label className='slider-label'>email</label>
          <input type='email' {...register('email')} className='slider-input' />
          {errors.email && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.email.message}
            </p>
          )}
          <label className='slider-label'>password</label>
          <input
            type='password'
            {...register('password')}
            className='slider-input'
          />
          {errors.password && (
            <p className='text-red-700 bg-transparent text-sm -translate-y-9'>
              {errors.password.message}
            </p>
          )}
        </div>
        <p className='bg-transparent text-center -mt-8 text-sm tracking-wide'>
          don't have an account? sign up
          <span
            onClick={() => setFormMode('signup')}
            className='bg-transparent font-semi-bold cursor-pointer'
          >
            {' '}
            here
          </span>{' '}
          instead
        </p>

        <button
          type='submit'
          className='uppercase w-full h-14 bg-white rounded-full font-light mt-10 text-lg'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

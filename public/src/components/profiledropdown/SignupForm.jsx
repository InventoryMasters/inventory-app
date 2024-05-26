import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import apiURL from '../../api'

export default function SignupForm({ setFormMode }) {
  const zodSignin = () =>
    z
      .object({
        firstName: z
          .string()
          .min(2, { message: 'First name must be at least 2 characters long' }),
        lastName: z
          .string()
          .min(2, { message: 'Last name must be at least 2 characters long' }),
        email: z
          .string()
          .email({ message: 'Please enter a valid e-mail address' }),
        password: z
          .string()
          .min(8, { message: 'Password must contain 8-24 characters' })
          .max(24, { message: 'Password must contain 8-24 characters' }),
        confirmPassword: z
          .string()
          .min(8, { message: 'Password must contain 8-24 characters' })
          .max(24, { message: 'Password must contain 8-24 characters' }),
      })
      .strict()
      .refine(
        ({ password, confirmPassword }) => {
          return password === confirmPassword;
        },
        {
          message: 'Password fiels do not match',
          path: ['confirmPassword'],
        }
      );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSignin),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const sumbitData = async () => {
    try {
      const response = await axios.post(`${apiURL}/auth/signup`, {
       firstName, lastName, email, password
      });


    } catch (err) {
      throw err;
    }
  };

  return (
    <section className='w-96 h-[36rem] flex justify-start flex-col absolute top-20 right-40 bg-transparent font-encode text-primary-dark-gray'>
      <h2 className='text-center text-[3rem] bg-transparent pb-20 font-semi-bold tracking-wide text-primary-dark-gray/85'>
        sign up
      </h2>

      <form action='submit' className='flex flex-col bg-transparent '>
        <div className='flex flex-col bg-transparent'>
          <label htmlFor='first-name' className='slider-label'>
            first name
          </label>
          <input
            className='slider-input'
            type='text'
            placeholder={errors.firstName?.message || ''}
            {...register('firstName')}
          />
          <label htmlFor='last-name' className='slider-label'>
            last name
          </label>
          <input
            className='slider-input'
            type='text'
            placeholder={errors.lastName?.message || ''}
            {...register('lastName')}
          />
          <label htmlFor='email' className='slider-label'>
            email
          </label>
          <input
            className='slider-input'
            type='email'
            placeholder={errors.email?.message || ''}
            {...register('email')}
          />
          <label htmlFor='password' className='slider-label'>
            password
          </label>
          <input
            className='slider-input'
            type='password'
            placeholder={errors.password?.message || ''}
            {...register('password')}
          />
          <label htmlFor='confirm-password' className='slider-label'>
            confirm password
          </label>
          <input
            className='slider-input'
            type='password'
            placeholder={errors.confirmPassword?.message || ''}
            {...register('confirmPassword')}
          />
        </div>

        <p className='bg-transparent text-center -mt-8 text-sm tracking-wide'>
          already have an account? login
          <span
            onClick={async () => setFormMode('login')}
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
          sign up
        </button>
      </form>
    </section>
  );
}

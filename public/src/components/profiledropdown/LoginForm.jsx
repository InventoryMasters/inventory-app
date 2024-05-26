// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Login = ({ setFormMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      login(response.data.token);
      navigate('/');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='w-96 h-96 flex justify-start flex-col absolute top-20 right-40 bg-transparent font-encode text-primary-dark-gray'>
      <h2 className='text-center text-[3rem] bg-transparent pb-20 font-semi-bold tracking-wide text-primary-dark-gray/85'>
        login
      </h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col bg-primary-popup/60 '
      >
        <div className='flex flex-col bg-primary-popup/60 '>
          <label className='slider-label'>email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='slider-input'
          />

          <label className='slider-label'>password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='slider-input'
          />
        </div>
        <p className='bg-transparent text-center -mt-8 text-sm tracking-wide'>
          don't have an account? sign up
          <span
            onClick={async () => setFormMode('signup')}
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

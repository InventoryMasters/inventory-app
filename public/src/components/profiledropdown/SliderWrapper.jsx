import React, { useState } from 'react';
import Login from './LoginForm';
import SignupForm from './SignupForm';
import x from '../../../assets/icons/x.svg';
import { useUser } from '../../context/UserContext';
import ProfilePage from './userProfile/ProfilePage'; // Import the ProfilePage component

export default function SliderWrapper({
  isSliderHidden,
  setIsSliderHidden,
  toggleFormWrapper,
}) {
  const [formMode, setFormMode] = useState('login');
  const { token } = useUser();

  return (
    <section
      className={
        !isSliderHidden
          ? 'h-[calc(100dvh_-_5rem)] w-[100dvw] flex flex-col fixed bottom-0 right-0 bg-primary-light-gray/20 backdrop-blur-md z-[10000]'
          : 'hidden'
      }
    >
      <div className='flex justify-end translate-y-10 -translate-x-6 z-50 bg-transparent'>
        <img
          src={x}
          alt='Close slider'
          className='bg-transparent h-5 fixed'
          onClick={toggleFormWrapper}
        />
      </div>

      <div className='w-[730px] bg-primary-popup/90 relative flex h-full flex-col self-end rounded-l-3xl'>
        {token ? (
          <ProfilePage /> // Render ProfilePage component if user has a token
        ) : formMode === 'login' ? (
          <Login
            setFormMode={setFormMode}
            toggleFormWrapper={toggleFormWrapper}
          />
        ) : (
          <SignupForm
            setFormMode={setFormMode}
            toggleFormWrapper={toggleFormWrapper}
          />
        )}
      </div>
    </section>
  );
}

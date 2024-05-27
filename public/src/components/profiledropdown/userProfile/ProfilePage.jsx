import React, { useState, useEffect } from 'react';
import { useUser } from '../../../context/UserContext';
import apiURL from '../../../api';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import EditUserInfo from './EditUserInfo';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [editMode, setEditMode] = useState(false);
  const { logout } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          console.log('Token:', token);
          const decodedToken = jwtDecode(token);
          console.log('Decoded Token:', decodedToken);
          const response = await axios.get(
            `${apiURL}/users/${decodedToken.id}`
          );
          // console.log('USER', user);
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
        setUser(null);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
    setEditMode(false);
  };

  if (!user) return <p>cannot load user info</p>;

  console.log({ user });

  return (
    <section className='w-full flex flex-col justify-center items-center bg-transparent text-primary-dark-gray'>
      {user && !editMode && (
        <>
          <h1 className='bg-transparent pt-20 text-[3rem] pb-20'>
            hi, {user.firstName}
          </h1>
          <div className='font-light bg-transparent'>
            <p className='bg-transparent'>
              <span className='bg-transparent font-medium pr-10'>
                first name:
              </span>{' '}
              {user.firstName}
            </p>
            <p className='bg-transparent'>
              <span className='bg-transparent font-medium pr-10'>
                last name:
              </span>{' '}
              {user.lastName}
            </p>
            <p className='bg-transparent'>
              <span className='bg-transparent font-medium pr-10'>email:</span>{' '}
              {user.email}
            </p>
            <p className='bg-transparent'>
              <span className='bg-transparent font-medium pr-10'>
                password:
              </span>{' '}
              **********
            </p>
          </div>
          <div className='bg-transparent flex flex-col pt-36 w-full items-center '>
            <button
              onClick={handleEditProfile}
              className='bg-white py-2 w-[50%] rounded-full font-regular text-[1.3rem] mb-6'
            >
              EDIT PROFILE
            </button>
            <button className='border border-primary-dark-gray py-1 px-14 rounded-full' onClick={logout}>
              LOGOUT
            </button>
          </div>
        </>
      )}

      {editMode && <EditUserInfo user={user} onUpdate={handleUserUpdate} />}
    </section>
  );
};

export default Profile;

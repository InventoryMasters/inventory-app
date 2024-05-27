import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import apiURL from '../api';
import { jwtDecode } from 'jwt-decode';
import apiURL from '../api';
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // const fetchUserData = async () => {
  //   try {
  //     if (token) {
  //       console.log('Token:', token);
  //       const decodedToken = jwtDecode(token);
  //       console.log('Decoded Token:', decodedToken);
  //       const response = await axios.get(`${apiURL}/users/${decodedToken.id}`);
  //       console.log('USER', user);
  //       setUser(response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user information:', error);
  //     setUser(null);
  //   }
  // };

  const login = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // await fetchUserData();
  };

  const signup = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // await fetchUserData();
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  const isAdmin = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log({ decodedToken });
        return decodedToken.role === 'ADMIN';
      } catch (error) {
        console.error('Error decoding token:', error);
        return false;
      }
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{ token, login, logout, signup, isAdmin, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

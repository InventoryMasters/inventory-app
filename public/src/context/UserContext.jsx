import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import jwt_decode from 'jwt-decode';
const jwt_decode = require('jwt-decode');
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const signup = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  const isAdmin = () => {
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.role === 'ADMIN';
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ token, login, logout, signup, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

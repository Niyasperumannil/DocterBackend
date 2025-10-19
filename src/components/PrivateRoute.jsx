import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Get token from localStorage (set during login)
  const token = localStorage.getItem('adminToken');

  // If token does not exist, redirect to login page
  if (!token) {
    return <Navigate to="/Adminlogin" replace />;
  }

  // If token exists, render the requested page
  return children;
};

export default PrivateRoute;

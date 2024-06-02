import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Thay thế bằng logic xác thực của bạn

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

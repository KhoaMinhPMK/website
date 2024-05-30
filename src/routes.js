// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'; // Import Home component
import Login from './components/pages/Login'; // Ensure correct import path// Ensure correct import path
import Signup from './components/pages/Signup';
import Chat from './components/pages/Chat';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Ensure this path is correct */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

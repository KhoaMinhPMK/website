// src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-3xl">📘</span> {/* Replace with your logo if available */}
          <span>LearnPage</span>
        </div>
        <nav className="flex space-x-8 ml-auto">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/chat" className="hover:text-gray-200">Chat</Link>
          <Link to="/learn" className="hover:text-gray-200">Learn</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
        <div className="flex space-x-4 ml-8">
          <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Join</Link>
          <Link to="/login" className="border border-white hover:bg-white hover:text-black text-white py-2 px-4 rounded">Log In</Link> {/* Ensure this link is lowercase */}
        </div>
      </div>
    </header>
  );
};

export default Header;

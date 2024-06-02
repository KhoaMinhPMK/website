import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');
  let user = null;
  const userItem = localStorage.getItem('user');

  console.log('Retrieved user from localStorage:', userItem);

  if (userItem && userItem !== "undefined") {
    try {
      user = JSON.parse(userItem);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('user');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-3xl">📘</span>
          <span>LearnPage</span>
        </div>
        <nav className="flex space-x-8 ml-auto">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/chat" className="hover:text-gray-200">Chat</Link>
          <Link to="/learn" className="hover:text-gray-200">Learn</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
        <div className="flex space-x-4 items-center ml-8">
          {isAuthenticated ? (
            <>
              {user && <span>Hello, {user.name}</span>}
              <button 
                onClick={handleLogout}
                className="border border-white hover:bg-white hover:text-black text-white py-2 px-4 rounded"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Join</Link>
              <Link to="/login" className="border border-white hover:bg-white hover:text-black text-white py-2 px-4 rounded">Log In</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

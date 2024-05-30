// src/components/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';

const Login = () => {
  console.log("Login component rendered!"); // Add this line
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center">Welcome to LearnPage!</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign In</button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600">
            New on our platform? <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

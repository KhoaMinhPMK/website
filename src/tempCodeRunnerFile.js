// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes'; // Import AppRoutes component
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

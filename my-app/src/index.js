import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tech from './pages/Tech.js';
import Entrepr from './pages/Entrepr.js';
import Research from './pages/Research.js';
import Business from './pages/Business.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/research",
    element: <Research />,
  },

  {
    path: "/tech",
    element: <Tech />,
  },

  {
    path: "/entrepr",
    element: <Entrepr />,
  },

  {
    path: "/Business",
    element: <Business />,
  },

  {
    path: "*",
    element: <App />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

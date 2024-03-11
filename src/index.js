import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/home',
  //   element: <Landing />
  // },
  // {
  //   path: '/signup',
  //   element: <Login />,
  // },
  // {
  //   path: '/login',
  //   element: <Team />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

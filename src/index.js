import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Pages/Landing';
import Login from "./Pages/Login";
import Team from "./Pages/Team"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/team',
    element: <Team />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

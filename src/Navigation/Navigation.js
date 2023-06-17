import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components Imports
import AuthenticationCheck from "../Utility/AuthenticationCheck";
import Login from "../Pages/Employee/Login/Login";
import Dashboard from "../Pages/Employee/Dashboard/Dashboard";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthenticationCheck />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;

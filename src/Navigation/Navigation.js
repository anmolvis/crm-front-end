import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Pages/Employee/Dashboard";
import Login from "../Pages/Employee/Login";
import AuthenticationCheck from "../Utility/AuthenticationCheck";

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

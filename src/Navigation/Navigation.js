import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components Imports
import AuthenticationCheck from "../Utility/AuthenticationCheck";
import Login from "../Pages/Employee/Login/Login";
import { routes } from "./navigation.constant";

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
    ...routes.map((item) => ({
      path: item.path,
      element: item.element,
    })),
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;

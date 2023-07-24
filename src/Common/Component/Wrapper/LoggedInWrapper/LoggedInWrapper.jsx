import React from "react";
import NavBar from "../Navbar/NavBar";
import "./LoggedInWrapper.scss"

const LoggedInWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="main-body">{children}</div>
    </>
  );
};

export default LoggedInWrapper;
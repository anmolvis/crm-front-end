import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
      } else {
        let resp = false;

        // Axios call with the token

        if (resp) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      navigate("/login");
    }
  }, []);
  return null;
};

export default AuthenticationCheck;

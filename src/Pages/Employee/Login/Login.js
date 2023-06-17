import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const redirectUrl = useRef();
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();

  const authCheck = () => {
    redirectUrl.current = params.get("redirect");

    console.log(redirectUrl);
    navigate(redirectUrl);
  };

  useEffect(() => {
    authCheck();
  }, []);

  return <p>Login Page</p>;
};
export default Login;

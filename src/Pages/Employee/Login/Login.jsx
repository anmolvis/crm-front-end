import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// Import CSS
import "./Login.scss";

const Login = () => {
  const redirectUrl = useRef();
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();

  const authCheck = () => {
    redirectUrl.current = params.get("redirect");

    navigate(redirectUrl);
  };

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <div className="login-container">
      <div className="google-login-container">
        <div className="content">
          <h3>Welcome!</h3>
          <p>Login with your offical email.</p>
        </div>
        <div className="google-login-button">
          <GoogleOAuthProvider clientId="654026480705-rve4pq96j1o996ejs6umnvbkjclhsl58.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(cred) => {
                //  TODO: Handle this
              }}
              shape="square"
              type="standard"
              logo_alignment="left"
              width="300"
              auto_select={true}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};
export default Login;

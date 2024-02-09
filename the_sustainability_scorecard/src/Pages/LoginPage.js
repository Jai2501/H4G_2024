import React from "react";
import "./LoginPage.css";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const navigateToAnotherPage = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="logo-section">
        <img
          src="/LoginPageAssets/GuiLogo.png"
          alt="logo"
          className="logo"
        ></img>
      </div>
      <div className="login-section">
        <div className="input-wrapper">
          <img
            src="/LoginPageAssets/UserLogo.png"
            alt="UserLogo"
            className="user-logo"
          ></img>
          <input placeholder="Username"></input>
        </div>
        <div className="input-wrapper">
          <img
            src="/LoginPageAssets/PasswordLogo.png"
            alt="PasswordLogo"
            className="password-logo"
          ></img>
          <input placeholder="Password"></input>
        </div>
        <button onClick={navigateToAnotherPage}>Log In</button>
        <a href="forgot">Forgot Password</a>
      </div>
    </div>
  );
}

export default LoginPage;

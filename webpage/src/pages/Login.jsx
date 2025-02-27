import React from "react";
import "../assets/css/pagecss/Login.css";

const Login = () => {
  const loginwithgoogle = () => {
    window.open("https://consultivaapi.vercel.app/auth/google", "_self");
  };

  return (
    <div className="login-page">
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
          <p className="message">
            Not Registered? <a href="#">Create an account</a>
          </p>
        </form>
        <button className="login-with-google-btn" onClick={loginwithgoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

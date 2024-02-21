import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../../Assests/logo-login.svg";
import cross from "../../Assests/cross-log.svg";
import { GoogleLogin } from "@react-oauth/google";

const Login = ({ setShowLogin, setShowSign, setShowForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = (error) => {
    console.log(error);
  };

  async function loginUser(event, credential) {
    if (event) event.preventDefault();
    

    const response = await fetch(
      "https://api.upskillmafia.com/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          credential,
        }),
      }
    );
    console.log("hiii")
    const data = await response.json();

    if (data.user) {
      alert("Login successful");
      setShowLogin(false);
      Cookies.set("user_name", data.user.name);
      Cookies.set("user_email", data.user.email);
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          loginUser(e);
        }}
        className="login-inner-cont"
      >
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />
          <div className="l-cross-cont" onClick={() => setShowLogin(false)}>
            <img src={cross} alt="cross" />
          </div>
        </div>

        <GoogleLogin
          className="googlesign"
          onSuccess={(credentialResponse) => {
            loginUser(null, credentialResponse);
          }}
          onError={errorMessage}
        />

        <div className="login-or">Or</div>
        <div className="inp-cont">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="l-inp"
          />
        </div>
        <div className="forgot-cont">
          <div className="remember-me">
            <input type="checkbox" name="rememberMe" value="rememberMe" />
            <span>Remember me</span>
          </div>
          <div className="forgot" onClick={() => setShowForgot(true)}>
            Forgot Password?
          </div>
        </div>
        <button type="submit" className="l-btn">
          Login
        </button>
        <div className="l-new">
          New User?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowLogin(false);
              setShowSign(true);
            }}
          >
            Sign Up
          </b>
        </div>
      </form>
    </div>
  );
};

export default Login;

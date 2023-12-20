import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../../Assests/logo-login.svg";
import cross from "../../Assests/cross-log.svg";
// import phone from "../../Assests/Phone.svg";
// import Person from "../../Assests/Person.svg";
// import emailImg from "../../Assests/email.svg";
// import pass from "../../Assests/pass.svg";

const Register = ({ setShowSign, setShowLogin, setShowRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("https://api.upskillmafia.com/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        mobile,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Successfully registered");
      // console.log(data);
      // console.log(data.newUser.name, data);
      Cookies.set("user_name", data.newUser.name);
      Cookies.set("user_email", data.newUser.email);
      setShowSign(false);
      setShowLogin(false);

      window.location.reload();
    } else {
      alert(data.error);
    }
  }
  const handlenumchange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setMobile(value);
    }
  };
  return (
    <div className="login-cont">
      <form onSubmit={registerUser} className="login-inner-cont">
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />

          <div className="l-cross-cont" onClick={() => setShowSign(false)}>
            <img src={cross} alt="cross" />
          </div>
        </div>
        <div className="inp-conts">
          <div className="inp-cont">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="l-inp"
            />
          </div>
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
              placeholder="Password(min 6 letters)"
              className="l-inp"
            />
          </div>
          <div className="inp-cont">
            <input
              type="tel"
              value={mobile}
              onChange={handlenumchange}
              placeholder="Phone Number"
              className="l-inp"
            />
          </div>
        </div>
        <button type="submit" className="l-btn">
          SignUp
        </button>
        <div className="l-new">
          Already have an Account?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowSign(false);
              setShowLogin(true);
            }}
          >
            Login
          </b>
        </div>
      </form>
    </div>
  );
};

export default Register;

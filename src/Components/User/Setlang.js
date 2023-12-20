import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../../Assests/logo.svg";


const Setlang = ({ setUser }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
    const email = Cookies.get("user_email");
  async function loginUser(event) {
    event.preventDefault();
    if (!selectedLanguage) {
      alert("Please select a language");
      return;
    }

    const response = await fetch(`https://api.upskillmafia.com/api/v1/user/setlanguage?email=${email}&language=${selectedLanguage}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();

    if (data.user) {
      setUser(data.user)
    } else {
      alert("Something went wrong!! Please try again");
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
        </div>

        <div className="inp-cont ">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="l-inp select-cont"
          >
            <option value="" disabled>
              Select your preferred language
            </option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
          </select>
        </div>

        <button type="submit" className="l-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default Setlang;

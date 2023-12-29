import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./ForgotPass.css";
import logo from "../../Assests/logo-login.svg";
import cross from "../../Assests/cross-log.svg";

const ForgotPass = ({ setShowLogin, otpsent, setShowForgot }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [enterOtp, setEnterOtp] = useState(otpsent ? otpsent : false);
  const [cnfPass, setCnfPass] = useState("");
  const [disable, setDisable] = useState(false);

  //   const errorMessage = (error) => {
  //     console.log(error);
  //   };

  async function handleSend() {
    if (number.length < 10) {
      alert("Please enter a valid number");
      setDisable(false);
      return;
    }
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/forgot?number=${number}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      //   console.log(data);
      if (data.success) {
        alert("Otp Sent To Whatsapp");
        Cookies.set("otp_sent", true);
        setDisable(false);
        setEnterOtp(true);
      } else {
        alert(data.message);
        setDisable(false);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later!!!");
    }
  }

  async function loginUser(event) {
    if (event) event.preventDefault();
  }

  async function handleChangePassword() {
    if (
      password === null ||
      password.length < 6 ||
      otp === null ||
      otp.length < 4 ||
      cnfPass === null ||
      cnfPass.length < 6
    ) {
      alert(
        "Please Fill The All fields Or Enter Password of length more than 6"
      );
      setDisable(false);
      return;
    }

    if (password !== cnfPass) {
      alert("Passwords do not match");
      setDisable(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp,
            password,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        Cookies.remove("otp_sent");
        setDisable(false);
        setEnterOtp(false);
        setShowForgot(false);
        setShowLogin(true);
      } else {
        alert(data.message);
        setDisable(false);
      }
    } catch (e) {
      Cookies.remove("otp_sent");
      setEnterOtp(false);
      alert("something went wrong!!!");
    }
  }
  return (
    <div className="login-cont">
      <form
        className="login-inner-cont1"
        onSubmit={(e) => {
          loginUser(e);
        }}
      >
        <div className="fp-logo-cont">
          <img src={logo} alt="logo" />
          <div
            className="l-cross-contt"
            onClick={() => {
              //   console.log("logo clicked");
              setShowForgot(false);
            }}
          >
            <img src={cross} alt="cross" />
          </div>
        </div>
        {!enterOtp && (
          <div className="fp-btm-cont">
            <div className="fp-wn-head-cont">
              <div className="fp-wn-head">Enter your Whatsapp Number!</div>
              <div className="fp-wn-text">OTP Will be sent to this number</div>
            </div>
            <div className="fp-inp-cont">
              <input
                type="text"
                placeholder="Enter Whatsapp Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div
              className={`fp-send-cont ${disable ? "disable-btn" : ""}`}
              onClick={() => {
                setDisable(true);
                handleSend();
              }}
              disabled={disable}
            >
              <span>Send Otp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M17.561 9.52513L13.975 5.93913C13.6936 5.65786 13.312 5.49991 12.9141 5.5C12.5163 5.50009 12.1348 5.65823 11.8535 5.93963C11.5722 6.22102 11.4143 6.60262 11.4144 7.00048C11.4145 7.39834 11.5726 7.77986 11.854 8.06113L14.293 10.5001H5.5C5.10218 10.5001 4.72064 10.6582 4.43934 10.9395C4.15804 11.2208 4 11.6023 4 12.0001C4 12.398 4.15804 12.7795 4.43934 13.0608C4.72064 13.3421 5.10218 13.5001 5.5 13.5001H14.293L11.854 15.9391C11.5726 16.2204 11.4145 16.6019 11.4144 16.9998C11.4143 17.3976 11.5722 17.7792 11.8535 18.0606C12.1348 18.342 12.5163 18.5002 12.9141 18.5003C13.312 18.5003 13.6936 18.3424 13.975 18.0611L17.561 14.4751C18.2162 13.8181 18.5842 12.928 18.5842 12.0001C18.5842 11.0722 18.2162 10.1822 17.561 9.52513Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
        {enterOtp && (
          <div className="fp-btm-cont">
            <div className="fp-wn-head-cont">
              <div className="fp-wn-head">Change Password</div>
              <div className="fp-wn-text">
                An OTP has been sent to the WhatsApp number
                <b
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    Cookies.remove("otp_sent");
                    setEnterOtp(false);
                  }}
                >
                  Edit Number
                </b>
              </div>
            </div>
            <div className="fp-inps-cont">
              <div className="fp-inp-cont">
                <div className="fp-wn-text">Enter otp</div>
                <input
                  type="text"
                  placeholder="Enter Otp"
                  value={otp}
                  onChange={(e) => {
                    if (!isNaN(e.target.value)) {
                      setOtp(e.target.value);
                    }
                  }}
                  maxLength={4}
                />
              </div>
              <div className="fp-inp-cont">
                <div className="fp-wn-text">Enter New Password</div>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={[password]}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="fp-inp-cont">
                <div className="fp-wn-text">Confirm Password</div>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={cnfPass}
                  onChange={(e) => setCnfPass(e.target.value)}
                />
              </div>
            </div>
            <div
              className={`fp-send-cont  ${disable ? "disable-btn" : ""}`}
              onClick={() => {
                setDisable(true);
                handleChangePassword();
              }}
            >
              <span>Change Password</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M17.561 9.52513L13.975 5.93913C13.6936 5.65786 13.312 5.49991 12.9141 5.5C12.5163 5.50009 12.1348 5.65823 11.8535 5.93963C11.5722 6.22102 11.4143 6.60262 11.4144 7.00048C11.4145 7.39834 11.5726 7.77986 11.854 8.06113L14.293 10.5001H5.5C5.10218 10.5001 4.72064 10.6582 4.43934 10.9395C4.15804 11.2208 4 11.6023 4 12.0001C4 12.398 4.15804 12.7795 4.43934 13.0608C4.72064 13.3421 5.10218 13.5001 5.5 13.5001H14.293L11.854 15.9391C11.5726 16.2204 11.4145 16.6019 11.4144 16.9998C11.4143 17.3976 11.5722 17.7792 11.8535 18.0606C12.1348 18.342 12.5163 18.5002 12.9141 18.5003C13.312 18.5003 13.6936 18.3424 13.975 18.0611L17.561 14.4751C18.2162 13.8181 18.5842 12.928 18.5842 12.0001C18.5842 11.0722 18.2162 10.1822 17.561 9.52513Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPass;

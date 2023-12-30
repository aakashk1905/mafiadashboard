import "./WhatsappPopup.css";
import whatsapp from "../../Assests/whatsapp-icon.png";
import { useState } from "react";

const WhatsappPopup = ({ setwpPop, email }) => {
  const [disable, setDisable] = useState(false);
  async function handleclosed() {
    setDisable(true);
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/closed?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Something went Wrong");
    } catch (e) {
      throw e;
    }

    setwpPop(false);
  }
  async function handlejoin() {
    setDisable(true);
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/joined?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Something went Wrong");
    } catch (e) {
      throw e;
    }

    setwpPop(false);
    window.open("https://chat.whatsapp.com/HeWKBOVlBp9IkfHLE53PhF", "_blank");
  }
  return (
    <div className="whatsapp-popup">
      <div className="wp-pop-logo-cont">
        <div className="wppop-logo-cont">
          <img className="whatsapp-icon" alt="" src={whatsapp} />
        </div>

        <svg
          onClick={handleclosed}
          className={`fi-br-cross-small-icon ${disable ? "disable " : ""} `}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M28.2417 23.9996L35.9997 16.2336C36.5034 15.6612 36.7702 14.9184 36.7458 14.1562C36.7215 13.3941 36.4079 12.6698 35.8687 12.1306C35.3295 11.5915 34.6052 11.2778 33.8431 11.2535C33.0809 11.2292 32.3382 11.4959 31.7657 11.9996L23.9997 19.7576L16.2197 11.9756C15.941 11.697 15.6102 11.4759 15.2461 11.3251C14.882 11.1743 14.4918 11.0967 14.0977 11.0967C13.7036 11.0967 13.3133 11.1743 12.9492 11.3251C12.5852 11.4759 12.2543 11.697 11.9757 11.9756C11.697 12.2543 11.476 12.5851 11.3251 12.9492C11.1743 13.3133 11.0967 13.7035 11.0967 14.0976C11.0967 14.4917 11.1743 14.882 11.3251 15.2461C11.476 15.6102 11.697 15.941 11.9757 16.2196L19.7577 23.9996L11.9997 31.7636C11.6954 32.0356 11.4498 32.3668 11.278 32.737C11.1061 33.1071 11.0116 33.5084 11.0002 33.9164C10.9888 34.3243 11.0607 34.7303 11.2116 35.1094C11.3625 35.4886 11.5891 35.833 11.8777 36.1216C12.1663 36.4102 12.5107 36.6368 12.8899 36.7877C13.269 36.9386 13.675 37.0105 14.0829 36.9991C14.4909 36.9877 14.8922 36.8932 15.2624 36.7213C15.6325 36.5495 15.9637 36.3039 16.2357 35.9996L23.9997 28.2416L31.7557 35.9996C32.3185 36.5624 33.0818 36.8786 33.8777 36.8786C34.6736 36.8786 35.4369 36.5624 35.9997 35.9996C36.5625 35.4369 36.8786 34.6735 36.8786 33.8776C36.8786 33.0817 36.5625 32.3184 35.9997 31.7556L28.2417 23.9996Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="wp-pop-head-cont">
        <div className="join-the-whatsapp-container">
          <span>Join the</span>
          <span className="whatsapp">{` Whatsapp `}</span>
          <span>Group!!</span>
        </div>
        <div className="wp-pop-head-inner-cont">
          <div className="wp-pop-head">
            <svg
              className="fi-br-arrow-small-right-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.061 10.2849L13.475 6.69889C13.1936 6.41763 12.812 6.25967 12.4141 6.25977C12.0163 6.25986 11.6348 6.418 11.3535 6.69939C11.0722 6.98079 10.9143 7.36239 10.9144 7.76025C10.9145 8.1581 11.0726 8.53963 11.354 8.82089L13.793 11.2599H5C4.60218 11.2599 4.22064 11.4179 3.93934 11.6992C3.65804 11.9805 3.5 12.3621 3.5 12.7599C3.5 13.1577 3.65804 13.5392 3.93934 13.8206C4.22064 14.1019 4.60218 14.2599 5 14.2599H13.793L11.354 16.6989C11.0726 16.9802 10.9145 17.3617 10.9144 17.7595C10.9143 18.1574 11.0722 18.539 11.3535 18.8204C11.6348 19.1018 12.0163 19.2599 12.4141 19.26C12.812 19.2601 13.1936 19.1022 13.475 18.8209L17.061 15.2349C17.7162 14.5779 18.0842 13.6878 18.0842 12.7599C18.0842 11.832 17.7162 10.9419 17.061 10.2849Z"
                fill="#848484"
              />
            </svg>
            <div className="interactive-learning-environme">
              Interactive Learning Environment
            </div>
          </div>
          <div className="wp-pop-head">
            <svg
              className="fi-br-arrow-small-right-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.061 10.2849L13.475 6.69889C13.1936 6.41763 12.812 6.25967 12.4141 6.25977C12.0163 6.25986 11.6348 6.418 11.3535 6.69939C11.0722 6.98079 10.9143 7.36239 10.9144 7.76025C10.9145 8.1581 11.0726 8.53963 11.354 8.82089L13.793 11.2599H5C4.60218 11.2599 4.22064 11.4179 3.93934 11.6992C3.65804 11.9805 3.5 12.3621 3.5 12.7599C3.5 13.1577 3.65804 13.5392 3.93934 13.8206C4.22064 14.1019 4.60218 14.2599 5 14.2599H13.793L11.354 16.6989C11.0726 16.9802 10.9145 17.3617 10.9144 17.7595C10.9143 18.1574 11.0722 18.539 11.3535 18.8204C11.6348 19.1018 12.0163 19.2599 12.4141 19.26C12.812 19.2601 13.1936 19.1022 13.475 18.8209L17.061 15.2349C17.7162 14.5779 18.0842 13.6878 18.0842 12.7599C18.0842 11.832 17.7162 10.9419 17.061 10.2849Z"
                fill="#848484"
              />
            </svg>
            <div className="interactive-learning-environme">
              Community and Networking
            </div>
          </div>
          <div className="wp-pop-head">
            <svg
              className="fi-br-arrow-small-right-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.061 10.2849L13.475 6.69889C13.1936 6.41763 12.812 6.25967 12.4141 6.25977C12.0163 6.25986 11.6348 6.418 11.3535 6.69939C11.0722 6.98079 10.9143 7.36239 10.9144 7.76025C10.9145 8.1581 11.0726 8.53963 11.354 8.82089L13.793 11.2599H5C4.60218 11.2599 4.22064 11.4179 3.93934 11.6992C3.65804 11.9805 3.5 12.3621 3.5 12.7599C3.5 13.1577 3.65804 13.5392 3.93934 13.8206C4.22064 14.1019 4.60218 14.2599 5 14.2599H13.793L11.354 16.6989C11.0726 16.9802 10.9145 17.3617 10.9144 17.7595C10.9143 18.1574 11.0722 18.539 11.3535 18.8204C11.6348 19.1018 12.0163 19.2599 12.4141 19.26C12.812 19.2601 13.1936 19.1022 13.475 18.8209L17.061 15.2349C17.7162 14.5779 18.0842 13.6878 18.0842 12.7599C18.0842 11.832 17.7162 10.9419 17.061 10.2849Z"
                fill="#848484"
              />
            </svg>
            <div className="interactive-learning-environme">
              Recognition and Achievement
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-wp-pop">
        Please Open{" "}
        <b style={{ color: "#1aba5b" }}>upskillmafia.com/whatsapp</b> from your
        mobile to join Group Seamlessly
      </div>
      <div
        className={`wp-pop-join-btn ${disable ? "disable d-btn" : ""}`}
        onClick={handlejoin}
      >
        <div className="join-group">Join Group</div>
        <svg
          className="fi-br-arrow-small-right-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.061 10.2849L13.475 6.69889C13.1936 6.41763 12.812 6.25967 12.4141 6.25977C12.0163 6.25986 11.6348 6.418 11.3535 6.69939C11.0722 6.98079 10.9143 7.36239 10.9144 7.76025C10.9145 8.1581 11.0726 8.53963 11.354 8.82089L13.793 11.2599H5C4.60218 11.2599 4.22064 11.4179 3.93934 11.6992C3.65804 11.9805 3.5 12.3621 3.5 12.7599C3.5 13.1577 3.65804 13.5392 3.93934 13.8206C4.22064 14.1019 4.60218 14.2599 5 14.2599H13.793L11.354 16.6989C11.0726 16.9802 10.9145 17.3617 10.9144 17.7595C10.9143 18.1574 11.0722 18.539 11.3535 18.8204C11.6348 19.1018 12.0163 19.2599 12.4141 19.26C12.812 19.2601 13.1936 19.1022 13.475 18.8209L17.061 15.2349C17.7162 14.5779 18.0842 13.6878 18.0842 12.7599C18.0842 11.832 17.7162 10.9419 17.061 10.2849Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default WhatsappPopup;

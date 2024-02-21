import React, { useEffect, useState } from "react";
import "./MentorReview.css";
import Leftbar from "../Components/Leftbar";
import Navbar from "../Components/Navbar";
import Cookies from "js-cookie";
import FeedBack from "../Components/Mentor/FeedBack";
const MentorReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

  const [active, setActive] = useState(1);
  const email = Cookies.get("user_email");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/user/getuser?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.userGot.role !== "mentor") {
        alert("This page is accessible only to mentors");
        window.location.href = "https://upskillmafia.com/dashboard";
      }
      setUser(result.userGot);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-cont">
      {isOpen && (
        <div className="abs-menu">
          <Leftbar
            setIsOpen={setIsOpen}
            isMentor={true}
            name={user ? user.name : "User"}
            active={active}
            setActive={setActive}
          />
        </div>
      )}
      <div className="main-left">
        <Leftbar
          isMentor={true}
          name={user ? user.name : "User"}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="main-right">
        <div className="main-nav-cont">
          <Navbar
            setIsOpen={setIsOpen}
            name={user ? user.name : "User"}
            active={active}
          />
        </div>
        <div className="main-data-cont">
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default MentorReview;

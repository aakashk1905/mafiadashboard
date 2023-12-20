import React, { useEffect, useState } from "react";
import "./Main.css";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import MainCont from "./MainCont";
import Cookies from "js-cookie";
// import Setlang from "./User/Setlang";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const email = Cookies.get("user_email");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/getuser?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setUser(result.userGot);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (user !== "" && user && !user.language) {
  //   return <Setlang setUser={setUser} />;
  // }

  return (
    <div className="main-cont">
      {isOpen && (
        <div className="abs-menu">
          <Leftbar setIsOpen={setIsOpen} name={user ? user.name : "User"} />
        </div>
      )}
      <div className="main-left">
        <Leftbar name={user ? user.name : "User"} />
      </div>
      <div className="main-right">
        <div className="main-nav-cont">
          <Navbar setIsOpen={setIsOpen} name={user ? user.name : "User"} />
        </div>
        <div className="main-data-cont">
          <MainCont user={user} />
        </div>
      </div>
    </div>
  );
};

export default Main;
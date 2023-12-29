import React, { useEffect, useState } from "react";
import "./Main.css";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import MainCont from "./MainCont";
import Cookies from "js-cookie";
import Dashhack from "./Dashhack";
// import Setlang from "./User/Setlang";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(1);
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
  const fetchData1 = async () => {
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/gettaskbymail?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTasks(result.tasks);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  return (
    <div className="main-cont">
      {isOpen && (
        <div className="abs-menu">
          <Leftbar
            setIsOpen={setIsOpen}
            name={user ? user.name : "User"}
            active={active}
            setActive={setActive}
          />
        </div>
      )}
      <div className="main-left">
        <Leftbar
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
        {active === 1 && (
          <div className="main-data-cont">
            <MainCont user={user} tasks={tasks} />
          </div>
        )}
        {active === 2 && (
          <div className="main-data-cont">
            <Dashhack />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

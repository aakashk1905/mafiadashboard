import React, { useEffect, useState } from "react";
import "./Main.css";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import MainCont from "./MainCont";
import Cookies from "js-cookie";
import Dashhack from "./Dashhack";
import WhatsappPopup from "./User/WhatsappPopup";
import Tasks from "./Tasks";
import { useParams } from "react-router-dom";
// import Setlang from "./User/Setlang";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wpPop, setwpPop] = useState(false);
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState({});

  const [tasksLoading, setTasksLoading] = useState(true);
  const [active, setActive] = useState(1);
  const email = Cookies.get("user_email");
  const { slug } = useParams();

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
      // console.log(result.userGot);

      if (
        (result.userGot.joined === false || !result.userGot.joined) &&
        (!result.userGot.closed || result.userGot.closed < 2)
      ) {
        setwpPop(true);
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };
  const fetchData1 = async () => {
    try {
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/gettaskbymail?email=${email}`
        // `http://localhost:4000/api/v1/user/gettaskbymail?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTasks(result.tasks);
      setTasksLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1();
    if (slug === "tasks") {
      setActive(3);
    } else if (slug === "hackathon") {
      setActive(2);
    }
  }, []);

  // if (slug !== "tasks" || slug !== "hackathon") {
  //   window.location.href = "https://upskillmafia.com/dashbaoard";
  //   return <h1> Not a Valid URL !!!!</h1>;
  // }
  const tabs = ["tasks", "hackathon"];
  if (slug) {
    console.log(slug);
    if (!tabs.includes(slug)) {
      window.location.href = "https://upskillmafia.com/dashboard";
      return <h1> Not a Valid URL !!!!</h1>;
    }
  }
  return (
    <div className="main-cont">
      {wpPop && (
        <div className="wp-pop-outer">
          <WhatsappPopup email={email} setwpPop={setwpPop} />
        </div>
      )}
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
            <MainCont
              tasksLoading={tasksLoading}
              setActive={setActive}
              user={user}
              tasks={tasks}
            />
          </div>
        )}
        {active === 2 && (
          <div className="main-data-cont">
            <Dashhack />
          </div>
        )}
        {active === 3 && (
          <div className="main-data-cont">
            <Tasks tasksLoading={tasksLoading} tasks={tasks} user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

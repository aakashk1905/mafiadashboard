import React, { useEffect, useRef, useState } from "react";
import "./Dashhack.css";
import aim from "../Assests/aim.png";
import submit from "../Assests/submit.svg";
import tips from "../Assests/tips.png";
import leaderboard from "../Assests/leaderboard.png";
import wintr from "../Assests/wintr.png";

const Dashhack = () => {
  const [tip, setTips] = useState(false);
  const [prevwinners, setPrevWinners] = useState([]);
  const [currwinners, setCurrWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const scrollableDivRef = useRef(null);

  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollableDivRef.current.offsetLeft;
    scrollLeft = scrollableDivRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault(); // Prevent default text selection behavior

    const x = e.pageX - scrollableDivRef.current.offsetLeft;
    const scroll = x - startX;
    scrollableDivRef.current.scrollLeft = scrollLeft - scroll;
  };

  useEffect(() => {
    const div = scrollableDivRef.current;
    if (div) {
      div.addEventListener("mousedown", handleMouseDown);
      div.addEventListener("mouseup", handleMouseUp);
      div.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (div) {
        div.removeEventListener("mousedown", handleMouseDown);
        div.removeEventListener("mouseup", handleMouseUp);
        div.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwGQOrZLx4lgiyh-SmvQbV5_9weUPNvxs9HAEJxEXqWs9xjQ9Whu-veIZA5yN6f1nb8/exec"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data.data);
        setPrevWinners(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData1 = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzjEJNcUqsfOGLCs-1cU7OySKQcR9N5mvZGVQKXdpmg4i2Qzq-ibWRWArihY00h--ZVlQ/exec"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data.data);
        setCurrWinners(data.data);
        setLoading1(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchData1();
  }, []);

  return (
    <div className="dh-cont">
      <div className="dh-left-cont">
        <div className="dh-left-top-cont">
          <div className="dh-left-card-top">
            <img src={aim} alt="aim" />
            <span>
              Hackathon <b style={{ color: "#FFCF33" }}>Problem Statement</b>
            </span>
          </div>
          <div className="dh-left-card-btm">
            <div className="dh-ps-text">
              Create a mobile app for upskill mafia which containw a community
              forum and a social media platform for beg...
            </div>
            <a
              href="https://upskillmafia.com/hackathon-task"
              target="_blank"
              rel="noreferrer"
              style={{ width: "100%" }}
            >
              <div className="mc-join-cont" style={{ height: "65px" }}>
                <span>View Problem Statement</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.061 10.0251L13.475 6.43913C13.1936 6.15786 12.812 5.99991 12.4141 6C12.0163 6.00009 11.6348 6.15823 11.3535 6.43963C11.0722 6.72102 10.9143 7.10262 10.9144 7.50048C10.9145 7.89834 11.0726 8.27986 11.354 8.56113L13.793 11.0001H5C4.60218 11.0001 4.22064 11.1582 3.93934 11.4395C3.65804 11.7208 3.5 12.1023 3.5 12.5001C3.5 12.898 3.65804 13.2795 3.93934 13.5608C4.22064 13.8421 4.60218 14.0001 5 14.0001H13.793L11.354 16.4391C11.0726 16.7204 10.9145 17.1019 10.9144 17.4998C10.9143 17.8976 11.0722 18.2792 11.3535 18.5606C11.6348 18.842 12.0163 19.0002 12.4141 19.0003C12.812 19.0003 13.1936 18.8424 13.475 18.5611L17.061 14.9751C17.7162 14.3181 18.0842 13.428 18.0842 12.5001C18.0842 11.5722 17.7162 10.6822 17.061 10.0251Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <div></div>
            <div className="dh-left-card-submit-cont">
              <div className="dh-sd-text">
                Task <b style={{ color: "#FFCF33" }}>Submission Details </b>
              </div>
              <div className="dh-sd-det">
                Submission Deadline:{" "}
                <b className="dh-sd-det-text">24 Dec 10:00PM</b>
              </div>
              <div
                className="dt-sd-cta"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSelZEgK0A1cLamORtkgiuJ_gb0TH_kjiSaaH2BMrboTXe55iA/viewform",
                    "_blank"
                  );
                }}
              >
                <img src={submit} alt="submit" />
                <span>Submit Task</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dh-left-top-cont">
          <div className="dh-left-card-top" onClick={() => setTips(!tip)}>
            <img src={tips} alt="tip" />
            <span>
              Tips & Tricks For the{" "}
              <b style={{ color: "#FFCF33" }}>Hackathon</b>
            </span>
          </div>
          <div
            className={`dh-left-card-btm1 ${tip ? "tips-vis" : "tips-non-vis"}`}
          >
            <ol>
              <li style={{ marginTop: "0" }}>
                Understand the Challenge: Read the problem statement and rules
                thoroughly. Define the problem you're solving and set time
                limits for each task.
              </li>
              <li>
                Never underestimate the clock. Efficient time management is
                crucial, so plan wisely.
              </li>
              <li>
                Prioritize UI. Focus more on the ui part and try to complete the
                app with at least the basic requirements.
              </li>
              <li>
                User-Centric Design: Ensure your design addresses their needs
                and provides a seamless experience.
              </li>
              <li>
                Attention to Detail: Pay attention to small details. A polished
                design with meticulous details can set your work apart.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="dh-right-cont">
        <div className="dh-right-card-cont">
          <div className="dh-rc-tp-head-cont">
            <div className="dh-rc-tp-head">
              <img src={leaderboard} alt="leaderboard" />
              <span>
                Hackathon <b style={{ color: "#1ABA5B" }}> Leaderboard</b>
              </span>
            </div>
            <span>Dec 2023</span>
          </div>
          <div className="dh-rc-ranks1">
            {/* <img src={wintr} alt="winner" />
            <div className="dh-rc-ranks-text">
              Results will be Published on
              <br />
              <b style={{ color: "#fff" }}>28th Dec, 2023</b>
            </div> */}

            <div className="win-head">
              <div className="num-cont">
                <div className="rank-num win-sub-head">#</div>
                <div className="win-team-name win-sub-head">Team Name</div>
              </div>
              <div className="win-links win-sub-head">Actions</div>
            </div>
            <div className="new-win-list">
              {loading1 && <div className="dh-loading">Loading...</div>}
              {currwinners.map((winner, i) => (
                <div className="new-win-list-item" key={i}>
                  <div className="li-name-cont">
                    <div
                      className={`li-num ${i === 0 && "li-yell"} ${
                        i === 1 && "li-grey"
                      } ${i === 2 && "li-orange"}`}
                    >
                      #{i + 1}
                    </div>
                    <div>
                      <div
                        className={`li-team-name ${i === 0 && "li-name-yell"} ${
                          i === 1 && "li-name-grey"
                        } ${i === 2 && "li-name-orange"}`}
                      >
                        {winner.teamName}
                      </div>
                      <div className="li-team-mem">{winner.members}</div>
                    </div>
                  </div>
                  <div
                    className="li-vt"
                    onClick={() => window.open(winner.links, "_blank")}
                  >
                    View Task
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dh-right-card-cont1">
          <div className="dh-rc-tp-head-cont1">
            <div className="dh-rc-tp-head">
              <img src={leaderboard} alt="leaderboard" />
              <span>
                Last <b style={{ color: "#1ABA5B" }}> Hackathon Winners</b>
              </span>
            </div>
          </div>
          {loading && <div className="dh-loading">Loading...</div>}
          {!loading && (
            <div className="dh-rc-pw-cont" ref={scrollableDivRef}>
              {prevwinners.map((winner, index) => (
                <div className="dh-rc-prev-card-cont" key={index}>
                  <div className="dh-rc-prev-abs-date">{winner.month}</div>
                  <div className="dh-list-cont">
                    <div className="dh-list-tn">{winner.teamName}</div>

                    <ul>
                      {winner.members.split(",").map((name, ind) => (
                        <li key={ind}>{name}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={winner.link}
                    style={{ width: "100%" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="dh-view-cta">View Task</div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashhack;

import React, { useEffect, useState } from "react";
import "./MainCont.css";
// import vid from "../Assests/vid.svg";
import fire from "../Assests/fire.png";
import file from "../Assests/file.png";
import Mcbtm from "./Mcbtm";
import StreakCalendar from "./StreakCalendar";
const MainCont = ({ user, tasks }) => {
  const key = tasks.length > 0 ? Object.keys(tasks[0])[0] : "task1";
  const [st, setSt] = useState(user ? user.streakData.streak : 0);
  // console.log(user);
  useEffect(() => {
    if (user) {
      setSt(user.streakData.streak);
      const darr = user.streakData.streakDates;
      if (
        new Date().getDate() - new Date(darr[darr.length - 1]).getDate() >
        1
      ) {
        setSt(0);
      } else if (
        new Date().getDate() - new Date(darr[darr.length - 1]).getDate() ===
        0
      ) {
        const timeDifference = new Date() - new Date(darr[darr.length - 1]);
        if (timeDifference < 300000) {
          setSt(user.streakData.streak - 1);
        }
      }
    }
  }, [user]);

  return (
    <div className="mc-cont">
      <div className="mc-top">
        <div className="mc-streak-card">
          <div className="mc-streak-top">
            <img src={fire} alt="fire"></img>
            <div className="mc-streak-top-text">
              You Have a Login Streak of &nbsp;
              <b className="st-col">{st} Days</b>!
            </div>
          </div>
          <div className="streak-cal">
            <StreakCalendar
              streakDates={user ? user.streakData.streakDates : []}
            />
          </div>
        </div>

        <div className="mc-top-card">
          <div className="mc-ce-text">Campus Explanation Video</div>
          <div className="mc-vid">
            {/* <img src={vid} alt="video" /> */}
            <iframe
              src="https://www.youtube.com/embed/FEjMybA86jA?si=FhTnE-HNcRF1LEHc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://upskillmafia.com/campus"
            target="_blank"
            className="join-anc"
            rel="noreferrer"
          >
            <div className="mc-join-cont">
              <span>Join Campus</span>
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
          <div className="mc-join-det">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.5" clipPath="url(#clip0_410_1642)">
                <path
                  d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0V0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19975 1.88378 7.99335 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9981 9.5907 13.3653 11.1157 12.2405 12.2405C11.1157 13.3653 9.59071 13.9981 8 14Z"
                  fill="white"
                />
                <path
                  d="M7.69705 6.3636H7.49704C7.23503 6.35716 6.98006 6.44883 6.78212 6.62062C6.58418 6.79242 6.45754 7.03195 6.42704 7.29226C6.4096 7.55268 6.49466 7.8096 6.66407 8.00815C6.83348 8.2067 7.0738 8.33115 7.33371 8.35493V11.4549C7.33371 11.7201 7.43907 11.9745 7.62661 12.162C7.81414 12.3496 8.0685 12.4549 8.33371 12.4549C8.59893 12.4549 8.85329 12.3496 9.04082 12.162C9.22836 11.9745 9.33372 11.7201 9.33372 11.4549V8.00026C9.33372 7.56619 9.16128 7.1499 8.85435 6.84297C8.54741 6.53603 8.13112 6.3636 7.69705 6.3636Z"
                  fill="white"
                />
                <path
                  d="M7.88717 5.64445C8.11343 5.64445 8.33461 5.57735 8.52274 5.45165C8.71087 5.32594 8.8575 5.14727 8.94409 4.93824C9.03068 4.7292 9.05333 4.49918 9.00919 4.27726C8.96505 4.05535 8.85609 3.85151 8.6961 3.69152C8.53611 3.53152 8.33227 3.42257 8.11035 3.37843C7.88844 3.33429 7.65842 3.35694 7.44938 3.44353C7.24034 3.53011 7.06167 3.67674 6.93596 3.86487C6.81026 4.053 6.74316 4.27418 6.74316 4.50045C6.74308 4.6507 6.77261 4.7995 6.83007 4.93834C6.88753 5.07718 6.97179 5.20332 7.07804 5.30957C7.18429 5.41582 7.31044 5.50008 7.44927 5.55754C7.58811 5.615 7.73691 5.64453 7.88717 5.64445Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_410_1642">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>
              Join the upskill mafia campus and find new study buddies to
              connect with!
            </span>
          </div>
        </div>

        <div className="mc-task-cont">
          <div className="mc-tc-top">
            <div className="mc-file-cont">
              <img src={file} alt="file" />
              <span>Your Group Task!</span>
            </div>
            <div className="mc-tc-cont">
              <span>Progress</span>
              <span>
                {`Tasks Completed: ${tasks.length}/14`}
                
              </span>
              <div className="prog-bar">
                <div
                  className="prog-bar-active"
                  style={{ width: `${(tasks.length / 14) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mc-tc-btm">
            <div className="mc-ls-cont">
              <span>Last Submission</span>
              <div className="mc-ls">
                {tasks.length > 0 && (
                  <>
                  
                    {" "}
                    <div className="mc-ls-sub">
                      <div className="mc-ls-head">
                        {Object.keys(tasks[0])[0]}
                      </div>
                      <div className="mc-ls-text">
                        {tasks[0][key].name}
                      </div>
                      <div className="mc-ls-text cal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_443_1737)">
                            <path
                              d="M9.25 1.5H9V1.25C9 1.05109 8.92098 0.860322 8.78033 0.71967C8.63968 0.579018 8.44891 0.5 8.25 0.5V0.5C8.05109 0.5 7.86032 0.579018 7.71967 0.71967C7.57902 0.860322 7.5 1.05109 7.5 1.25V1.5H4.5V1.25C4.5 1.05109 4.42098 0.860322 4.28033 0.71967C4.13968 0.579018 3.94891 0.5 3.75 0.5V0.5C3.55109 0.5 3.36032 0.579018 3.21967 0.71967C3.07902 0.860322 3 1.05109 3 1.25V1.5H2.75C2.02065 1.5 1.32118 1.78973 0.805456 2.30546C0.289731 2.82118 0 3.52065 0 4.25L0 9.75C0 10.4793 0.289731 11.1788 0.805456 11.6945C1.32118 12.2103 2.02065 12.5 2.75 12.5H9.25C9.97935 12.5 10.6788 12.2103 11.1945 11.6945C11.7103 11.1788 12 10.4793 12 9.75V4.25C12 3.52065 11.7103 2.82118 11.1945 2.30546C10.6788 1.78973 9.97935 1.5 9.25 1.5ZM9.25 11H2.75C2.41848 11 2.10054 10.8683 1.86612 10.6339C1.6317 10.3995 1.5 10.0815 1.5 9.75V5.5H10.5V9.75C10.5 10.0815 10.3683 10.3995 10.1339 10.6339C9.89946 10.8683 9.58152 11 9.25 11Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_443_1737">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>23 Dec, 2023</p>
                      </div>
                    </div>
                    <a href={tasks[0][key].link ? tasks[0][key].link : tasks[0][key].file ? tasks[0][key].file: ""}> 
                      <span>View</span>
                    </a>
                  </>
                )}
                {tasks.length === 0 && (
                  <div className="mc-ls-head" style={{ fontSize: "14px" }}>
                    Your Last Submissions will be Shown here
                  </div>
                )}
              </div>
            </div>
            <div
              className="mc-tc-btm-head"
              onClick={() => {
                alert(
                  "No Submissions Available....Wait for new Tasks to Go Live"
                );
              }}
            >
              View All Submissions
            </div>
          </div>
        </div>
      </div>
      <div className="mc-btm">
        <Mcbtm />
      </div>
    </div>
  );
};

export default MainCont;

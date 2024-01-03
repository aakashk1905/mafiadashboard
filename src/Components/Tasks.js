import React from "react";
import "./Tasks.css";
import progressimg from "../Assests/progressimg.png";
import lbavatar from "../Assests/lbavatar.png";
import totalt from "../Assests/totalt.png";
import donet from "../Assests/donet.png";
import remt from "../Assests/remt.png";
import lockedlvl from "../Assests/lockedlvl.svg";
import lock from "../Assests/lock.svg";
const Tasks = ({ tasks, user, tasksLoading }) => {
  //   console.log(user);
  const length = Object.keys(tasks).length;
  const key = length > 0 ? Object.keys(tasks)[length - 1] : "task1";

  function datestr(inputDateString) {
    const inputDate = new Date(inputDateString);

    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-GB", options);

    return formattedDate;
  }
  return (
    <div className="tasks-cont">
      <div className="tasks-left-cont">
        <div className="tasks-left-head">
          <img src={progressimg} alt="progressimg" />
          <span>
            Your Task <b style={{ color: "#1ABA5B" }}>Progress</b>
          </span>
        </div>
        <div className="tasks-lists">
          <div className="task-list-head">
            <div className="task-head-sub-cont">
              <div className="task-head-info">No.</div>
              <div className="task-head-info">Task Name</div>
            </div>
            <div className="task-head-sub-cont">
              <div className="task-head-info">Submission Date</div>
              <div className="task-head-info w112 ">Actions</div>
            </div>
          </div>
          <div className="tlist-cont">
            {Array.from({ length: 14 }, (_, index) => (
              <div
                key={index}
                className={`task-list-head task-list ${
                  index !== 0 ? "task-list-bd " : ""
                } ${
                  tasks.hasOwnProperty(`task${index + 1}`)
                    ? "task-list-done"
                    : ""
                }`}
              >
                <div className="task-head-sub-cont">
                  {tasks.hasOwnProperty(`task${index + 1}`) && (
                    <div className="task-num">{index + 1}</div>
                  )}
                  {!tasks.hasOwnProperty(`task${index + 1}`) && (
                    <img
                      className="task-head-img"
                      src={lockedlvl}
                      alt="lockedlvl"
                    />
                  )}
                  <div className="task-head-info">{"Task " + (index + 1)}</div>
                </div>
                <div className="task-head-sub-cont">
                  <div className="task-head-info ts-dt-cont">
                    {tasks.hasOwnProperty(`task${index + 1}`)
                      ? datestr(tasks[`task${index + 1}`].dos)
                      : "-"}
                  </div>
                  <div
                    className="task-view-t"
                    onClick={() => {
                      if (tasks.hasOwnProperty(`task${index + 1}`))
                        window.open(
                          tasks[key].link
                            ? tasks[key].link
                            : tasks[key].file
                            ? tasks[key].file
                            : "",
                          "_blank"
                        );
                    }}
                  >
                    View Task
                    {!tasks.hasOwnProperty(`task${index + 1}`) && (
                      <div className="lockabs">
                        <img src={lock} alt="lock" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tasks-right-cont">
        <div className="tr-top-cont">
          <div className="tr-name-cont">
            <img src={lbavatar} alt="lbavatar" />
            <div className="tr-name-inner">
              <div className="tr-name">{user ? user.name : "USER"}</div>
              <div className="tr-email-cont">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_741_2396)">
                    <path
                      d="M12.3333 0.666992H3.66667C2.69453 0.668051 1.76252 1.0547 1.07511 1.7421C0.387707 2.42951 0.00105878 3.36152 0 4.33366L0 11.667C0.00105878 12.6391 0.387707 13.5711 1.07511 14.2585C1.76252 14.946 2.69453 15.3326 3.66667 15.3337H12.3333C13.3055 15.3326 14.2375 14.946 14.9249 14.2585C15.6123 13.5711 15.9989 12.6391 16 11.667V4.33366C15.9989 3.36152 15.6123 2.42951 14.9249 1.7421C14.2375 1.0547 13.3055 0.668051 12.3333 0.666992ZM12.3333 2.66699C12.7376 2.66834 13.1274 2.81802 13.4287 3.08766L9.09533 7.42099C8.80101 7.7021 8.40967 7.85896 8.00267 7.85896C7.59567 7.85896 7.20432 7.7021 6.91 7.42099L2.57667 3.08766C2.87656 2.81924 3.2642 2.66964 3.66667 2.66699H12.3333ZM12.3333 13.3337H3.66667C3.22464 13.3337 2.80072 13.1581 2.48816 12.8455C2.17559 12.5329 2 12.109 2 11.667V5.34499L5.49267 8.83766C5.82184 9.16697 6.21267 9.42821 6.64283 9.60644C7.07299 9.78467 7.53405 9.87641 7.99967 9.87641C8.46529 9.87641 8.92635 9.78467 9.35651 9.60644C9.78666 9.42821 10.1775 9.16697 10.5067 8.83766L14 5.34499V11.667C14 12.109 13.8244 12.5329 13.5118 12.8455C13.1993 13.1581 12.7754 13.3337 12.3333 13.3337Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_741_2396">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="tr-email">
                  {user ? user.email : "user@email.com"}
                </span>
              </div>
            </div>
          </div>
          <div className="hr"></div>

          <div className="tsk-det-cont">
            <div className="tr-name-cont1">
              <img src={totalt} alt="lbavatar" />
              <div className="tr-name-inner">
                <div className="tr-email-cont tr-email">Total Tasks</div>
                <div className="tr-name">14</div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="tr-name-cont1">
              <img src={donet} alt="lbavatar" />
              <div className="tr-name-inner">
                <div className="tr-email-cont tr-email">Tasks Done</div>
                <div className="tr-name">{length}</div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="tr-name-cont1">
              <img src={remt} alt="lbavatar" />
              <div className="tr-name-inner">
                <div className="tr-email-cont tr-email">Tasks Left</div>
                <div className="tr-name">{14 - length}</div>
              </div>
            </div>
          </div>
          <div className="hr"></div>

          <div className="mc-ls-cont">
            <span>Last Submission</span>
            <div className="mc-ls">
              {!tasksLoading && length > 0 && (
                <>
                  {" "}
                  <div className="mc-ls-sub">
                    <div className="mc-ls-head">{key}</div>
                    <div className="mc-ls-text">{tasks[key].name}</div>
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
                      <p>{datestr(tasks[key].dos)}</p>
                    </div>
                  </div>
                  <a
                    href={
                      tasks[key].link
                        ? tasks[key].link
                        : tasks[key].file
                        ? tasks[key].file
                        : ""
                    }
                  >
                    <span>View</span>
                  </a>
                </>
              )}
              {!tasksLoading && length === 0 && (
                <div className="mc-ls-head" style={{ fontSize: "14px" }}>
                  PLease Submit Your task to see Here
                </div>
              )}
              {tasksLoading && (
                <div className="mc-ls-head" style={{ fontSize: "14px" }}>
                  Loading Tasks...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;

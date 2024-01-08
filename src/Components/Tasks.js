import React, { useState } from "react";
import "./Tasks.css";
import progressimg from "../Assests/progressimg.png";
import lbavatar from "../Assests/lbavatar.png";
import totalt from "../Assests/totalt.png";
import donet from "../Assests/donet.png";
import remt from "../Assests/remt.png";
import fb_mentor from "../Assests/fb-mentor.png";
import lockedlvl from "../Assests/lockedlvl.svg";
import lock from "../Assests/lock.svg";

const Tasks = ({ tasks, user, tasksLoading }) => {
  const [feedbackpopup, setFeedbackPopup] = useState(false);
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
      {feedbackpopup && (
        <div className="get-fb-out-cont">
          <div className="get-fb-cont">
            <div className="fbm-img">
              <img src={fb_mentor} alt="fb-mentor" />
              <svg
                onClick={() => setFeedbackPopup(false)}
                className="fb-mentor-abs-cross"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M17.6517 14.9999L22.5004 10.1461C22.8152 9.78835 22.982 9.3241 22.9667 8.84776C22.9515 8.37143 22.7555 7.91876 22.4185 7.58177C22.0815 7.24478 21.6289 7.04876 21.1525 7.03355C20.6762 7.01834 20.212 7.18509 19.8542 7.4999L15.0004 12.3486L10.1379 7.4849C9.96374 7.31073 9.75697 7.17258 9.52941 7.07832C9.30185 6.98406 9.05796 6.93555 8.81165 6.93555C8.56534 6.93555 8.32145 6.98406 8.09389 7.07832C7.86633 7.17258 7.65957 7.31073 7.4854 7.4849C7.31124 7.65906 7.17308 7.86583 7.07882 8.09339C6.98456 8.32094 6.93605 8.56484 6.93605 8.81115C6.93605 9.05745 6.98456 9.30135 7.07882 9.52891C7.17308 9.75647 7.31124 9.96323 7.4854 10.1374L12.3492 14.9999L7.5004 19.8524C7.31024 20.0224 7.15676 20.2294 7.04936 20.4607C6.94195 20.6921 6.88287 20.9429 6.87573 21.1978C6.8686 21.4528 6.91356 21.7065 7.00786 21.9435C7.10216 22.1805 7.24382 22.3958 7.42417 22.5761C7.60453 22.7565 7.81978 22.8981 8.05677 22.9924C8.29376 23.0867 8.54749 23.1317 8.80245 23.1246C9.05741 23.1174 9.30824 23.0583 9.53958 22.9509C9.77092 22.8435 9.97792 22.6901 10.1479 22.4999L15.0004 17.6511L19.8479 22.4999C20.1996 22.8516 20.6767 23.0492 21.1742 23.0492C21.6716 23.0492 22.1487 22.8516 22.5004 22.4999C22.8521 22.1482 23.0498 21.6711 23.0498 21.1736C23.0498 20.6762 22.8521 20.1991 22.5004 19.8474L17.6517 14.9999Z"
                  fill="#FF5A5A"
                />
              </svg>
            </div>
            <div className="fb-popup-inner">
              <div>
                Seek feedback from your{" "}
                <b style={{ color: "#FFCF33" }}>Mentor</b> on campus Between{" "}
                <b style={{ color: "#FFCF33" }}>8PM To 11PM</b>{" "}
              </div>
              <div className="mn-cont">
                <div className="mentor-cont-pop">
                  <div className="mn-head">
                    Mentor Name: <b className="mn-text">Mentor Kanchan</b>
                  </div>
                  <div className="mn-head">
                    Languages: <b className="mn-text">English,Hindi</b>
                  </div>
                </div>
                <div className="mentor-cont-pop">
                  <div className="mn-head">
                    Mentor Name: <b className="mn-text">Mentor Uday</b>
                  </div>
                  <div className="mn-head">
                    Languages: <b className="mn-text">English,Hindi,Telugu</b>
                  </div>
                </div>
                {/* <div className="mentor-cont-pop">
                  <div className="mn-head">
                    Mentor Name: <b className="mn-text">Mentor Aravind</b>
                  </div>
                  <div className="mn-head">
                    Languages: <b className="mn-text">English,Tamil</b>
                  </div>
                </div>
                <div className="mentor-cont-pop">
                  <div className="mn-head">
                    Mentor Name: <b className="mn-text">Mentor Sarthak</b>
                  </div>
                  <div className="mn-head">
                    Languages: <b className="mn-text">English,Hindi</b>
                  </div>
                </div> */}
              </div>
              <div
                className="mc-join-cont"
                onClick={() =>
                  window.open("https://upskillmafia.com/campus", "_blank")
                }
              >
                Join Campus
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
            </div>
          </div>
        </div>
      )}
      <div className="tasks-left-cont">
        <div className="tasks-left-head">
          <img src={progressimg} alt="progressimg" />
          <span>
            Your Task <b style={{ color: "#1ABA5B" }}>Progress</b>
          </span>
        </div>
        <div className="task-info-cont">
          <div className="task-info">
            <div className="ti-img-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.1681 5.33923C14.476 4.48158 13.4323 3.98401 12.3301 3.98633H10.9766L11.0363 3.63564C11.28 2.20701 10.3195 0.851358 8.89084 0.60767C8.73366 0.580858 8.57434 0.56842 8.41491 0.570545C7.41316 0.565326 6.49416 1.12558 6.03988 2.01842L5.03566 3.98633H3.65287C1.63637 3.98855 0.0021875 5.6227 0 7.63923V10.96C0.0021875 12.9766 1.63637 14.6107 3.65287 14.6129H11.6281C13.3518 14.6067 14.8388 13.4015 15.202 11.7165L15.904 8.3957C16.1343 7.31801 15.8637 6.19398 15.1681 5.33923ZM1.99247 10.96V7.63923C1.99247 6.72223 2.73584 5.97883 3.65287 5.97883H4.64913V12.6204H3.65287C2.73587 12.6204 1.99247 11.877 1.99247 10.96ZM13.9547 7.98326L13.252 11.3041C13.0872 12.0699 12.4114 12.6177 11.6281 12.6205H6.64159V5.22233L7.8145 2.92367C7.93881 2.69098 8.18594 2.55064 8.44944 2.56305C8.79862 2.56326 9.08153 2.84655 9.08131 3.19573C9.08128 3.23098 9.07831 3.26617 9.07244 3.30092L8.61616 5.97883H12.3301C13.2471 5.97873 13.9906 6.72205 13.9907 7.63905C13.9907 7.75473 13.9786 7.87008 13.9547 7.98326Z"
                  fill="#FED12E"
                />
              </svg>
            </div>
            <div>Get FeedBack</div>
          </div>
          <div className="task-info">
            <div className="ti-img-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M13.4389 4.18191C12.0223 1.9963 9.60384 0.667013 6.9994 0.642578C4.39498 0.667013 1.97647 1.9963 0.559892 4.18191C-0.186631 5.27748 -0.186631 6.7183 0.559892 7.8139C1.97567 10.0009 4.39432 11.3315 6.99942 11.3568C9.60384 11.3323 12.0223 10.003 13.439 7.81742C14.187 6.72102 14.187 5.27828 13.4389 4.18191ZM11.9894 6.82058C10.9079 8.53602 9.02727 9.5826 6.9994 9.59764C4.97155 9.58263 3.09092 8.53602 2.00937 6.82058C1.6722 6.32522 1.6722 5.67408 2.00937 5.17875C3.0909 3.46331 4.97152 2.41673 6.9994 2.40169C9.02724 2.4167 10.9079 3.46331 11.9894 5.17875C12.3266 5.67408 12.3266 6.32522 11.9894 6.82058Z"
                  fill="white"
                />
                <path
                  d="M6.99977 8.34524C8.29514 8.34524 9.34524 7.29514 9.34524 5.99977C9.34524 4.7044 8.29514 3.6543 6.99977 3.6543C5.7044 3.6543 4.6543 4.7044 4.6543 5.99977C4.6543 7.29514 5.7044 8.34524 6.99977 8.34524Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>View Task</div>
          </div>
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
                  <div className="act-cont">
                    <div
                      className={`task-view-t ${
                        tasks.hasOwnProperty(`task${index + 1}`) &&
                        (tasks[`task${index + 1}`].status === "approved"
                          ? "vt-approved"
                          : tasks[`task${index + 1}`].status === "redo"
                          ? "vt-redo"
                          : "")
                      }`}
                      onClick={() => {
                        if (tasks.hasOwnProperty(`task${index + 1}`)) {
                          if (tasks[`task${index + 1}`].status === "approved") {
                            alert("Task is Already Approved");
                          } else {
                            setFeedbackPopup(true);
                          }
                        }
                      }}
                    >
                      {tasks.hasOwnProperty(`task${index + 1}`)
                        ? tasks[`task${index + 1}`].status || "Get FeedBack"
                        : "Get Feedback"}

                      {!tasks.hasOwnProperty(`task${index + 1}`) && (
                        <div className="lockabs">
                          <img src={lock} alt="lock" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`task-view-t-icon ${
                        tasks.hasOwnProperty(`task${index + 1}`) &&
                        tasks[`task${index + 1}`].status === "approved"
                          ? "vt-approved"
                          : ""
                      }`}
                      onClick={() => {
                        if (tasks.hasOwnProperty(`task${index + 1}`)) {
                          if (tasks[`task${index + 1}`].status === "approved") {
                            alert("Task is Already Approved");
                          } else {
                            setFeedbackPopup(true);
                          }
                        }
                      }}
                    >
                      {tasks.hasOwnProperty(`task${index + 1}`) ? (
                        tasks[`task${index + 1}`].status === "approved" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                          >
                            <path
                              d="M5.16613 11.7748C4.71195 11.775 4.27638 11.5944 3.9555 11.273L0.295374 7.61425C-0.098458 7.22029 -0.098458 6.58169 0.295374 6.18773C0.689332 5.7939 1.32794 5.7939 1.72189 6.18773L5.16613 9.63196L14.2781 0.519983C14.6721 0.126151 15.3107 0.126151 15.7046 0.519983C16.0985 0.913941 16.0985 1.55255 15.7046 1.9465L6.37675 11.273C6.05587 11.5944 5.6203 11.775 5.16613 11.7748Z"
                              fill="#1ABA5B"
                            />
                          </svg>
                        ) : tasks[`task${index + 1}`].status === "redo" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_807_2113)">
                              <path
                                d="M10.8667 10.005C11.0542 10.1925 11.3085 10.2978 11.5737 10.2978C11.8388 10.2978 12.0931 10.1925 12.2807 10.005L15.4313 6.85504C15.7973 6.48833 16.0028 5.99143 16.0028 5.47337C16.0028 4.95531 15.7973 4.45841 15.4313 4.0917L12.2773 0.941703C12.1864 0.841067 12.0759 0.759994 11.9526 0.703417C11.8293 0.646841 11.6957 0.615944 11.5601 0.612607C11.4245 0.60927 11.2896 0.633563 11.1637 0.684008C11.0377 0.734452 10.9234 0.809993 10.8276 0.906033C10.7318 1.00207 10.6565 1.1166 10.6063 1.24266C10.5562 1.36871 10.5322 1.50365 10.5359 1.63926C10.5395 1.77487 10.5707 1.90832 10.6276 2.03149C10.6845 2.15466 10.7658 2.26497 10.8667 2.3557L13.0213 4.46704H3.546C2.60592 4.46827 1.7047 4.84226 1.03996 5.507C0.375227 6.17174 0.00123474 7.07296 0 8.01304L0 12.467C0.00105871 13.407 0.374924 14.3081 1.03957 14.9728C1.70422 15.6374 2.60538 16.0113 3.54533 16.0124H12.4547C12.7199 16.0124 12.9742 15.907 13.1618 15.7195C13.3493 15.5319 13.4547 15.2776 13.4547 15.0124C13.4547 14.7472 13.3493 14.4928 13.1618 14.3053C12.9742 14.1177 12.7199 14.0124 12.4547 14.0124H3.54533C3.13565 14.0118 2.74289 13.8489 2.4532 13.5592C2.16351 13.2695 2.00053 12.8767 2 12.467V8.01304C2.00035 7.60312 2.16335 7.21009 2.4532 6.92024C2.74306 6.63038 3.13608 6.46739 3.546 6.46704H12.9853L10.8667 8.59104C10.6792 8.77856 10.5739 9.03287 10.5739 9.29804C10.5739 9.5632 10.6792 9.81751 10.8667 10.005Z"
                                fill="#FF4747"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_807_2113">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_798_3569)">
                              <path
                                d="M15.6681 5.33923C14.976 4.48158 13.9323 3.98401 12.8301 3.98633H11.4766L11.5363 3.63564C11.78 2.20701 10.8195 0.851358 9.39084 0.60767C9.23366 0.580858 9.07434 0.56842 8.91491 0.570545C7.91316 0.565326 6.99416 1.12558 6.53988 2.01842L5.53566 3.98633H4.15287C2.13637 3.98855 0.502188 5.6227 0.5 7.63923V10.96C0.502188 12.9766 2.13637 14.6107 4.15287 14.6129H12.1281C13.8518 14.6067 15.3388 13.4015 15.702 11.7165L16.404 8.3957C16.6343 7.31801 16.3637 6.19398 15.6681 5.33923ZM2.49247 10.96V7.63923C2.49247 6.72223 3.23584 5.97883 4.15287 5.97883H5.14913V12.6204H4.15287C3.23587 12.6204 2.49247 11.877 2.49247 10.96ZM14.4547 7.98326L13.752 11.3041C13.5872 12.0699 12.9114 12.6177 12.1281 12.6205H7.14159V5.22233L8.3145 2.92367C8.43881 2.69098 8.68594 2.55064 8.94944 2.56305C9.29862 2.56326 9.58153 2.84655 9.58131 3.19573C9.58128 3.23098 9.57831 3.26617 9.57244 3.30092L9.11616 5.97883H12.8301C13.7471 5.97873 14.4906 6.72205 14.4907 7.63905C14.4907 7.75473 14.4786 7.87008 14.4547 7.98326Z"
                                fill="#FED12E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_798_3569">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        )
                      ) : (
                        ""
                      )}
                      {!tasks.hasOwnProperty(`task${index + 1}`) && (
                        <div className="lockabs">
                          <img src={lock} alt="lock" />
                        </div>
                      )}
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
                    <div
                      className={`task-view-t-icon `}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M13.9389 4.18191C12.5223 1.9963 10.1038 0.667013 7.4994 0.642578C4.89498 0.667013 2.47647 1.9963 1.05989 4.18191C0.313369 5.27748 0.313369 6.7183 1.05989 7.8139C2.47567 10.0009 4.89432 11.3315 7.49942 11.3568C10.1038 11.3323 12.5223 10.003 13.939 7.81742C14.687 6.72102 14.687 5.27828 13.9389 4.18191ZM12.4894 6.82058C11.4079 8.53602 9.52727 9.5826 7.4994 9.59764C5.47155 9.58263 3.59092 8.53602 2.50937 6.82058C2.1722 6.32522 2.1722 5.67408 2.50937 5.17875C3.5909 3.46331 5.47152 2.41673 7.4994 2.40169C9.52724 2.4167 11.4079 3.46331 12.4894 5.17875C12.8266 5.67408 12.8266 6.32522 12.4894 6.82058Z"
                          fill="white"
                        />
                        <path
                          d="M7.49977 8.34524C8.79514 8.34524 9.84524 7.29514 9.84524 5.99977C9.84524 4.7044 8.79514 3.6543 7.49977 3.6543C6.2044 3.6543 5.1543 4.7044 5.1543 5.99977C5.1543 7.29514 6.2044 8.34524 7.49977 8.34524Z"
                          fill="white"
                        />
                      </svg>
                      {!tasks.hasOwnProperty(`task${index + 1}`) && (
                        <div className="lockabs">
                          <img src={lock} alt="lock" />
                        </div>
                      )}
                    </div>
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
                  <g clipPath="url(#clip0_741_2396)">
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

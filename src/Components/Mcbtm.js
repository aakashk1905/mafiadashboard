import React, { useEffect, useState } from "react";
import "./Mcbtm.css";
import cal from "../Assests/cal.png";
import aim from "../Assests/aim.png";
import winnertro from "../Assests/winnertro.png";
import CountdownTimer from "./CountDownTimer";
const Mcbtm = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbysy-jjJAkAYIHnjgLbTITSaC0hWEDZAU0gYhJC8Yi4xWdJnTvRSX0BDN223OZACotHHw/exec"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const targetDate = new Date("December 22, 2023 18:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="mc-btm-cont">
      <div className="mc-daily-outer-cont">
        {/* <div className="mc-daily-cont">
          <div className="mc-daily-ch-cont">
            <div className="aim-cont">
              <img src={aim} alt="aim" />
              <span>
                <b style={{ color: "#FFCF33" }}>DAILY </b>UI Challenge!
              </span>
            </div>
            <div className="daily-task-cont">
              <div className="dtc-head-cont">
                <div className="dtc-head">Today’s Challenge</div>
                <div className="dtc-text">
                  Create a mobile app for upskill mafia which containw a
                  community forum and a social media platform for beginner ui ux
                  designers
                </div>
              </div>
              <div className="dtc-cta">View Full Task Document</div>
            </div>
          </div>
          <div className="mc-daily-win-cont">
            <div className="aim-cont">
              <img src={aim} alt="aim" />
              <span>
                <b style={{ color: "#FFCF33" }}>DAILY </b>UI Challenge!
              </span>
            </div>
            <div className="mc-winner-cont">
              <div className="mcw-name">
                <span>Jatin Pawar</span>
                <div className="mcw-view">View work</div>
              </div>
              <div className="mcw-view-all">View All Submissions</div>
            </div>
            <div className="mcw-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_410_1804)">
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0V0ZM10 17.5C8.51664 17.5 7.0666 17.0601 5.83323 16.236C4.59986 15.4119 3.63857 14.2406 3.07091 12.8701C2.50325 11.4997 2.35473 9.99168 2.64411 8.53682C2.9335 7.08197 3.64781 5.74559 4.6967 4.6967C5.7456 3.64781 7.08197 2.9335 8.53683 2.64411C9.99168 2.35472 11.4997 2.50325 12.8701 3.0709C14.2406 3.63856 15.4119 4.59985 16.236 5.83322C17.0601 7.06659 17.5 8.51664 17.5 10C17.4978 11.9884 16.7069 13.8948 15.3009 15.3009C13.8948 16.7069 11.9885 17.4978 10 17.5Z"
                    fill="white"
                  />
                  <path
                    d="M8.74977 9.21239L6.74977 10.4624C6.61059 10.5495 6.48994 10.6632 6.39472 10.797C6.2995 10.9308 6.23157 11.082 6.19481 11.242C6.15805 11.4021 6.15318 11.5678 6.18049 11.7297C6.20779 11.8916 6.26673 12.0466 6.35393 12.1857C6.44107 12.3249 6.55477 12.4455 6.68855 12.5408C6.82233 12.636 6.97355 12.7039 7.13359 12.7407C7.29363 12.7774 7.45934 12.7823 7.62126 12.755C7.78318 12.7277 7.93813 12.6688 8.07727 12.5816L10.4681 11.0816C10.708 10.9312 10.9056 10.7223 11.0424 10.4744C11.1791 10.2266 11.2505 9.94797 11.2498 9.66489V6.47656C11.2498 6.14504 11.1181 5.8271 10.8837 5.59268C10.6492 5.35826 10.3313 5.22656 9.99977 5.22656C9.66825 5.22656 9.3503 5.35826 9.11588 5.59268C8.88146 5.8271 8.74977 6.14504 8.74977 6.47656V9.21239Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_410_1804">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Next Challenge in <b style={{ color: "#fff" }}>12:00:23 hrs</b>
              </span>
            </div>
          </div>
        </div> */}

        <div className="mc-daily-cont">
          <div className="mc-daily-ch-cont">
            <div className="aim-cont">
              <img src={aim} alt="aim" />
              <span>
                <b style={{ color: "#FFCF33" }}>Weekly </b>UI Challenge!
              </span>
            </div>
            <div className="daily-task-cont">
              <div className="dtc-head-cont">
                <div className="dtc-head"> Challenge Instructions</div>
                <div className="dtc-text">
                  Participate this task in Group of 3-4 members and submit only
                  a single public figma file from a Group.
                </div>
              </div>
              <a
                href="https://upskillmafia.com/weekly-task"
                rel="noreferrer"
                className="join-anc"
                target="_blank"
              >
                <div className="dtc-cta">View Task Document</div>
              </a>
            </div>
          </div>
          <div className="mc-daily-win-cont">
            <div className="aim-cont">
              <img src={winnertro} alt="aim" />
              <span>
                <b style={{ color: "#FFCF33" }}>Last Week </b>Winners!
              </span>
            </div>
            <div className="mc-winner-cont">
              <div className="mcw-name">
                {loading && (
                  <div style={{ color: "#fff" }}>
                    Winner Details will be shown here
                  </div>
                )}
                {!loading && (
                  <>
                    <div className="team-cont">
                      <div className="team-name">
                        {data ? data.team : " Team Name "}
                      </div>
                      <div className="team-members">
                        {data ? data.members : " Team Members"}
                      </div>
                    </div>
                    <a
                      href={`${data ? data.link : ""}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="mcw-view">View work</div>
                    </a>
                  </>
                )}
              </div>
              <div className="mcw-view-all">View All Submissions</div>
            </div>
            <div className="mcw-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_410_1804)">
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0V0ZM10 17.5C8.51664 17.5 7.0666 17.0601 5.83323 16.236C4.59986 15.4119 3.63857 14.2406 3.07091 12.8701C2.50325 11.4997 2.35473 9.99168 2.64411 8.53682C2.9335 7.08197 3.64781 5.74559 4.6967 4.6967C5.7456 3.64781 7.08197 2.9335 8.53683 2.64411C9.99168 2.35472 11.4997 2.50325 12.8701 3.0709C14.2406 3.63856 15.4119 4.59985 16.236 5.83322C17.0601 7.06659 17.5 8.51664 17.5 10C17.4978 11.9884 16.7069 13.8948 15.3009 15.3009C13.8948 16.7069 11.9885 17.4978 10 17.5Z"
                    fill="white"
                  />
                  <path
                    d="M8.74977 9.21239L6.74977 10.4624C6.61059 10.5495 6.48994 10.6632 6.39472 10.797C6.2995 10.9308 6.23157 11.082 6.19481 11.242C6.15805 11.4021 6.15318 11.5678 6.18049 11.7297C6.20779 11.8916 6.26673 12.0466 6.35393 12.1857C6.44107 12.3249 6.55477 12.4455 6.68855 12.5408C6.82233 12.636 6.97355 12.7039 7.13359 12.7407C7.29363 12.7774 7.45934 12.7823 7.62126 12.755C7.78318 12.7277 7.93813 12.6688 8.07727 12.5816L10.4681 11.0816C10.708 10.9312 10.9056 10.7223 11.0424 10.4744C11.1791 10.2266 11.2505 9.94797 11.2498 9.66489V6.47656C11.2498 6.14504 11.1181 5.8271 10.8837 5.59268C10.6492 5.35826 10.3313 5.22656 9.99977 5.22656C9.66825 5.22656 9.3503 5.35826 9.11588 5.59268C8.88146 5.8271 8.74977 6.14504 8.74977 6.47656V9.21239Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_410_1804">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Next Challenge in{" "}
                <b style={{ color: "#fff" }}>
                  <CountdownTimer />
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming-ev">
        <div className="ue-head">
          <img src={cal} alt="cal" />
          <span>Upcoming Events!</span>
        </div>
        {/* <div className="coming-soon">Coming Soon !!!!</div> */}
        <div className="ue-hack-cont">
          <div className="ue-hack-head-cont">
            <img
              src="https://s3-alpha-sig.figma.com/img/1d6a/0d23/11bf5e26b049f6e3610b2d2b513303c6?Expires=1704067200&Signature=XswumM9mYdHySuM7y4KDeSYOwtlv3AYhc15WLj73vTW98-L8UipNlAo9s-rVX6O7EjVWJkCemMm2~kNTxmJ5YSZoXPR9~CFyI8xCnFc2JZwlVoxdLU3PGYSr171hs37KcKUBREQxdxo3Fdr64Gai2UMH70R0vXeRtDTkdLgzTzPQIeMA56BhnaiJ1YYw6Urmz34R82aheqETCbbrb3JJCk9TzRF7UzlCk0vCvgHKcxxX1wR5YQwnDBQOFB2-gqWKXk8fNAWfHZvpfvAxGVD~VcdtQLi9yL8DFK9SquO725wqAL2eS43MVl-OEsv6qy31gYZcvHQxhpoOV9XTmTu3Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Watch-Timer"
            ></img>
            <div className="hack-reg-timer">
              Registration ended
              {/* <b style={{ color: "#fff", display: "inline-block" }}>
                {`${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
              </b> */}
            </div>
          </div>
          <div className="hack-reg-btm-cont">
            <div className="hack-ue-btm">
              <div className="ue-hack-card-head-cont">
                <div className="ue-hack-card-tc">
                  <div className="ue-hack-card-tr">
                    <img src={winnertro} alt="winnerTro" />
                    <span>UI UX Design Hackathon</span>
                  </div>
                  <div className="ue-hack-card-lim">Limited Teams</div>
                </div>
                <div className="ue-hack-card-det">
                  Solve a Design Problem with Team
                </div>
              </div>
              <div className="ue-hack-card-btm-cont">
                <div className="ue-hack-card-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_535_2255)">
                      <path
                        d="M10.7917 1.66667H10.5V1.375C10.5 1.14294 10.4078 0.920376 10.2437 0.756282C10.0796 0.592187 9.85706 0.5 9.625 0.5V0.5C9.39293 0.5 9.17038 0.592187 9.00628 0.756282C8.84219 0.920376 8.75 1.14294 8.75 1.375V1.66667H5.25V1.375C5.25 1.14294 5.15781 0.920376 4.99372 0.756282C4.82962 0.592187 4.60706 0.5 4.375 0.5V0.5C4.14294 0.5 3.92038 0.592187 3.75628 0.756282C3.59219 0.920376 3.5 1.14294 3.5 1.375V1.66667H3.20833C2.35743 1.66667 1.54138 2.00469 0.939699 2.60637C0.33802 3.20805 0 4.0241 0 4.875L0 11.2917C0 12.1426 0.33802 12.9586 0.939699 13.5603C1.54138 14.162 2.35743 14.5 3.20833 14.5H10.7917C11.6426 14.5 12.4586 14.162 13.0603 13.5603C13.662 12.9586 14 12.1426 14 11.2917V4.875C14 4.0241 13.662 3.20805 13.0603 2.60637C12.4586 2.00469 11.6426 1.66667 10.7917 1.66667ZM10.7917 12.75H3.20833C2.82156 12.75 2.45063 12.5964 2.17714 12.3229C1.90365 12.0494 1.75 11.6784 1.75 11.2917V6.33333H12.25V11.2917C12.25 11.6784 12.0964 12.0494 11.8229 12.3229C11.5494 12.5964 11.1784 12.75 10.7917 12.75Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_535_2255">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Fri,22 Dec, 2023</span>
                </div>
                <div className="ue-hack-card-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_535_2258)">
                      <path
                        d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50777 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.998 5.6441 13.2599 3.86479 11.9475 2.55247C10.6352 1.24015 8.8559 0.502007 7 0.5V0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52192 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2485 8.89191 11.6948 10.2264 10.7106 11.2106C9.72638 12.1948 8.39192 12.7485 7 12.75Z"
                        fill="white"
                      />
                      <path
                        d="M6.12513 6.94877L4.72513 7.82377C4.62771 7.88476 4.54325 7.96436 4.4766 8.058C4.40994 8.15164 4.36239 8.2575 4.33666 8.36953C4.31093 8.48155 4.30752 8.59755 4.32663 8.7109C4.34575 8.82424 4.387 8.93271 4.44805 9.0301C4.50904 9.12752 4.58863 9.21198 4.68228 9.27863C4.77592 9.34529 4.88178 9.39284 4.99381 9.41857C5.10583 9.4443 5.22183 9.44771 5.33517 9.4286C5.44852 9.40948 5.55699 9.36823 5.65438 9.30718L7.32796 8.25719C7.49588 8.15196 7.63422 8.00571 7.72996 7.8322C7.82569 7.6587 7.87565 7.46368 7.87513 7.26552V5.03369C7.87513 4.80163 7.78294 4.57907 7.61885 4.41497C7.45475 4.25088 7.23219 4.15869 7.00013 4.15869C6.76806 4.15869 6.54551 4.25088 6.38141 4.41497C6.21732 4.57907 6.12513 4.80163 6.12513 5.03369V6.94877Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_535_2258">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>07:00PM</span>
                </div>
              </div>
            </div>
            {/* <a className="ue-hack-a" href="https://upskillmafia.com/hackathon"> */}
              <div className="hack-reg-ue-cta" onClick={()=>alert("Registration Ended")}>
                Register Now For <b>Free</b>
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcbtm;

import "./ChallengeInfo.css";

const ChallengeInfo = ({ setShowInfo }) => {
  return (
    <div className="challenge-info">
      <div className="chal-head-cont">
        <div className="chal-head-inner-cont">
          <b className="weekly-ui-challenge-container">
            <span>WEEKLY UI Challenge</span>
            <span className="participation-criterion">
              {" "}
              Participation criterion
            </span>
          </b>

          <svg
            onClick={() => setShowInfo(false)}
            className="fi-br-cross-small-icon1"
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
      </div>
      <div className="chal-body-cont">
        <div className="chal-text">
          <ul className="participate-in-a-group-of-mini">
            <li className="less-than-3-member-in-a-team-a">
              <span>{`Participate in a group of minimum `}</span>
              <b className="members">3 members</b>
              <span className="members">.</span>
            </li>
            <li className="less-than-3-member-in-a-team-a">
              <b className="members">Less Than 3 member</b>
              <span className="members">
                {" "}
                in a team are not eligible for the Weekly Challenge.
              </span>
            </li>
            <li className="less-than-3-member-in-a-team-a">
              <span className="members">
                Every new Weekly Challenge will be
              </span>
              <b className="members">{` live on Monday. `}</b>
            </li>
            <li className="less-than-3-member-in-a-team-a">
              <span className="members">{`Last Weekly challenge `}</span>
              <b className="members">RESULTS</b>
              <span className="members">{` will be announced on Tuesday Evening. `}</span>
            </li>
            <li className="less-than-3-member-in-a-team-a">
              <span className="members">{`Submit Only a `}</span>
              <b className="members">SINGLE</b>
              <span className="members">
                {" "}
                task file from a Group before the Announced Deadline.
              </span>
            </li>
            <li className="less-than-3-member-in-a-team-a">
              <span className="members">
                If any design is discovered to be copied and pasted in your
                submissions, your team will be disqualified.
              </span>
            </li>
          </ul>
        </div>
        <div className="chal-cta-cont">
          <div
            className="chal-cta-view"
            onClick={() => alert("Will be live on 1st Jan")}
          >
            View Challenge
          </div>

          <div
            className="chal-cta-submit"
            onClick={() => alert("Submissions Starts after the Task goes Live")}
          >
            Submit Task
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeInfo;

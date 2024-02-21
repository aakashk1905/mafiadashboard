import React, { useState } from "react";
import "./FeedBack.css";
import Cookies from "js-cookie";
const FeedBack = () => {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState(
    (Cookies.get("tasks") && JSON.parse(Cookies.get("tasks"))) || {}
  );
  const [tasksLoading, setTasksLoading] = useState(false);

  const keys = Object.keys(tasks);

  //   localhost:4000

  function datestr(inputDateString) {
    const inputDate = new Date(inputDateString);

    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-GB", options);

    return formattedDate;
  }

  const updateStatus = async (status, sheetname, email1) => {
    // console.log(status, sheetname, email1);
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/user/updatetaskbymail?email=${email1}&sheetname=${sheetname}&status=${status}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data.success) {
        alert("Updated");
        fetchData1();
      } else alert("Failed to update!! Try Again");
    } catch (error) {
      alert("something went wrong....Please try again!!!");
    }
  };

  const fetchData1 = async () => {
    console.log("Fetching data...", search);
    setTasksLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/user/gettaskbymail?email=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTasks(result.tasks);
      setTasksLoading(false);
      Cookies.set("tasks", JSON.stringify(result.tasks), {
        expires: 10 / 1440,
      });
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };

  return (
    <div className="mfb-cont">
      <div className="task-stats-cont" style={{display:"none"}}>
        <div className="task-stat">
          <div className="ts-head">24,385</div>
          <div className="ts-det">Total Tasks</div>
        </div>
        <div className="task-stat">
          <div className="ts-head">24,385</div>
          <div className="ts-det">Total Tasks</div>
        </div>
        <div className="task-stat">
          <div className="ts-head">24,385</div>
          <div className="ts-det">Total Tasks</div>
        </div>
        <div className="task-stat">
          <div className="ts-head">24,385</div>
          <div className="ts-det">Total Tasks</div>
        </div>
      </div>
      <div className="task-details-cont">
        <div className="tdc-header">
          <div className="tdc-header-head">
            Task <b style={{ color: "#FED12E" }}>Submissions</b>
          </div>
          <div className="tdc-search-cont">
            <div className="search-cont-inner">
              <input
                className="tdc-email-inp"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search By Email"
              />
              <div className="search-cta" onClick={fetchData1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.6353 17.871L15.7644 13.9984C18.6608 10.1278 17.871 4.64195 14.0004 1.74551C10.1297 -1.15092 4.6439 -0.361157 1.74747 3.50949C-1.14897 7.38013 -0.359203 12.866 3.51144 15.7624C6.62066 18.0891 10.8911 18.0891 14.0004 15.7624L17.873 19.635C18.3596 20.1216 19.1486 20.1216 19.6353 19.635C20.1219 19.1483 20.1219 18.3593 19.6353 17.8727L19.6353 17.871ZM8.78818 15.015C5.34814 15.015 2.55946 12.2263 2.55946 8.78623C2.55946 5.34618 5.34814 2.55751 8.78818 2.55751C12.2282 2.55751 15.0169 5.34618 15.0169 8.78623C15.0132 12.2247 12.2267 15.0113 8.78818 15.015Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="tdc-list-head-cont">
          <div
            className="tdc-list-head"
            style={{ width: "fit-content", padding: "0 5px" }}
          >
            No.
          </div>
          <div className="tdc-list-head">Student Name</div>
          <div className="tdc-list-head">Task Name</div>
          <div className="tdc-list-head">Submission Date</div>
          <div className="tdc-list-head tdc-act">Actions</div>
        </div>
        <div className="tdc-list-cont">
          {!tasksLoading && keys.length === 0 && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ts-det">
                No Data Available Search By Email or check if Email is Correct
              </div>
            </div>
          )}

          {tasksLoading && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ts-det">Data Loading ...</div>
            </div>
          )}
          {!tasksLoading &&
            keys.length > 0 &&
            keys.map((k, index) => (
              <div className="tdc-list-head-cont li-body" key={index}>
                <div
                  className="tdc-list-head tdc-list-head1"
                  style={{ width: "fit-content", padding: "0 5px" }}
                >
                  {index + 1}
                </div>
                <div className="tdc-list-head tdc-list-head1">
                  {tasks[k].name}
                </div>
                <div className="tdc-list-head tdc-list-head1">{k}</div>
                <div className="tdc-list-head tdc-list-head1">
                  {datestr(tasks[k].dos)}
                </div>
                <div className="tds-action-list">
                  <div
                    className="vt-cont"
                    onClick={() =>
                      window.open(
                        tasks[k].link
                          ? tasks[k].link
                          : tasks[k].file
                          ? tasks[k].file
                          : "",
                        "_blank"
                      )
                    }
                  >
                    View Task
                  </div>
                  <div className="vr"> </div>
                  <div
                    className="tdm-action-cont"
                    onClick={() => {
                      if (tasks[k].status === "approved") {
                        alert("Already Approved");
                      } else updateStatus("approved", k, tasks[k].email);
                    }}
                  >
                    <div className="tdm-action-circle">
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
                    </div>
                    <div className="approve">
                      {tasks[k].status === "approved" ? "Approved" : "Approve"}
                    </div>
                  </div>
                  <div
                    className="tdm-action-cont"
                    onClick={() => {
                      if (tasks[k].status === "approved") {
                        alert("Already Approved");
                      } else updateStatus("redo", k, tasks[k].email);
                    }}
                  >
                    <div className="tdm-action-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_787_2044)">
                          <path
                            d="M10.8667 10.005C11.0542 10.1925 11.3085 10.2978 11.5737 10.2978C11.8388 10.2978 12.0931 10.1925 12.2807 10.005L15.4313 6.85504C15.7973 6.48833 16.0028 5.99143 16.0028 5.47337C16.0028 4.95531 15.7973 4.45841 15.4313 4.0917L12.2773 0.941703C12.1864 0.841067 12.0759 0.759994 11.9526 0.703417C11.8293 0.646841 11.6957 0.615944 11.5601 0.612607C11.4245 0.60927 11.2896 0.633563 11.1637 0.684008C11.0377 0.734452 10.9234 0.809993 10.8276 0.906033C10.7318 1.00207 10.6565 1.1166 10.6063 1.24266C10.5562 1.36871 10.5322 1.50365 10.5359 1.63926C10.5395 1.77487 10.5707 1.90832 10.6276 2.03149C10.6845 2.15466 10.7658 2.26497 10.8667 2.3557L13.0213 4.46704H3.546C2.60592 4.46827 1.7047 4.84226 1.03996 5.507C0.375227 6.17174 0.00123474 7.07296 0 8.01304L0 12.467C0.00105871 13.407 0.374924 14.3081 1.03957 14.9728C1.70422 15.6374 2.60538 16.0113 3.54533 16.0124H12.4547C12.7199 16.0124 12.9742 15.907 13.1618 15.7195C13.3493 15.5319 13.4547 15.2776 13.4547 15.0124C13.4547 14.7472 13.3493 14.4928 13.1618 14.3053C12.9742 14.1177 12.7199 14.0124 12.4547 14.0124H3.54533C3.13565 14.0118 2.74289 13.8489 2.4532 13.5592C2.16351 13.2695 2.00053 12.8767 2 12.467V8.01304C2.00035 7.60312 2.16335 7.21009 2.4532 6.92024C2.74306 6.63038 3.13608 6.46739 3.546 6.46704H12.9853L10.8667 8.59104C10.6792 8.77856 10.5739 9.03287 10.5739 9.29804C10.5739 9.5632 10.6792 9.81751 10.8667 10.005Z"
                            fill="#FF4747"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_787_2044">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="approve">Redo</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

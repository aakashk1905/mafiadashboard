import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import error from "./Assests/error.gif";

function RedirectComponent2() {
  const width = window.innerWidth;

  // useEffect(() => {
  //   if (width >= 800) {
  //     const email = Cookies.get("user_email");
  //     if (email) {
  //       const fetchData = async () => {
  //         try {
  //           const response = await fetch(
  //             `https://api.upskillmafia.com/api/v1/user/update-streak?email=${email}`,
  //             {
  //               method: "POST",
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           );
  //           const data = await response.json();

  //           // Check if fetch was successful (you might need to adjust this condition based on your API response structure)
  //           if (data.success) {
  //             window.location.href =
  //               "https://cosmos.video/v/6qqo-919q-tsug/office/r/stage";
  //           }
  //         } catch (error) {
  //           alert("something went wrong....Please try again!!!");
  //         }
  //       };

  //       fetchData();
  //     }
  //   }
  // }, [width]);
  // if (width < 800) {
  return (
    <>
      <div className="mobile-error-cont">
        <img src={error} alt="error" />
        <h1 className="mobile-error">
          Please Open The Link From Your{" "}
          <span style={{ color: "yellow" }}>Laptop or PC</span>
        </h1>
        <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
      </div>
    </>
  );
  // }
  // return null;
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);

  useEffect(() => {
    const email = Cookies.get("user_email");
    const queryParams = new URLSearchParams(window.location.search);
    const email1 = queryParams.get("email");
    const id = queryParams.get("key");
    const fetchData = async () => {
      try {
        if (!email && email1 && id) {
          const response = await fetch(
            "https://api.upskillmafia.com/api/v1/user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email1,
                password: id,
              }),
            }
          );

          const data = await response.json();

          if (data.user) {
            Cookies.set("user_name", data.user.name);
            Cookies.set("user_email", data.user.email);
            window.location.reload();
          } else {
            setShowSign(true);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    fetchData();
    if (!email) {
      setShowSign(true);
    }
  }, []);

  if (showSign)
    return <Register setShowLogin={setShowLogin} setShowSign={setShowSign} />;

  if (showLogin)
    return <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard">
          <Route path="" exact element={<Main />} />
          <Route path="dashboard/stage" exact element={<RedirectComponent2 />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

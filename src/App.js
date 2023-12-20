import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

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
            setShowLogin(true);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    fetchData();
    if (!email) {
      setShowLogin(true);
    }
  }, []);

  if (showLogin)
   return <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />;
  if (showSign)
    return <Register setShowLogin={setShowLogin} setShowSign={setShowSign} />;

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard">
              <Route path="" element={<Main />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

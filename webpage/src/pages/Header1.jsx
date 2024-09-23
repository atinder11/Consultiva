import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../assets/css/pagecss/Header1.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header1 = () => {
  const [userdata, setUserdata] = useState({});
const getUser = async () => {
  try {
    const response = await axios.get("https://consultivaapi.vercel.app/login/success", {
      withCredentials: true,
    });
    if (response.data.user) {
      setUserdata(response.data.user);
    }
  } catch (error) {
    console.log("User not authenticated, but staying on dashboard.", error);
    // Optionally, you can set a flag to show an error message or handle the user state accordingly
  }
};
  const logout = () => {
    window.open("https://consultivaapi.vercel.app/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <Link to="/dashboard">
            <h1 className="header1_h1">
              <span>Hi</span> {userdata?.displayName || "Guest"}
            </h1>
          </Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Health Tool</span>
                <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/bmi" target="_blank">BMI Calculator</Link>
                </li>
                <li>
                  <Link to="/duedate" target="_blank">Due Date Calculator</Link>
                </li>
                <li>
                  <Link to="/smokingcost" target="_blank">Cost of Smoking Calculator</Link>
                </li>
              </ul>
            </li>

            {userdata && userdata.displayName ? (
              <>
                <li>
                  <button onClick={logout} style={{ border: "none", background: "none" }}>
                    Logout
                  </button>
                </li>
                <li>
                  <img
                    src={userdata?.image}
                    style={{ width: "50px", borderRadius: "50%" }}
                    alt="profile"
                  />
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header1;

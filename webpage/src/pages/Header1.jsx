import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../assets/css/pagecss/Header1.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header1 = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/sucess", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logoout
  const logout = () => {
    window.open("http://localhost:8000/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Link to="/dashboard">
              <h1 className="header1_h1">
                <span>Hi</span> {userdata?.displayName}
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
                    <Link to="/bmi" target="_blank">
                      BMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/duedate" target="_blank">
                      Due Date Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/smokingcost" target="_blank">
                      Cost of Smoking Calculator
                    </Link>
                  </li>
                </ul>
              </li>

              {Object?.keys(userdata)?.length > 0 ? (
                <>
                  {/*
                  <li style={{ color: "black", fontWeight: "bold" }}>
                    {userdata?.displayName}
                  </li>
                  */}

                  <li>{/* <NavLink to="/dashboard">Dashboard</NavLink> */}</li>
                  <li onClick={logout}>Logout</li>
                  <li>
                    <img
                      src={userdata?.image}
                      style={{ width: "50px", borderRadius: "50%" }}
                      alt=""
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
    </>
  );
};

export default Header1;

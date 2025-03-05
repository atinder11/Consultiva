import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Header1 = () => {
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();

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
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          
          <h1 className="text-white ms-3 me-3">
            <span>Hi</span> {userdata?.displayName || "Guest"}
          </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-lg-end text-center" id="navbarNav">
            <ul className="navbar-nav align-items-center">
            <button className="btn btn-light me-5" onClick={() => navigate(-1)}>Back</button>
              <li className="nav-item dropdown me-lg-5 my-2 my-lg-0">
                <Link to="#" className="nav-link dropdown-toggle text-white" id="healthToolDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Health Tool
                </Link>
                <ul className="dropdown-menu" aria-labelledby="healthToolDropdown">
                  <li><Link className="dropdown-item" to="/bmi">BMI Calculator</Link></li>
                  <li><Link className="dropdown-item" to="/duedate">Due Date Calculator</Link></li>
                  <li><Link className="dropdown-item" to="/smokingcost">Cost of Smoking Calculator</Link></li>
                </ul>
              </li>

              {userdata && userdata.displayName ? (
                <>
                  <li className="nav-item me-lg-3 my-2 my-lg-0">
                    <button onClick={logout} className="btn btn-outline-light">Logout</button>
                  </li>
                  <li className="nav-item my-2 my-lg-0">
                    <img src={userdata?.image} className="rounded-circle" style={{ width: "50px" }} alt="profile" />
                  </li>
                </>
              ) : (
                <li className="nav-item my-2 my-lg-0">
                  <NavLink className="nav-link text-white" to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header1;

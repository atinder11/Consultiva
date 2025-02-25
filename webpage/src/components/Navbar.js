import React from "react";
import { Link } from "react-router-dom";
import { useAuth0, User } from "@auth0/auth0-react";

function Navbar() {
  const loginwithgoogle = () => {
    window.open("https://consultivaapi.vercel.app/auth/google", "_self");
  };
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/home">Consultiva</Link>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#departments">
                Departments
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#doctors">
                Doctors
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Health Tool</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/bmi" target="_blank">
                    BMI Calculator
                  </a>
                </li>

                <li>
                  <a href="./duedate" target="_blank">
                    Due Date Calculator
                  </a>
                </li>
                <li>
                  <a href="./smokingcost" target="_blank">
                    Cost of Smoking Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="https://consultivaapi.vercel.app/auth/google" target="_blank" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Login </span> Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;

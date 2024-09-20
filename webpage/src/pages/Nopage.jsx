import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../App.css";

function Nopage() {
  console.log("Nopage component rendered");
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="container conatiner-fuild">
        <div style={styles.container}>
          <h1 style={styles.heading}>Error 404</h1>
          <p style={styles.message}>Page Not Found</p>
          <Link to="/Home">
            <button className="btn appointment-btn">Go to Home</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",

    fontFamily: "Open Sans, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "3em",
    fontWeight: "800",
  },
  message: {
    fontSize: "1.5em",
  },
};

export default Nopage;

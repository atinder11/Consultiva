// Hero.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container text-start">
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to Consultiva</h2>
        <h2>Consult India's Top Doctors Online, Safely From Home.</h2>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;

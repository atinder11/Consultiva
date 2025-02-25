import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>Welcome to Consultiva</h1>
        <h2>Consult India's Top Doctors Online, Safely From Home.</h2>
        <a href="#about" className="h1 btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;

// Services.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//import './Services.css';
function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Explore our comprehensive healthcare services designed to meet your unique needs, from instant doctor consultations to convenient prescription refills and lab tests at home. We're here to make healthcare accessible and hassle-free for you.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4><a href="">Cardiovascular Services</a></h4>
              <p>Comprehensive care for your heart's well-being</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4><a href="">Prescription Services</a></h4>
              <p>Convenient ordering and delivery of medications</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-hospital-user"></i></div>
              <h4><a href="">Hospital Services</a></h4>
              <p>Comprehensive healthcare solutions with your needs in focus</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-dna"></i></div>
              <h4><a href="">DNA Health Analysis</a></h4>
              <p>Tailored health recommendations driven by genetic data</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-wheelchair"></i></div>
              <h4><a href="">Mobility Support</a></h4>
              <p>Empowering individuals with accessibility needs</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-notes-medical"></i></div>
              <h4><a href="">Electronic Health Records</a></h4>
              <p>Streamlined access to your health information</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;

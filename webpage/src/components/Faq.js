import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FAQ = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-1">
                How does the disease prediction work?
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                <p>Our platform uses advanced machine learning models to analyze symptoms and predict potential diseases. Simply enter your symptoms, and our website will provide possible conditions along with recommendations.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i>
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-2">
                Can I locate nearby hospitals using this platform?
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>Yes! Our platform integrates Google Maps to help you find hospitals near your location. This ensures quick access to medical assistance when needed.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i>
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-3">
                What health tools are available?
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>We offer various health tools, including a BMI calculator, due date calculator for pregnancies, and a smoking cost calculator to estimate expenses related to smoking habits.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-4">
                How is my data secured?
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>Your privacy is our top priority. We use encryption and comply with industry security standards to ensure your medical data remains confidential and protected.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i>
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-5">
                How do I sign in to the platform?
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>We use Google Sign-In for secure authentication. This allows you to log in quickly without needing to remember additional passwords.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

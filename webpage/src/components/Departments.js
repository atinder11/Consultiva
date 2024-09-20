// Departments.js
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Departments() {
  
  return (
    <section id="departments" className="departments">
      <div className="container">

        <div className="section-title">
          <h2>Departments</h2>
          <p>Discover our specialized departments, each staffed with experts dedicated to addressing your specific healthcare needs. From cardiology to orthopedics, we offer a comprehensive range of professional services to ensure your well-being. Trust us to provide the specialized care you require, all in one convenient location.</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Cardiology</h3>
                    <p className="fst-italic">Where Every Beat Matters</p>
                    <p>Our Cardiology department is dedicated to the health of your heart. Our expert team of cardiologists combines cutting-edge technology with compassionate care to ensure that every beat of your heart is in harmony with your well-being. Whether you're seeking preventive measures or specialized treatment, we're here to provide comprehensive cardiac care that matters most to you. Trust us to keep your heart healthy and thriving.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Neurology</h3>
                    <p className="fst-italic">Navigating the Complexity of Neurology</p>
                    <p>In our Neurology department, we understand the intricacies of the nervous system and its vital role in your health. Our team of neurologists is dedicated to providing expert care for neurological conditions, from diagnosis to treatment. We're here to help you navigate the complexities of neurology and support your journey toward optimal brain and nervous system health.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Hepatology</h3>
                    <p className="fst-italic">Your Liver, Our Expertise</p>
                    <p>Our Hepatology department is committed to the well-being of your liver. Led by experienced hepatologists, we offer comprehensive care for liver-related conditions and diseases. Trust us to provide specialized expertise and advanced treatments, ensuring the health of this vital organ. Your liver's health is our priority.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-3.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Pediatrics</h3>
                    <p className="fst-italic">Where Children's Health Blossoms</p>
                    <p>At our Pediatrics department, we believe in nurturing the health and well-being of your little ones. Our team of pediatricians provides compassionate and comprehensive care for children of all ages. From routine check-ups to specialized treatments, we're dedicated to ensuring that your child's health blossoms from infancy to adolescence. Your child's smile is our greatest reward.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Eye Care</h3>
                    <p className="fst-italic">Vision of Care, Clarity of Sight</p>
                    <p>In our Eye Care department, we focus on preserving and enhancing your precious gift of sight. Our ophthalmologists and optometrists offer a range of services, from eye exams to advanced surgical procedures. We are dedicated to providing vision care that ensures clarity and quality of sight. Trust us with your eye health and enjoy a world of care and clearer vision.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-5.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Departments;

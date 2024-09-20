import React from 'react';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Consultiva?</h3>
              <p>
                Direct access to diverse specialists, flexible scheduling (including telehealth), privacy, transparent pricing, and abundant health resources. Streamline your care, access secure digital records, and enjoy responsive support. Take control of your well-being with our modern, efficient, cost-effective healthcare approach. Join us today!!
              </p>
              <div className="text-center">
                {/* Replace the anchor with a button */}
                <button className="more-btn">Learn More <i className="bx bx-chevron-right"></i></button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Navigate with Ease</h4>
                    <p>Simplify Your Health Journey with Effortless Navigation</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Tech-Infused Wellness</h4>
                    <p>Wellness Elevated by Cutting-Edge Technology</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>100 % Transparency</h4>
                    <p>Your Health, Our Commitment to Full Transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

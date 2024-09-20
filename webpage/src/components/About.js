import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            {/* Replace the href with your actual video link */}
            <a href="https://www.youtube.com/watch?v=eDmlWAaDxVg&t=66s" className="glightbox play-btn mb-4"></a>
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Stay Healthy with Consultiva: Your Favourite Online Pharmacy and Healthcare Platform</h3>
            <p>Consultiva: Your All-in-One Healthcare Destination. From real-time doctor consultations to an online pharmacy and effortless home lab tests, we provide a complete healthcare solution. With a track record of serving 1000+ clients across 25 cities, our mission is to redefine healthcare with a focus on compassion and excellence. Join us in bridging the gap between "care" and "health."</p>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title">Your Health, Your Identity</h4>
              <p className="description">At Consultiva, trust is the cornerstone of your healthcare experience. Your fingerprint symbolizes the confidence and personal care we provide. Rest easy knowing your well-being is our priority.</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title">Gifts of Gratitude</h4>
              <p className="description">At Consultiva, your journey is filled with savings. Unwrap exclusive offers and rewards at every turn, making your healthcare experience even more rewarding. Explore our services, book appointments, and access resources to discover valuable discounts and perks. We're here to enhance your well-being, one click at a time.</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title">Exploring the Future of Healthcare</h4>
              <p className="description">At Consultiva, we harness the transformative power of technology to revolutionize healthcare. Our commitment to innovation drives us to continuously explore cutting-edge solutions that enhance the quality and accessibility of healthcare services. By seamlessly integrating technology into our platform, we empower you to take control of your health journey with ease and confidence. Experience the future of healthcare with Consultiva, where the power of technology meets the pursuit of well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

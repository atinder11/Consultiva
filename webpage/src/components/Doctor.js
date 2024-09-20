import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Doctor = () => {
  const doctorsData = [
    {
      name: 'Vinod Singhal',
      specialty: 'Chief Medical Officer',
      description: 'Leading with experience and innovation',
    },
    {
      name: 'Sneha Sharma',
      specialty: 'Anesthesiologist',
      description: 'Ensuring safety and comfort during surgery',
    },
    {
      name: "William D'Souza",
      specialty: 'Cardiologist',
      description: 'Passionate about heart health and prevention',
    },
    {
      name: 'Anam Khan',
      specialty: 'Neurosurgeon',
      description: 'Surgical precision for neurological care',
    },
    // Add more doctors with similar structures as needed
  ];

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>Our team of dedicated healthcare professionals...</p>
        </div>

        <div className="row">
          {doctorsData.map((doctor, index) => (
            <div className="col-lg-6 mt-4" key={index}>
              <div className="member-info">
                <h4>{doctor.name}</h4>
                <span>{doctor.specialty}</span>
                <p>{doctor.description}</p>
                {/* Add social links/icons here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctor;

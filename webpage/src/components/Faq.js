import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

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
              <a className="collapsed" data-bs-toggle="collapse" href="#faq-list-1">
                What is online doctor consultation? 
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                <p>Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> 
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-2">
                Are your online doctors qualified? 
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> 
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-3">
                What happens if I do not get a response from a doctor? 
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> 
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-4">
                Is online doctor consultation safe and secured on Consultiva? 
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> 
              <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#faq-list-5">
                Different Mode of Consultation with Doctors Online 
                <i className="bx bx-chevron-up icon-close"></i>
                <i className="bx bx-chevron-down icon-show"></i>
              </a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>As technologies are filling the gap in the availability of healthcare. These technologies also help in providing quality treatment to patients living in remote areas of the country and might need medical attention. These different modes of online consultation with doctors are available, which are completely safe, secured, and hassle-free.

                  At Consultiva, Patients can connect with registered experienced Doctors using these technologies. Here we are offering 3 Consultation modes to the patient to exchange health data information via Text or Chat, Phone, and Video Consultation to get a medical assistant. A Doctor & Patient should choose the “most suitable technology” for effective consultation. While an audio mode of interaction may be better over a text consultation for diagnoses of some patients, in other cases, the doctor may need to visually examine a patient through a video call.</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
};
  
export default FAQ;

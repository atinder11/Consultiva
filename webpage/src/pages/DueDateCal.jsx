import React, { useState, useEffect } from "react";
import "../components/main.css";
import Footer from "../components/Footer";

const DueDateCal = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    document.title = dueDate ? `Due Date: ${dueDate}` : "Due Date Calculator";
  }, [dueDate]);

  const handleDateChange = (e) => setLastPeriodDate(e.target.value);
  const handleCycleLengthChange = (e) => setCycleLength(parseInt(e.target.value));

  const calculateDueDate = (e) => {
    e.preventDefault();
    if (lastPeriodDate) {
      const date = new Date(lastPeriodDate);
      date.setDate(date.getDate() + 280 - (28 - cycleLength));
      setDueDate(date.toDateString());
    }
  };

  return (
    <>
      <section className="p-5 d-flex justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>Due Date Calculator</h1>
              <form onSubmit={calculateDueDate}>
                <div className="form-group">
                  <br />
                  <label htmlFor="lastPeriodDate">
                    First day of your last period:
                  </label>
                  <input
                    type="date"
                    id="lastPeriodDate"
                    className="form-control"
                    value={lastPeriodDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="cycleLength">Cycle length (days):</label>
                  <input
                    type="number"
                    id="cycleLength"
                    className="form-control"
                    value={cycleLength}
                    onChange={handleCycleLengthChange}
                    required
                  />
                </div>
                <br />
                <button type="submit" className="appointment-btn">
                  Show Your Due Date
                </button>
              </form>
              {dueDate && (
                <div className="mt-4">
                  <h4><b>

                 Your Due Date is: {dueDate} 
                 </b> </h4>  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container container-fluid">
        <h3>
        <b>Understanding Your Due Date
        </b></h3>
        <p>
        
          The due date is an estimated date when a pregnant woman is expected 
          to give birth. This is calculated based on the first day of the last 
          menstrual period (LMP) and the average pregnancy duration of 280 days 
          (or 40 weeks).
        </p>

        <h5>How the Due Date is Calculated</h5>
        <p>
          - The standard method adds 280 days (40 weeks) to the first day 
          of your last period.<br />
          - If your menstrual cycle is longer or shorter than 28 days, the 
          calculation adjusts accordingly.<br />
          - This estimation is based on the assumption that ovulation happens 
          14 days after the start of your last period.<br />
          - The due date is not always exact, as only 4-5% of babies are 
          born on their predicted due date.
        </p>

        <h5>Why Is the Due Date Important?</h5>
        <p>
          The estimated due date is crucial for:<br />
          - Tracking fetal growth: Doctors use it to monitor the baby’s 
          development through ultrasounds and prenatal checkups.<br />
          - Scheduling prenatal care: Regular checkups ensure a healthy 
          pregnancy and help detect any potential complications early.<br />
          - Planning for labor and delivery: It helps parents prepare for 
          childbirth and ensure they have necessary arrangements in place.
        </p>

        <h5>Factors That Can Affect the Due Date</h5>
        <p>
          Although the due date provides a useful estimate, several factors can 
          influence when the baby is actually born:<br />
          - Irregular menstrual cycles: Women with cycles longer or shorter 
          than 28 days may ovulate earlier or later.<br />
          - First-time pregnancies: First-time mothers may deliver closer 
          to 41 weeks.<br />
          - Previous pregnancies: Women who have given birth before may 
          have slightly different timelines.<br />
          - Ultrasound adjustments: A dating scan in the first trimester 
          can give a more precise due date.<br />
          - Multiple pregnancies: Twins or triplets may be born earlier 
          than a single baby.
        </p>

        <h5>What If the Due Date Passes?</h5>
        <p>
          If the due date passes without labor starting, doctors usually monitor 
          the pregnancy closely. Some possible next steps include:<br />
          - Waiting for spontaneous labor (most babies arrive within two 
          weeks of the due date).<br />
          - Scheduling an induction if the pregnancy goes beyond 41-42 weeks.<br />
          - Additional tests like ultrasounds and fetal monitoring to 
          ensure the baby's health.<br />
          If you are past your due date, consult your doctor for guidance.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default DueDateCal;

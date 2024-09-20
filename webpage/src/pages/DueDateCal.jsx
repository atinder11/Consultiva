import React, { useState, useEffect } from "react";
import "../components/main.css";
import Footer from "../components/Footer";

const DueDateCal = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [dueDate, setDueDate] = useState("");

  const handleDateChange = (e) => {
    setLastPeriodDate(e.target.value);
  };
  useEffect(() => {
    document.title = "Due Date Calculator";
    if (dueDate) {
      document.title = `Due Date: ${dueDate}`;
    }
  }, [dueDate]);

  const handleCycleLengthChange = (e) => {
    setCycleLength(parseInt(e.target.value));
  };

  const calculateDueDate = (e) => {
    e.preventDefault();
    if (lastPeriodDate && cycleLength) {
      const dueDateResult = calculateDueDateFunction(
        lastPeriodDate,
        cycleLength
      );
      setDueDate(dueDateResult);
    }
  };

  const calculateDueDateFunction = (lastPeriodDate, cycleLength) => {
    const date = new Date(lastPeriodDate);
    date.setDate(date.getDate() + cycleLength);
    return date.toDateString();
  };

  return (
    <>
      <section
        id="due-date-calculator"
        className="p-5 d-flex justify-content-center"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>Due Date Calculator</h1>
              <form onSubmit={calculateDueDate}>
                <div className="form-group">
                  <br />
                  <label htmlFor="lastPeriodDate">
                    When was the first day of your last period?
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
                  <label htmlFor="cycleLength">Cycle length in days</label>
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
                  <h4>Your Due Date is: {dueDate}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container container-fluid">
        <h3>What is Due Date Calculator </h3>
        <p>
          The calculator on this page can help you work out when you might
          expect your baby to arrive.
          <br />
          When was the first day of your last period? For example, 15 1 2024
          Some women's cycles are not exactly 28 days. Adjust the cycle length
          if your cycle is shorter or longer than 28 days.
          <br />
        </p>
        <h5>Using the due date calculator</h5>

        <p>
          To find your due date, enter the date of the first day of your last
          period, and select 'show your due date'. Pregnancy normally lasts from
          37 weeks to 42 weeks from the first day of your last period.
          <br />
          You need to know the first day of your last period to use this
          calculator. If you do not know it or are unsure, speak to a midwife or
          GP.
          <br />
          As part of your pregnancy (antenatal) care, your midwife will offer
          you a 12-week scan that may give you a more accurate date for the
          birth of your baby.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default DueDateCal;

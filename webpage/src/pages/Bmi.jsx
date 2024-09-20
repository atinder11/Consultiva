import React, { useState } from "react";
import "../components/main.css";
import Footer from "../components/Footer";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);
    }
  };

  const interpretBMI = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <div className="bmi-container container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">BMI Calculator</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="weight">Weight (kg):</label>
                <input
                  type="number"
                  id="weight"
                  className="form-control form-control-sm" // Added form-control-sm for smaller input
                  value={weight}
                  onChange={handleWeightChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="height">Height (cm):</label>
                <input
                  type="number"
                  id="height"
                  className="form-control form-control-sm" // Added form-control-sm for smaller input
                  value={height}
                  onChange={handleHeightChange}
                  required
                />
              </div>
              <br />

              <button
                className="calculate-button btn btn-primary"
                type="submit"
              >
                Calculate BMI
              </button>
            </form>
            {bmi && (
              <div className="bmi-result mt-4">
                <h3>Your BMI is: {bmi}</h3>
                <p className="btn1">{interpretBMI(parseFloat(bmi))}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BMI;

import React, { useState } from "react";
import "../components/main.css";
import Footer from "../components/Footer";

const SmokingCostCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [costPerPacket, setCostPerPacket] = useState("");
  const [cigarettesPerPacket, setCigarettesPerPacket] = useState("");
  const [cigarettesPerDay, setCigarettesPerDay] = useState("");
  const [totalCost, setTotalCost] = useState("");

  const calculateCost = (e) => {
    e.preventDefault();
    const daysSinceStart = Math.floor(
      (Date.now() - new Date(startDate)) / (1000 * 60 * 60 * 24)
    );
    const packetsSmoked = Math.ceil(
      (cigarettesPerDay * daysSinceStart) / cigarettesPerPacket
    );
    const totalCost = packetsSmoked * costPerPacket;
    setTotalCost(totalCost);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleCostPerPacketChange = (e) => {
    setCostPerPacket(e.target.value);
  };

  const handleCigarettesPerPacketChange = (e) => {
    setCigarettesPerPacket(e.target.value);
  };

  const handleCigarettesPerDayChange = (e) => {
    setCigarettesPerDay(e.target.value);
  };

  return (
    <>
      <br />
      <h1>Smoking Cost Calculator</h1>
      <section id="smoking-cost-calculator" className="p-5">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="description">
                <h3>Cost of Smoking Calculator</h3>
                <p>
                  If you smoke, you are at a higher risk of health conditions
                  affecting your lungs. Additionally, tobacco increases the
                  possibility of certain cancers, type 2 diabetes, fertility,
                  and gum diseases. In addition to being life-threatening,
                  smoking is an expensive habit. Have you considered how much
                  you spend on this habit? If not, then continue reading below.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={calculateCost}>
                <div className="form-group">
                  <label htmlFor="startDate">When did you start smoking?</label>
                  <input
                    type="date"
                    id="startDate"
                    className="form-control"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="costPerPacket">
                    Average cost of cigarettes per packet (Rs.):
                  </label>
                  <input
                    type="number"
                    id="costPerPacket"
                    className="form-control"
                    value={costPerPacket}
                    onChange={handleCostPerPacketChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="cigarettesPerPacket">
                    How many cigarettes in the packet:
                  </label>
                  <input
                    type="number"
                    id="cigarettesPerPacket"
                    className="form-control"
                    value={cigarettesPerPacket}
                    onChange={handleCigarettesPerPacketChange}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="cigarettesPerDay">
                    How many cigarettes do you smoke a day:
                  </label>
                  <input
                    type="number"
                    id="cigarettesPerDay"
                    className="form-control"
                    value={cigarettesPerDay}
                    onChange={handleCigarettesPerDayChange}
                    required
                  />
                </div>
                <br />
                <button type="submit" className="appointment-btn">
                  <b> Calculate Smoking Cost</b>
                </button>
              </form>
              {totalCost !== "" && (
                <div className="mt-4">
                  <h4>Your smoking cost to date: Rs. {totalCost}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SmokingCostCalculator;

import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Prediction from "./Prediction";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/sucess", {
        withCredentials: true,
      });

      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Header1 />
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h1>Dashboard</h1>
          <p> welcome back to consultiva</p>
        </div>
      </div>
      <div className="conatiner container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card11"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://storage.googleapis.com/kaggle-datasets-images/3309453/5755730/6cab38e4b97186fc7ad69f690cca378f/dataset-cover.jpg?t=2023-05-23-17-05-40"
                  className="card-img-top img-fluid"
                  style={{ width: "250px", height: "90px" }}
                  alt="img"
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">Prediction your Disease</h2>
                <p className="card-text">
                  With help of Advance AI that offered by consultiva
                </p>
                <a
                  href="./prediction"
                  target="./blank"
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Predict Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card11"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <br />
                <img
                  src="https://cdn-icons-png.freepik.com/512/4003/4003833.png"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="img"
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">Health Tools</h2>
                <p className="card-text">
                  We offer different types of Health tools
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <Link to="/bmi" target="_blank">
                        <button className="btn btn-primary">
                          <h5 className="card-title">
                            BMI
                            <br />
                            Calculator
                          </h5>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <Link to="/duedate" target="_blank">
                        <button className="btn btn1 btn-primary">
                          <h5 className="card-title">Due Date Calculator</h5>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <Link to="/smokingcost" target="_blank">
                        <button className="btn btn1 btn-primary">
                          <h5 className="card-title">
                            Smoking Cost Calculator
                          </h5>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card11"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_1SMuljod_k5Lo1ixooNVIP7Bw781t0w9g&s"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="img"
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">Locate Nearby Hospital</h2>
                <p className="card-text">
                  Find the Nearby Hospital feature offer by us
                </p>
                <Link
                  to="/findhospital"
                  target="_blank"
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Locate Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card11"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJf1Ey_dfINiZG5hN6tt7aYD2f9Hr7KSXU6Q&s"
                  className="card-img-top img-fluid"
                  style={{ width: "200px", height: "100px" }}
                  alt="img"
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">Contact Us</h2>
                <p className="card-text">
                  For any inquiries or support, please reach out to us
                </p>
                <Link
                  to="/contact"
                  target="_blank"
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <Footer />
    </>
  );
};

export default Dashboard;

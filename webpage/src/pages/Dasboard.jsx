import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("https://consultivaapi.vercel.app/login/success", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
      // Navigate to a different page or show an error message if user is not authenticated
      navigate("/login");
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
          <p>Welcome back to Consultiva, {userdata.displayName || "Guest"}!</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <img
                  src="https://storage.googleapis.com/kaggle-datasets-images/3309453/5755730/6cab38e4b97186fc7ad69f690cca378f/dataset-cover.jpg?t=2023-05-23-17-05-40"
                  className="card-img-top img-fluid"
                  style={{ width: "250px", height: "90px" }}
                  alt="img"
                />
              </div>
              <h2 className="card-title">Predict Your Disease</h2>
              <p className="card-text">
                With the help of Advanced AI offered by Consultiva
              </p>
              <a href="./prediction" className="btn btn-primary" style={{ display: "flex", justifyContent: "center" }}>
                Predict Now
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://cdn-icons-png.freepik.com/512/4003/4003833.png"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="img"
                />
              </div>
              <h2 className="card-title">Health Tools</h2>
              <p className="card-text">We offer different types of Health tools</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <Link to="/bmi" target="_blank">
                      <button className="btn btn-primary">
                        <h5 className="card-title">BMI Calculator</h5>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <Link to="/duedate" target="_blank">
                      <button className="btn btn-primary">
                        <h5 className="card-title">Due Date Calculator</h5>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <Link to="/smokingcost" target="_blank">
                      <button className="btn btn-primary">
                        <h5 className="card-title">Smoking Cost Calculator</h5>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_1SMuljod_k5Lo1ixooNVIP7Bw781t0w9g&s"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="img"
                />
              </div>
              <h2 className="card-title">Locate Nearby Hospital</h2>
              <p className="card-text">Find the Nearby Hospital feature offered by us</p>
              <Link to="/findhospital" className="btn btn-primary" style={{ display: "flex", justifyContent: "center" }}>
                Locate Now
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJf1Ey_dfINiZG5hN6tt7aYD2f9Hr7KSXU6Q&s"
                  className="card-img-top img-fluid"
                  style={{ width: "200px", height: "100px" }}
                  alt="img"
                />
              </div>
              <h2 className="card-title">Contact Us</h2>
              <p className="card-text">For any inquiries or support, please reach out to us</p>
              <Link to="/contact" className="btn btn-primary" style={{ display: "flex", justifyContent: "center" }}>
                Contact Us
              </Link>
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

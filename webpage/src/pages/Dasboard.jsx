import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header1 from "./Header1";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [userdata, setUserdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://consultivaapi.vercel.app/login/success", {
          withCredentials: true,
        });
        setUserdata(response.data.user);
      } catch (error) {
        console.log("error", error);
        /*navigate("/login"); */
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <>
      <Header1 />
      <div className="container">
        <div className="text-center">
          <h1>Dashboard</h1>
          <p>Welcome back to Consultiva, {userdata?.displayName || "Guest"}!</p>
        </div>
      </div>
      <div className="container-fluid align-content-center">
        <div className="row">
          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://storage.googleapis.com/kaggle-datasets-images/3309453/5755730/6cab38e4b97186fc7ad69f690cca378f/dataset-cover.jpg?t=2023-05-23-17-05-40"
                  className="card-img-top img-fluid"
                  style={{ width: "250px", height: "90px" }}
                  alt="Predict Disease"
                />
                <h2 className="card-title mt-1">Predict Your Disease</h2>
                <p className="card-text">With the help of Advanced AI offered by Consultiva</p>
                <Link to="/prediction" className="btn btn-primary">
                  Predict Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn-icons-png.freepik.com/512/4003/4003833.png"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="Health Tools"
                />
                <h2 className="card-title mt-1">Health Tools</h2>
                <p className="card-text">We offer different types of Health tools</p>
                <div className="row mb-4 px-4">
                  <div className="col-md-4">
                    <Link to="/bmi" target="_blank" className="btn btn-primary">
                      BMI Calculator
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/duedate" target="_blank" className="btn btn-primary">
                      Due Date Calculator
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="/smokingcost" target="_blank" className="btn btn-primary">
                      Smoking Cost Calculator
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_1SMuljod_k5Lo1ixooNVIP7Bw781t0w9g&s"
                  className="card-img-top img-fluid"
                  style={{ width: "150px", height: "90px" }}
                  alt="Hospital Locator"
                />
                <h2 className="card-title mt-1">Locate Nearby Hospital</h2>
                <p className="card-text">Find the Nearby Hospital feature offered by us</p>
                <Link to="/findhospital" className="btn btn-primary">
                  Locate Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJf1Ey_dfINiZG5hN6tt7aYD2f9Hr7KSXU6Q&s"
                  className="card-img-top img-fluid"
                  style={{ width: "200px", height: "100px" }}
                  alt="Contact Us"
                />
                <h2 className="card-title mt-1">Contact Us</h2>
                <p className="card-text">For any inquiries or support, please reach out to us</p>
                <Link to="/contact" className="btn btn-primary">
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

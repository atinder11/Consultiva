import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./assets/css/pagecss/Header1.css";

import "./assets/css/pagecss/Login.css";
import * as Boxicons from "react-icons/bi";
import Home from "./pages/Home";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./components/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'boxicons/css/boxicons.min.css';

import Doctor from "./components/Doctor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";
import Dasboard from "./pages/Dasboard";
import Header1 from "./pages/Header1";
import Prediction from "./pages/Prediction";
import BMI from "./pages/Bmi";
import DueDateCal from "./pages/DueDateCal";
import SmokingCostCalculator from "./pages/SmokingCostCalculator";
import FindDoctor from "./components/FindDoctor";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dasboard />} />
            <Route path="/header1" element={<Header1 />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/duedate" element={<DueDateCal />} />
            <Route path="/smokingcost" element={<SmokingCostCalculator />} />
            <Route path="/findhospital" element={<FindDoctor />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

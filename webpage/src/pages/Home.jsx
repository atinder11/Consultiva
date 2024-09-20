import React from "react";

import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import Counts from "../components/Counts";
import Services from "../components/Services";
import Departments from "../components/Departments";
import Doctor from "../components/Doctor";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />

        <Hero />
        <WhyUs />
        <About />
        <Counts />
        <Services />

        <Departments />
        <Doctor />
        <FAQ />
        <Testimonials />
        <Gallery />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;

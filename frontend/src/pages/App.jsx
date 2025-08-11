// /src/pages/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Nav.jsx";
import Home from "./Home.jsx"; 
import About from "./About.jsx";
import Meet from "./Meet.jsx";
import OurLogo from "./Logo.jsx";
import Ourstory from "./Ourstory.jsx";
import Gallery from "./Gallery.jsx";
import Credibility from "./Credibility.jsx";
import Contact from "./Contact.jsx";
import Footer from "../components/Footer.jsx"; 
import Team from "./Team.jsx"; // Assuming you have a Team component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/ourlogo" element={<OurLogo />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/credibility" element={<Credibility />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

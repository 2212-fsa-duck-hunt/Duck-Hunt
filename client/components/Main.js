import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./NormalLanding/Navbar";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default Main;

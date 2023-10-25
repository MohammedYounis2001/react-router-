import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Nav";
import Foot from "./Footer";
import Her from "./Her";
import Home from "./List";
import Cities from "./Cities";
import { About } from "./About";
import { Contact } from "./Contact";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>

      <Her />

      <Home
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <Cities selectedCountry={selectedCountry} />

      <Foot />
    </div>
  );
}

export default App;

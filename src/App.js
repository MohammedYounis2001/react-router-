import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Nav';
import Foot from './Footer';
import Her from './Her';
import Home from './List';
import Cities from './Cities';
import { About } from './About';
import { Contact } from './Contact';


function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    

    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
   
      <Her/>
    
    
   
      <Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <Cities selectedCountry={selectedCountry} />
    
   
    <Foot/>
    
    </div>
    
  );

}

export default App;


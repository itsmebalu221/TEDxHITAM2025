import React from "react";
import './App.css';
import Header from './Header/Header';
import Booking from './Booking/booking';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ClickSpark from "./ReactBits/cursor";
import Home from './Home/Home'
import Success from "./success";
import Footer from "./footer/footer";
import EBooking from "./ExternalForm/external"
import Team from "./Team/Team";
import Speakers from "./Speakers/speakers";
import About from './About/about'
import Contact from "./Contact/contact";

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/failed" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/speakers" element={<Speakers/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Team" element={<Team />} />
          <Route path="/BookingsExternal" element={<EBooking />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1 style={{ color: 'white' }}>404 - Page Not Found</h1>} />
        </Routes>
        <Footer/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;

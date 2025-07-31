import React from "react";
import "./Footer.css";
import logo from "../Header/logo-white.png"

const Footer = () => {
  return (
    <footer className="tedx-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img style={{width:'150px',marginLeft:'-10px'}} src={logo} alt=""/>
          <p>Thank you for being part of our journey. Together, we spark ideas worth spreading.</p>
        </div>

        <div className="footer-menu">
          <h4>Menu</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{textAlign:'center'}}>© {new Date().getFullYear()} TEDxHITAM — Independently organized TED event.</p>
      </div>
    </footer>
  );
};

export default Footer;

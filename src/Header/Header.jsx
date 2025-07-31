import React from "react";
import './Header.css'
import { redirect,useNavigate } from "react-router-dom";
import logo from './logo-white.png'
import Dither from '../ReactBits/dither'
import { DownOutlined, UserOutlined,FormOutlined,SearchOutlined ,MenuOutlined,DownloadOutlined} from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import LandingPopup from '../pop'
import { useState } from "react";



const items = [
  
  {
    key: '1',
    label: (
      <a  rel="noopener noreferrer" href="https://tedxhitam.com">
        Home
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a  rel="noopener noreferrer" href="/about">
        About
      </a>
      
    ),
    
  },
  {
    key: '3',
    label: (
      <a  rel="noopener noreferrer" href="/Team">
        Our Team
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a  rel="noopener noreferrer" href="/Speakers">
        Speakers
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a rel="noopener noreferrer" href="#">
        Past Editions
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a rel="noopener noreferrer" href="/Contact">
        Contact Us
      </a>
    ),
  },
  
];

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img src={logo} alt="TEDxHITAM Official Logo" className="logo" />
      <div className="MenuLay">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button
            ghost
            danger
            className="menu"
            style={{ padding: "0px 10px", marginLeft: "0px" }}
            icon={<MenuOutlined />}
          />
        </Dropdown>

        

        <Button
          onClick={() => setShowPopup(true)}
          ghost
          danger
          className="menu"
          icon={<FormOutlined />}
        >
          Book Your Ticket Now
        </Button>
      </div>

      {/* 🔥 Show the popup if triggered */}
      {showPopup && (
        <LandingPopup open={showPopup} setOpen={setShowPopup} />
      )}
    </div>
  );
}


export default Header;
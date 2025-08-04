import React, { useEffect, useState } from 'react';
import './header.css';
import { FormOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const logo = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><text x="0" y="30" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">TEDx</text><text x="65" y="30" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#E62B1E">HITAM</text></svg>`;

function LandingPopup({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={() => setOpen(false)} className="popup-close">
          <CloseOutlined style={{ fontSize: '24px' }} />
        </button>
        <h2 className="popup-heading">Book Your Ticket</h2>
        <p className="popup-text">This is where the ticket booking form would appear.</p>
        <button onClick={() => setOpen(false)} className="popup-button">
          Close Popup
        </button>
      </div>
    </div>
  );
}

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Gallery', href: '#' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#"><img src={logo} alt="TEDxHITAM Logo" className="logo" /></a>
          <nav className="nav-desktop">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
                <span className="nav-underline"></span>
              </a>
            ))}
          </nav>
          <div className="button-desktop">
            <button onClick={() => setShowPopup(true)} className="book-button">
              <FormOutlined /> Book Ticket
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="menu-button">
            <MenuOutlined style={{ fontSize: '24px' }} />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <a href="#"><img src={logo} alt="TEDxHITAM Logo" className="logo" /></a>
            <button onClick={() => setIsMenuOpen(false)} className="menu-button">
              <CloseOutlined style={{ fontSize: '24px' }} />
            </button>
          </div>
          <nav className="mobile-nav">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="mobile-link">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mobile-footer">
            <button
              onClick={() => {
                setShowPopup(true);
                setIsMenuOpen(false);
              }}
              className="book-button"
            >
              <FormOutlined /> Book Ticket
            </button>
          </div>
        </div>
      )}

      {showPopup && <LandingPopup open={showPopup} setOpen={setShowPopup} />}
    </>
  );
}
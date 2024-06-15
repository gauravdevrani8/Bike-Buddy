import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { RiEBikeFill, RiPhoneLine } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="phone">
          <RiPhoneLine /> 
          <p>+9187656765566 / +916766667876</p>
        </div>
        <div className="header-container">
          <div className="logo">
            <span className="icon"><RiEBikeFill /></span>
            <h1 className="logo-text">BikeBuddy</h1>
          </div>
          
          {/* Hamburger menu icon */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </div>
          
          {/* Navigation links */}
          <nav className={`nav-links ${isOpen ? 'visible' : 'hidden'}`}>
            <ul>
            <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>ABOUT US</Link></li>
              <li><Link to="/bikemodels" onClick={toggleMenu}>BIKE MODELS</Link></li>
              <li><Link to="/careerpage" onClick={toggleMenu}>OPENINGS</Link></li>
            </ul>
          </nav>
          
          {/* Auth buttons */}
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

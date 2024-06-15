import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import googlePlayBadge from '../../assets/googleplaystore.png';
import appStoreBadge from '../../assets/appleappstore.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container">
                    <div className="footer__branding">
                        <h2>Bike Buddy</h2>
                        <p>Bringing you the best bike rental experience.</p>
                    </div>
                    <div className="footer__sections">
                        <div className="footer__section">
                            <h4>Contact Us</h4>
                            <p>123 Bike Lane, Cycle City, CC 12345</p>
                            <p>Email: info@bikebuddy.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className="footer__section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                                <li><Link to="/support">Support</Link></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <h4>Our Presence</h4>
                            <ul>
                                <li>City A: <Link to="/city-a">View Details</Link></li>
                                <li>City B: <Link to="/city-b">View Details</Link></li>
                                <li>City C: <Link to="/city-c">View Details</Link></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <h4>Follow Us</h4>
                            <div className="footer__social">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </div>
                        </div>
                        <div className="footer__section">
                            <h4>Get Our App</h4>
                            <div className="footer__apps">
                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                    <img src={appStoreBadge} alt="App Store" />
                                </a>
                                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                    <img src={googlePlayBadge} alt="Google Play Store" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <p>&copy; 2024 Bike Buddy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">GiftEdge</h2>
                    <p className="brand-desc">
                        Elevating corporate gifting with luxury, precision, and unmatched service excellence.
                    </p>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>

                {/* Contact Info Column */}
                <div className="footer-col contact-col">
                    <h3>Contact Info</h3>
                    <ul className="contact-list">
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            <span>123 Corporate Plaza, Business District</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <a href="mailto:hello@giftedge.com">hello@giftedge.com</a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/collection">Collections</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="footer-col newsletter-col">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest collections and offers</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email" required />
                        <button type="submit" className="subscribe-btn">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 GiftEdge. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

// src/components/Footer.jsx
import React from 'react';
import '../index.css'; // Create this CSS file for Footer specific styles

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content-grid">
                {/* Column 1: Logo and Company Name */}
                <div className="footer-logo-column">
                    <img src="https://as2.ftcdn.net/v2/jpg/07/72/22/61/1000_F_772226143_BiDGUmtZ0xZ2UYBIcm9EjkTVH9mvbYss.jpg" alt="Himtreasures Logo" className="footer-logo" />
                    <p className="footer-tagline">We Build What You Love!!</p>
                </div>

                {/* Column 2: Useful Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Useful Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#our-team">Our Team</a></li>
                        <li><a href="#career">Career</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">ContactUs</a></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className="footer-column">
                    <h3 className="footer-heading">Services</h3>
                    <ul className="footer-links">
                        <li><a href="#web-development">Web Development</a></li>
                        <li><a href="#web-designing">Web Designing</a></li>
                        <li><a href="#graphic-design">Graphic Design</a></li>
                        <li><a href="#mobile-app">Mobile Application</a></li>
                        <li><a href="#digital-marketing">Digital Marketing</a></li>
                        <li><a href="#content-strategy">Content Strategy</a></li>
                        <li><a href="#framework">Framework</a></li>
                        <li><a href="#cms-solutions">CMS Solutions</a></li>
                        <li><a href="#e-commerce">E-commerce</a></li>
                    </ul>
                </div>

                {/* Column 4: Hire a Developer */}
                <div className="footer-column">
                    <h3 className="footer-heading">Hire a Developer</h3>
                    <ul className="footer-links">
                        <li><a href="#hire-react">Hire React Expert</a></li>
                        <li><a href="#hire-magento">Hire Magento Expert</a></li>
                        <li><a href="#hire-webflow">Hire Webflow Expert</a></li>
                        <li><a href="#hire-web">Hire Web Expert</a></li>
                        <li><a href="#hire-wordpress">Hire Wordpress Expert</a></li>
                        <li><a href="#hire-digital-marketing">Hire Dig Marketing Expert</a></li>
                        <li><a href="#hire-shopify">Hire Shopify Expert</a></li>
                    </ul>
                </div>

                {/* Column 5: INDIA (Contact Info) */}
                <div className="footer-column contact-info-column">
                    <h3 className="footer-heading">INDIA</h3>
                    <p>7th Floor, D-199, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                    <p>+91 8857501111</p>
                    <p><a href="mailto:info@himtreasures.com">info@himtreasures.com</a></p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; Copyright since 2024 Himtreasures</p>
            </div>
        </footer>
    );
};

export default Footer;
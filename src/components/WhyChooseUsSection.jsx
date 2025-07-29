import React from 'react';
import '../index.css'; // Import the merged CSS file

// Import icons and image (replace with your actual paths or use inline SVGs/Font Awesome)
import laptopImage from '../assets/laptop-charts.png'; // Example image for the right column
import iconExpertise from '../assets/icon-expertise.png'; // Example icon for Expertise card
import iconTransparent from '../assets/icon-transparent.png'; // Example icon for Transparent card

const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-content-left">
                <p className="why-choose-us-tag">Why Choose Us</p>
                <h2>Discover why we the trusted <span className="highlight">partner for businesses</span></h2>
                <p className="why-choose-us-description">
                    We are dedicated to providing unparalleled services that drive results and exceed expectations.
                    Here's why businesses choose us as their go-to digital marketing partner: Looking to Achieve
                    Exceptional Growth and Success.
                </p>
                <div className="why-choose-us-features-row">
                    <div className="why-choose-us-feature-card">
                        <img src={iconExpertise} alt="Expertise and Experience" className="feature-card-icon" />
                        <p>Expertise and Experience</p>
                    </div>
                    <div className="why-choose-us-feature-card">
                        <img src={iconTransparent} alt="Transparent Development Process" className="feature-card-icon" />
                        <p>Transparent Development Process</p>
                    </div>
                </div>
                <button className="why-choose-us-button">Click here</button>
            </div>
            <div className="why-choose-us-image-right">
                <img src={laptopImage} alt="Laptop with Charts" className="why-choose-us-main-image" />
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
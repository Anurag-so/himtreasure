import React from 'react';
import '../index.css'; // Import the merged CSS file
import aboutUsImage from '../assets/about-us-image.png'; // Assuming your new image is here

const AboutUsSection = () => {
    return (
        <section className="about-us-section"> {/* Main section class */}
            <div className="about-us-image-container">
                <img src={aboutUsImage} alt="About Us" className="about-us-main-image" />
            </div>
            <div className="about-us-content">
                <p className="about-us-tag">About Us</p>
                <h2>Challenges in digital <span className="highlight">technology</span> are our specialty</h2>
                <p className="about-us-description">
                    Learn how our talented designers combine creativity and functionality to deliver
                    captivating user experiences for your audience. Learn how our talented designers
                    combine
                </p>
                <ul className="about-us-features">
                    <li>Custom Website Design: Tailored designs that reflect your brand identity.</li>
                    <li>Responsive Design: Mobile-friendly layouts for an optimal user experience on all devices.</li>
                    <li>UI/UX Design: Intuitive and visually appealing interfaces that enhance user engagement.</li>
                    <li>E-commerce Design: High-converting designs for online stores.</li>
                </ul>
                <button className="more-about-button">More About</button>
            </div>
        </section>
    );
};

export default AboutUsSection;
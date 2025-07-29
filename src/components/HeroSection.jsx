import React from 'react';
import '../index.css'; // Create this CSS file for HeroSection specific styles

const HeroSection = () => {
    return (
        <section className="hero-section">
            <p className="hero-tag">Development Company</p>
            <h1>Elevate your business with our custom <span className="highlight">software solutions.</span></h1>
            <p className="hero-description">In today's competitive digital landscape, delivering innovative software solutions is more crucial than ever. Our team of expert software developers is dedicated to creating custom applications and systems that help your business stand out, improve efficiency, and drive growth.</p>
            <div className="hero-buttons">
                <button className="get-started-button">Get Started</button>
                <button className="get-started-button">Get Started</button>
            </div>
        </section>
    );
};

export default HeroSection;
import React from 'react';
import '../index.css'; // Import the merged CSS file

// Import icons (replace with your actual icon paths or use inline SVGs/Font Awesome)
import pricingIcon from '../assets/pricing-icon.png'; // Example icon for pricing card
import checkmarkIcon from '../assets/pricing-icon.png'; // Example icon for list items
import crossIcon from '../assets/pricing-icon.png'; // <--- NEW: Example icon for cross/X

const PricingSection = () => {
    // Updated data structure to include feature type for conditional icon rendering
    const pricingFeatures = [
        { text: "Support Your Business", type: "check" },
        { text: "List Item #2", type: "cross" }, // Changed to type "cross"
        { text: "Support Your Business", type: "check" },
        { text: "Support Your Business", type: "check" },
        { text: "List Item #2", type: "cross" } // Changed to type "cross"
    ];

    return (
        <section className="pricing-section">
            {/* Left column now contains all text stacked vertically */}
            <div className="pricing-left-column">
                <p className="pricing-tag">Our Pricing</p>
                <h2>Affordable and flexible <br /> pricing<span className="highlight"> packages</span></h2>
                <p className="pricing-description-text">
                    We offer a range of pricing packages to provide you with the best value for your investment.
                    Our transparent and competitive pricing ensures you get the most out of our services without any hidden fees.
                </p>
            </div>
            <div className="pricing-right-cards">
                {/* Pricing Card 1 */}
                <div className="pricing-card">
                    <img src={pricingIcon} alt="Basic Plan Icon" className="pricing-card-icon" />
                    <h4 className="plan-title">Basic</h4>
                    <p className="plan-price">$19.99 <span>/Month</span></p>
                    <ul className="plan-features">
                        {pricingFeatures.map((feature, index) => (
                            <li key={index}>
                                {/* Conditional rendering of icon based on feature.type */}
                                <img
                                    src={feature.type === "check" ? checkmarkIcon : crossIcon}
                                    alt={feature.type === "check" ? "Checkmark" : "Cross"}
                                    className={feature.type === "check" ? "feature-checkmark" : "feature-crossmark"}
                                />
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <button className="pricing-card-button">Click here</button>
                </div>

                {/* Pricing Card 2 (Duplicate for now, can be customized later) */}
                <div className="pricing-card">
                    <img src={pricingIcon} alt="Basic Plan Icon" className="pricing-card-icon" />
                    <h4 className="plan-title">Basic</h4>
                    <p className="plan-price">$19.99 <span>/Month</span></p>
                    <ul className="plan-features">
                        {pricingFeatures.map((feature, index) => (
                            <li key={index}>
                                {/* Conditional rendering of icon based on feature.type */}
                                <img
                                    src={feature.type === "check" ? checkmarkIcon : crossIcon}
                                    alt={feature.type === "check" ? "Checkmark" : "Cross"}
                                    className={feature.type === "check" ? "feature-checkmark" : "feature-crossmark"}
                                />
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <button className="pricing-card-button">Click here</button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
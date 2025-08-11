import React from 'react';
import '../index.css'; // Import the merged CSS file

// Import icons (replace with your actual icon paths or use inline SVGs/Font Awesome)
// For demonstration, I'm using placeholder image URLs. You should replace these.
import iconDesign from '../assets/icon-design.png'; // Example icon for UI/UX Design
import iconEcommerce from '../assets/icon-design.png'; // Example icon for E-Commerce Development
import iconArrowRight from '../assets/arrow-right-line.png'; // Example arrow icon

const ServicesGridSection = () => {
    const services = [
        {
            icon: iconDesign,
            title: "UI/UX Design",
            description: "Our UI/UX design team specializes in creating user-friendly and visually appealing interfaces for software and websites."
        },
        {
            icon: iconEcommerce,
            title: "E-Commerce Development",
            description: "Successful e-commerce development requires a comprehensive understanding of these factors, along with ongoing monitoring."
        },
        {
            icon: iconDesign, // Re-using for example
            title: "UI/UX Design",
            description: "Our UI/UX design team specializes in creating user-friendly and visually appealing interfaces for software and websites."
        },
        {
            icon: iconEcommerce, // Re-using for example
            title: "E-Commerce Development",
            description: "Successful e-commerce development requires a comprehensive understanding of these factors, along with ongoing monitoring."
        },
        {
            icon: iconDesign, // Re-using for example
            title: "UI/UX Design",
            description: "Our UI/UX design team specializes in creating user-friendly and visually appealing interfaces for software and websites."
        },
        {
            icon: iconEcommerce, // Re-using for example
            title: "E-Commerce Development",
            description: "Successful e-commerce development requires a comprehensive understanding of these factors, along with ongoing monitoring."
        }
    ];

    return (
        <section className="services-grid-section">
            <div className="services-left-column">
                <p className="services-tag">Services</p>
                <h3>Explore our wide range of <span className="highlight">tailored services</span></h3>
                <button className="view-all-services-button">View All Services</button>
            </div>
            <div className="services-right-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.icon} alt={service.title} className="service-card-icon" />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                        <button className="service-card-arrow-button">
                            <img src={iconArrowRight} alt="Learn More" />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesGridSection;
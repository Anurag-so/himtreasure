import React from 'react';
import './ServiceTicker.css'; 

const ServiceTicker = () => {
    // The content for your continuously moving strap
    // Duplicate the content to ensure a seamless loop
    const services = [
        "Brand Reporting",
        "Web Designing",
        "Web Development",
        "Web Developer",
        "Graphics Design",
        "Email Marketing",
        "SEO Optimization",
        "UI/UX Design",
        "Cloud Services",
        "Data Analytics"
    ];

    // Duplicate services to create a seamless loop for the marquee effect
    const marqueeContent = [...services, ...services, ...services]; // Triple for a smoother, longer loop

    return (
        <div className="service-ticker-container">
            <div className="service-ticker-content">
                {marqueeContent.map((service, index) => (
                    <span key={index} className="ticker-item">
                        {service}
                        <span className="ticker-separator"> * </span> {/* Separator */}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ServiceTicker;
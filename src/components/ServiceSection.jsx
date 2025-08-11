// src/components/ServiceSection.jsx

import React from 'react';

const ServiceSection = ({ title, description, imageSrc, imageAlt, align }) => {
  return (
    <div className={`service-section ${align}`}>
      <div className="service-image-container">
        <img src={imageSrc} alt={imageAlt} className="service-image" />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more-button">READ MORE</button>
      </div>
    </div>
  );
};

export default ServiceSection;
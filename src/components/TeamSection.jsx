// src/components/TeamSection.jsx
import React from 'react';
import WhyChooseUsSection from './WhyChooseUsSection';

function TeamSection() {
    return (
        <section className="team-section">
            <div className="team-image-container">
                <img src="/team-photo.jpg" alt="Himtreasures Team" className="team-photo" />
            </div>
            <div className="team-description-container">
                <p className="team-description-text">
                    We are team of experts who believes in technology. We strive to create a stress free and efficient
                    workflow with the help of our technology experts. We believe in a customer centric approach "CUSTOMER IS BIGGEST AND FOREMOST OUR CLIENT". We are an service oriented company from India, our
                    (India) have a strong of growth in our display capabilities.
                    All aspects, we are here well to achieve goals of our organization as well as expectations of our
                    clients in meeting with the work goals. So far as that will be considered as main assets that we are
                    growing day by day
                </p>
            </div>
            < WhyChooseUsSection />
        </section>
    );
}

export default TeamSection;
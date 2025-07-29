// src/components/Testimonials.jsx
import React from 'react';
import '../index.css'; // Don't forget to create this CSS file
import clientimage from '../assets/client-image.png'
const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-content-wrapper">
        <div className="testimonials-text-column">
          <p className="testimonials-tag">Testimonials</p>
          <h2 className="testimonials-main-heading">Real success stories and testimonials</h2>
          <p className="testimonials-description">
            We take pride in the positive experiences and meaningful outcomes we've helped our clients achieve. Read their stories and discover how we can help your business thrive.
          </p>
        </div>

        <div className="testimonials-card-column">
          <div className="testimonial-card">
            <div className="stars">
              ⭐⭐⭐⭐⭐ {/* You might use an icon library like Font Awesome here */}
            </div>
            <p className="card-text">
              The team at seo agency is exceptional! Their personalized strategies
              and ongoing support have driven incredible results for our business.
              We highly recommend their services.
            </p>
            <div className="client-info">
              <img src={clientimage} alt="Testimonial Client" className="client-avatar" />
              <div className="client-details">
                <p className="client-name">Testimonial #1</p>
                <p className="client-designation">Designation</p>
              </div>
            </div>
            {/* The "99" background graphic - this can be an absolute positioned element */}
            <span className="quote-number">99</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
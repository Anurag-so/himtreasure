// src/components/Contact.jsx
import React from 'react';
import '../index.css'; // Create this CSS file for Contact specific styles

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-content-grid">
                {/* Left Column: Contact Form */}
                <div className="contact-form-column">
                    <p className="contact-tag">Contact us</p>
                    <h2 className="contact-main-heading">Get in touch with us</h2>
                    <p className="contact-description">
                        Whether you have questions about our services, need assistance, or are ready
                        to start your project, our team is here to help.
                    </p>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Your Name</label>
                            <input type="text" id="fullName" placeholder="Enter your name here" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email here" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input type="tel" id="contactNumber" placeholder="Enter your number" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="servicesInterest">Services that interest you</label>
                            <select id="servicesInterest">
                                <option value="">Select services that interest you</option>
                                <option value="web-dev">Web Development</option>
                                <option value="seo">SEO</option>
                                <option value="marketing">Digital Marketing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="yourRequirement">Your requirement</label>
                            <textarea id="yourRequirement" rows="5" placeholder="Briefly your requirement"></textarea>
                        </div>

                        <button type="submit" className="send-message-button">Send Message</button>
                    </form>
                </div>

                {/* Right Column: Embedded Map */}
                <div className="contact-map-column">
                    <div className="map-info-box">
                        <h4>Patiala</h4>
                        <p>SCF-75, 2nd Floor, Phase-3B2, Sector 60, Mohali, Punjab 160059</p>
                        <a href="https://www.google.com/maps/place/Phase+8B,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308,+India/@30.636926,76.564804,10z/data=!4m6!3m5!1s0x390fee566ec12caf:0xe82bcee83eb20ba5!8m2!3d30.7116055!4d76.6939719!16s%2Fg%2F1ptyh0wqq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Directions</a>
                    </div>
                    {/* Placeholder for the Google Map iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.6738965825316!2d76.71181827471853!3d30.738089274530045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe2e2d0f04f4b%3A0x7e7c8a6f8b0d0c0c!2sYour%20Business%20Address!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" // Replace with your actual Google Maps Embed API URL
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
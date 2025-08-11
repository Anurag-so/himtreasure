import React from 'react';
 import './LandingPage.css'; // Ensure you create this CSS file

 // Import images (replace with your actual image paths)
 import heroImage from '../assets/hero-section.png'; // Example image

 const LandingPage = () => {
  return (
   <div className="landing-page">


    {/* Hero Section */}
    <section className="hero">
     <div className="hero-content">
      <h1>Empowering Your Digital Journey</h1>
      <p>At Himtreasure Web Solutions, we're dedicated to bringing your digital dreams to life. Whether you're a budding entrepreneur or an established enterprise, we offer a range of comprehensive services to cater to your unique needs and aspirations.</p>
     </div>
     <div className="hero-image">
      <img src={heroImage} alt="Empowering Digital Journey" />
     </div>
    </section>

    {/* Our Services Section */}
    <section className="our-services">
     <h2>Our Services</h2>
     <div className="service-list">
      <div className="service-item">
       <h3>Web Development:</h3>
       <p>From captivating websites to dynamic web applications, our team of skilled developers creates tailored solutions that resonate with your audience and drive results.</p>
      </div>
      <div className="service-item">
       <h3>Ecommerce Solutions:</h3>
       <p>Elevate your online store with our customizable ecommerce solutions. With seamless user experiences and robust backend systems, we help you maximize sales and streamline operations.</p>
      </div>
      <div className="service-item">
       <h3>Digital Marketing:</h3>
       <p>Stand out in the digital landscape with our strategic digital marketing services. From search engine optimization (SEO) to social media marketing, we help you reach your target audience and achieve your business objectives.</p>
      </div>
      <div className="service-item">
       <h3>Graphic Design:</h3>
       <p>Make a lasting impression with stunning visuals crafted by our talented graphic designers. From logos to branding materials, we ensure your brand identity reflects your unique vision and values.</p>
      </div>
     </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="why-choose-us">
     <h2>Why Choose Himtreasure Web Solutions?</h2>
     <div className="reasons-list">
      <div className="reason-item">
       <h3>Innovation:</h3>
       <p>We stay ahead of the curve by embracing the latest technologies and trends, ensuring your digital presence remains cutting-edge and competitive.</p>
      </div>
      <div className="reason-item">
       <h3>Collaboration:</h3>
       <p>We believe in working closely with our clients to understand their goals and preferences, fostering strong partnerships built on trust and communication.</p>
      </div>
      <div className="reason-item">
       <h3>Results-Driven:</h3>
       <p>Our ultimate goal is your success. Whether it's increased traffic, higher conversions, or improved brand visibility, we're committed to delivering measurable results that exceed your expectations.</p>
      </div>
     </div>
    </section>

    {/* FAQ Section */}
    <section className="faq-section">
     <h2>Frequently Asked Questions</h2>
     <div className="faq-grid">
      <div className="faq-column">
       <div className="faq-item">
        <h3><span>-</span> What is a landing page, and why is it essential for my business?</h3>
        <p>A landing page is a focused webpage crafted to prompt a specific action from visitors, such as signing up or making a purchase. It's vital for businesses as it channels traffic effectively and enhances the probability of conversions.</p>
       </div>
       <div className="faq-item">
        <h3><span>+</span> How can a professionally crafted landing page amplify my conversion rates?</h3>
       </div>
       <div className="faq-item">
        <h3><span>+</span> What components should an effective landing page design encompass?</h3>
       </div>
      </div>
      <div className="faq-column">
       <div className="faq-item">
        <h3><span>-</span> Can you tailor the landing page design to resonate with my brand's identity and message?</h3>
        <p>Certainly, our service ensures customization to harmonize with your brand's unique identity, conveying a cohesive message and fostering brand recognition.</p>
       </div>
       <div className="faq-item">
        <h3><span>+</span> Do you perform A/B testing to refine the landing page design for enhanced results?</h3>
       </div>
       <div className="faq-item">
        <h3><span>+</span> What type of assistance and upkeep do you provide following the launch of the landing page?</h3>
       </div>
      </div>
     </div>
    </section>

    {/* Footer (Not visible in provided images, but good practice) */}
    <footer className="footer">
     <p>&copy; {new Date().getFullYear()} Himtreasures Web Solutions. All rights reserved.</p>
    </footer>
   </div>
  );
 };

 export default LandingPage;
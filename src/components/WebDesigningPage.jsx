import React from 'react';
import './WebDesigningPage.css'; // Link to the page-specific CSS

const WebDesigningPage = () => {
  return (
    <div className="web-design-page">
      <Navbar /> {/* Render the Navbar */}

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background-shape">
            {/* This div will hold the large abstract shape */}
            {/* The shape will be handled by CSS background-image or as an SVG img */}
            <img src="/images/hero-abstract-shape.svg" alt="Abstract Background Shape" className="abstract-shape-img" />
          </div>
          <div className="hero-content">
            <p className="hero-tagline">The Perfect Combination of Design, Functionality, and Usability</p>
            <h1>Web Designing</h1>
          </div>
        </section>

        {/* Introduction/Description Section */}
        <section className="intro-section">
          <div className="container intro-container">
            <div className="intro-content">
              <p>
                WordPress development refers to the process of creating, customizing, and maintaining websites
                using the WordPress content management system (CMS). WordPress is an open-source platform
                widely known for its user-friendly interface and flexibility. Developers use a combination of PHP,
                HTML, CSS, and JavaScript to design and enhance the functionality of WordPress websites. The
                development process involves theme creation, where the visual appearance of the site is crafted,
                and plugin development to add specific features and functionalities. WordPress also supports a
                vast ecosystem of third-party plugins and themes, allowing developers to extend and customize
                websites efficiently.
              </p>
            </div>
            <div className="intro-image">
              {/* Replace with your actual illustration image */}
              <img src="/images/wordpress-illustration.png" alt="WordPress Illustration" />
            </div>
          </div>
        </section>

        {/* Value Proposition / Services Section */}
        <section className="services-section">
          <div className="container services-container">
            <div className="services-header">
              <h2 className="services-heading">Your web presence should be as unique as your business.</h2>
              {/* This text is visible in the screenshot, often a smaller tagline below main heading */}
              <p className="services-subheading">Building a professional website that reflects your business and achieves your goal is crucial for your online presence. We can help you achieve this by using a three-step process that is tailored to your specific needs and goals.</p>
            </div>

            <div className="services-cards">
              {/* Card 1: E-Commerce Development */}
              <div className="service-card">
                <div className="service-icon">
                  {/* Icon for E-Commerce, assumed to be an image or SVG */}
                  <img src="/images/ecommerce-icon.svg" alt="E-Commerce Icon" />
                </div>
                <h3>E-Commerce Development</h3>
                <p>
                  If you're looking to build an online store or shopping website, our e-commerce development
                  team can help. We have experience in customizing the design and layout of online stores,
                  integrating payment gateways and shipping options, and managing product inventory and orders.
                </p>
              </div>

              {/* Card 2: E-Commerce Development (Duplicate) */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="/images/ecommerce-icon.svg" alt="E-Commerce Icon" />
                </div>
                <h3>E-Commerce Development</h3>
                <p>
                  If you're looking to build an online store or shopping website, our e-commerce development
                  team can help. We have experience in customizing the design and layout of online stores,
                  integrating payment gateways and shipping options, and managing product inventory and orders.
                </p>
              </div>

              {/* Card 3: E-Commerce Development (Duplicate) */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="/images/ecommerce-icon.svg" alt="E-Commerce Icon" />
                </div>
                <h3>E-Commerce Development</h3>
                <p>
                  If you're looking to build an online store or shopping website, our e-commerce development
                  team can help. We have experience in customizing the design and layout of online stores,
                  integrating payment gateways and shipping options, and managing product inventory and orders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Icon - positioned using fixed CSS */}
      <div className="whatsapp-float-icon">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          {/* Replace with your actual WhatsApp icon */}
          <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>

      {/* You would typically have a Footer component here */}
      {/* <Footer /> */}
    </div>
  );
};

export default WebDesigningPage;
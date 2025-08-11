import React from 'react';
// Import the CSS for both sections
import './services.css';

const ServicesPage = () => {
  const wordpressLogo = "https://himtreasure.com/wp-content/uploads/2024/02/wordpress.png";
  const codeIcon = "https://himtreasure.com/wp-content/uploads/2024/02/backend-developement-1.png";

  return (
    <div className="services-page-layouts">
      {/* ========================================
        First Layout: WordPress Development
        ========================================
      */}
      <section className="wordpress-page-layout">
        {/* Left Column: Large WordPress Logo */}
        <div className="wordpress-logo-container">
          <div className="wordpress-big-logo">
            <img src={wordpressLogo} alt="Large WordPress Logo" />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div className="wordpress-text-content">
          <img src={wordpressLogo} alt="Small WordPress Logo" className="wordpress-small-logo" />
          <h2>WordPress Development</h2>
          <p>
            WordPress development involves the installation, setup, and customization of the WordPress content management system (CMS) to create and manage websites. Users begin by downloading and installing WordPress, configuring basic settings, and selecting a suitable theme.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>

      {/* ========================================
        Second Layout: Backend Development
        ========================================
      */}
      <section className="backend-section-container">
        {/* Left Column: Text Content */}
        <div className="backend-text-content">
          <img src={codeIcon} alt="Code Icon" className="backend-code-icon" />
          <h2>Backend Development</h2>
          <p>
            Backend development refers to the server-side of web development, where the core logic and functionalities of a website or application are implemented. It involves writing code that runs on the server and is responsible for handling data, processing requests, and managing the overall functionality of the site.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        
        {/* Right Column: Abstract Graphic */}
        <div className="backend-graphic-container">
          {/* Add your background image via CSS */}
        </div>
      </section>

      <section className="wordpress-page-layout">
        {/* Left Column: Large WordPress Logo */}
        <div className="wordpress-logo-container">
          <div className="wordpress-big-logo">
            <img src={wordpressLogo} alt="Large WordPress Logo" />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div className="wordpress-text-content">
          <img src={wordpressLogo} alt="Small WordPress Logo" className="wordpress-small-logo" />
          <h2>WordPress Development</h2>
          <p>
            WordPress development involves the installation, setup, and customization of the WordPress content management system (CMS) to create and manage websites. Users begin by downloading and installing WordPress, configuring basic settings, and selecting a suitable theme.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>


       <section className="backend-section-container">
        {/* Left Column: Text Content */}
        <div className="backend-text-content">
          <img src={codeIcon} alt="Code Icon" className="backend-code-icon" />
          <h2>Backend Development</h2>
          <p>
            Backend development refers to the server-side of web development, where the core logic and functionalities of a website or application are implemented. It involves writing code that runs on the server and is responsible for handling data, processing requests, and managing the overall functionality of the site.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        
        {/* Right Column: Abstract Graphic */}
        <div className="backend-graphic-container">
          {/* Add your background image via CSS */}
        </div>
      </section>

   <section className="wordpress-page-layout">
        {/* Left Column: Large WordPress Logo */}
        <div className="wordpress-logo-container">
          <div className="wordpress-big-logo">
            <img src={wordpressLogo} alt="Large WordPress Logo" />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div className="wordpress-text-content">
          <img src={wordpressLogo} alt="Small WordPress Logo" className="wordpress-small-logo" />
          <h2>WordPress Development</h2>
          <p>
            WordPress development involves the installation, setup, and customization of the WordPress content management system (CMS) to create and manage websites. Users begin by downloading and installing WordPress, configuring basic settings, and selecting a suitable theme.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>

       <section className="backend-section-container">
        {/* Left Column: Text Content */}
        <div className="backend-text-content">
          <img src={codeIcon} alt="Code Icon" className="backend-code-icon" />
          <h2>Backend Development</h2>
          <p>
            Backend development refers to the server-side of web development, where the core logic and functionalities of a website or application are implemented. It involves writing code that runs on the server and is responsible for handling data, processing requests, and managing the overall functionality of the site.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        
        {/* Right Column: Abstract Graphic */}
        <div className="backend-graphic-container">
          {/* Add your background image via CSS */}
        </div>
      </section>


       <section className="backend-section-container">
        {/* Left Column: Text Content */}
        <div className="backend-text-content">
          <img src={codeIcon} alt="Code Icon" className="backend-code-icon" />
          <h2>Backend Development</h2>
          <p>
            Backend development refers to the server-side of web development, where the core logic and functionalities of a website or application are implemented. It involves writing code that runs on the server and is responsible for handling data, processing requests, and managing the overall functionality of the site.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        
        {/* Right Column: Abstract Graphic */}
        <div className="backend-graphic-container">
          {/* Add your background image via CSS */}
        </div>
      </section>

    </div>

    

    
  );
};

export default ServicesPage;
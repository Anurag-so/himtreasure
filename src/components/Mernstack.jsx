import React from 'react';
import './Mernstack.css'; // Make sure to create this file

// Import your images (assuming they are in the src/assets folder)
import mernStackImage from '../assets/hero-illustration.png'; // Replace with your image
import advancedToolsImage from '../assets/tools-illustration.png'; // Replace with your image
import mongodbImage from '../assets/momgodb-icon.png'; // Replace with your image
import workflowIcon from '../assets/expressjs-icon.png'; // Replace with your image

// Data for the components
const services = [
  {
    title: "MongoDB Development",
    description: "Choosing MongoDB development means selecting a scalable database solution...",
    features: ["Scalable NoSQL Databases", "Scalable NoSQL Databases", "Scalable NoSQL Databases"]
  },
  {
    title: "MongoDB Development",
    description: "Choosing MongoDB development means selecting a scalable database solution...",
    features: ["Scalable NoSQL Databases", "Scalable NoSQL Databases", "Scalable NoSQL Databases"]
  },
  {
    title: "MongoDB Development",
    description: "Choosing MongoDB development means selecting a scalable database solution...",
    features: ["Scalable NoSQL Databases", "Scalable NoSQL Databases", "Scalable NoSQL Databases"]
  }
];

const workflows = [
  {
    title: "Project Requirement and Planning",
    description: "The first step entails comprehensively understanding the client's vision..."
  },
  {
    title: "Development and Database Setup",
    description: "The development team then concentrates on crafting the database structure..."
  },
  {
    title: "Launch and Maintenance",
    description: "Upon successful testing and optimization, the application is launched..."
  },
  {
    title: "Project Requirement and Planning",
    description: "After successful testing and optimization, launch the app. Ongoing maintenance..."
  }
];

const faqs = [
  {
    question: "What sets the MERN stack apart and makes it a powerful choice for web development?",
    answer: "The MERN stack combines MongoDB, Express.js, React, and Node.js..."
  },
  {
    question: "How can MongoDB benefit my business in application development?",
    answer: "MongoDB development ensures a database solution that is both flexible..."
  },
  // Add all other FAQs here
];

const Mernstack = () => {
  return (
    <div className="mern-stack-page">
      
    

     

      {/* Main Content Sections */}
      <div className="content-wrapper">
        
        {/* Unleash the Potential Section */}
        <div className="text-with-image-section">
          <div className="text-content">
            <h2>Unleash the Potential of MERN Stack with Our Expert Development Services</h2>
            <p>While we pride ourselves on our expertise in the MERN stack and our ability to deliver exceptional results...</p>
          </div>
          <div className="image-content">
            <img src={mernStackImage} alt="MERN Stack" />
          </div>
        </div>


               {/* Advanced Tools Section */}
        <div className="text-with-image-section reversed">
          <div className="image-content">
            <img src={advancedToolsImage} alt="Advanced Tools" />
          </div>
          <div className="text-content">
            <h2>Advanced Tools Employed in Our MERN Stack Development</h2>
            <p>Unveil the formidable tools propelling our proficiency in MERN Stack development...</p>
            <div className="tools-list">
              <div className="tool-item"><span>✔</span> MongoDB</div>
              <div className="tool-item"><span>✔</span> React</div>
              <div className="tool-item"><span>✔</span> Express.js</div>
              <div className="tool-item"><span>✔</span> Node.js</div>
            </div>
          </div>
        </div>

        {/* MongoDB Development Cards */}
        <div className="service-cards-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-image">
                <img src={mongodbImage} alt="MongoDB" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}><span>✔</span> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 


        {/* Workflow Section */}
        <div className="workflow-section">
          <h2>Our Effective Workflow For Mern Stack Development</h2>
          <div className="workflow-cards-container">
            {workflows.map((workflow, index) => (
              <div className="workflow-card" key={index}>
                <img src={workflowIcon} alt="Workflow Icon" />
                <h4>{workflow.title}</h4>
                <p>{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-column">
              {/* Left Column FAQs */}
              {faqs.slice(0, 3).map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h4><span>+</span> {faq.question}</h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="faq-column">
              {/* Right Column FAQs */}
              {faqs.slice(3, 6).map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h4><span>+</span> {faq.question}</h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Mernstack;
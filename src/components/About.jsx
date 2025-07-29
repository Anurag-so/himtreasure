import React from 'react';
import Puzzle from './Puzzle'; // This assumes Puzzle.jsx is in the same 'components' folder
import '../App.css'
import team from '../assets/Team-photo.png';


import image1 from '../assets/Team-photo.png'; // Replace with your actual paths
import image2 from '../assets/Team-photo.png'; 
import image3 from '../assets/Team-photo.png'; 
import image4 from '../assets/Team-photo.png'; 
import image5 from '../assets/Team-photo.png'; 
import image6 from '../assets/Team-photo.png'; 


function AboutSection() {

    return (
        // <section className="about-section">
        //     <div className="about-content">
        //         <p className="about-heading">About Us</p>
        //         <h1>We are team of experts who believes in technology</h1>
        //     </div>
        //     <div className="about-image">
        //         <div className="puzzle-container">
        //             <Puzzle color="yellow" />
        //             <Puzzle color="light-blue" />
        //             <Puzzle color="grey" />
        //             <Puzzle color="orange" />
        //             <Puzzle color="light-red" />
        //             <Puzzle color="blue" />
        //         </div>
        //     </div> 
            <main>
        {/* Hero Section (Similar to Web Designing, adapted for About Us) */}
        <section className="about-hero-section">
          <div className="about-hero-content">
            <h1>About Us</h1>
            <p className="about-hero-tagline">Learn more about our mission, vision, and team.</p>
          </div>
        </section>

        {/* About Section: Team Photo & Description */}
        <section className="about-team-section">
          <div className="container about-team-container">
            <div className="team-photo-wrapper">
              {/* Replace with your actual team photo */}
              <img src={team} alt="Himtreasures Team" className="team-photo" />
            </div>
            <div className="team-description">
              <p>
                We are team of experts who believe in technology. For us success is when we put ideas of people into reality with the
                help of our technology experts. We believe in a real team motto as "YOU THINK, WE SUGGEST AND TOGETHER WE
                IMPLEMENT". We are serving our clients not only from India but globally too in this era of growth in ever changing
                market place.
              </p>
              <p>
                All experts in our team work to achieve goals of our organization as well as expectations of our clients in creating
                website. Our work speaks for us that will be considered as main reason that we are growing day by day.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container stats-container">
            {/* Stat Item 1: Years of Success */}
            <div className="stat-item">
              <div className="stat-icon">
                {/* Replace with your icon image or use an icon font/library */}
                <img src="https://himtreasure.com/wp-content/uploads/2024/01/years-success-icon.png" alt="Years of Success" />
              </div>
              <p className="stat-number">9+</p>
              <p className="stat-label">Years of Success</p>
            </div>

            {/* Stat Item 2: Project Completed */}
            <div className="stat-item">
              <div className="stat-icon">
                <img src="https://himtreasure.com/wp-content/uploads/2024/01/regular-clients-icon.png" alt="Projects Completed" />
              </div>
              <p className="stat-number">5k</p>
              <p className="stat-label">Project Completed</p>
            </div>

            {/* Stat Item 3: Happy Customers */}
            <div className="stat-item">
              <div className="stat-icon">
                <img src="https://himtreasure.com/wp-content/uploads/2024/01/projects-delivered-icon.png" alt="Happy Customers" />
              </div>
              <p className="stat-number">8k</p>
              <p className="stat-label">Happy Customers</p>
            </div>

            {/* Stat Item 4: Awards Achievement */}
            <div className="stat-item">
              <div className="stat-icon">
                <img src="https://himtreasure.com/wp-content/uploads/2024/01/positive-reviews-icon.png" alt="Awards Achievement" />
              </div>
              <p className="stat-number">20+</p>
              <p className="stat-label">Awards Achievement</p>
            </div>
          </div>
        </section>
        <section className="mission-culture-section">
      <div className="container mission-culture-container">
        {/* Top part: Infographic and text */}
        <div className="mission-culture-top">
          <div className="circular-process">
            {/* The large {h} icon */}
            <div className="himtreasures-logo-icon">
              {/* Replace with your Himtreasures logo/icon SVG or image, e.g., /images/himtreasures-curly-h.svg */}
              <img src="https://himtreasure.com/wp-content/uploads/2024/05/mission.jpg" alt="Himtreasures Icon" />
            </div>

            {/* Central circle */}
            <div className="central-circle">
              <p></p>
              <h3></h3>
            </div>

            {/* Process Steps (clockwise from top-right) */}
            <div className="process-step step-1">
              <div className="step-icon">01</div>
              <p className="step-label">EFFICIENCY</p>
              <div className="step-line"></div> {/* For the connecting line/bar */}
            </div>
            <div className="process-step step-2">
              <div className="step-icon">02</div>
              <p className="step-label">VISION</p>
              <div className="step-line"></div>
            </div>
            <div className="process-step step-3">
              <div className="step-icon">03</div>
              <p className="step-label">RESPONSIBILITY</p>
              <div className="step-line"></div>
            </div>
            <div className="process-step step-4">
              <div className="step-icon">04</div>
              <p className="step-label">GOALS</p>
              <div className="step-line"></div>
            </div>
          </div>

          <div className="mission-text-content">
            <h2 className="section-title">WE BELIEVE IN</h2>
            <p>
              Himtreasures projects are like building castles. Each line of code, every design decision, and every
              marketing strategy is a brick laid with precision and purpose. We focus on building a strong
              foundation of user experience, robust functionality, and scalable architecture.
            </p>
            <p>
              Our process includes meticulous planning, collaborative design, iterative development,
              rigorous testing, and ongoing support. Just as a castle stands the test of time, our projects
              are built to endure and evolve.
            </p>
          </div>
        </div>
      </div>
    </section>


      <section className="about-us-section1">
      <p className="subtitle">WE'RE ONE BIG FAMILY</p>
      <h1 className="main-title">Culture is everything to us</h1>

      <div className="image-gallery-container"> {/* New container for precise positioning */}
        <div className="gallery-item item-1">
          <img src={image1} alt="Team member 1" />
        </div>
        <div className="gallery-item item-2">
          <img src={image2} alt="Team member 2" />
        </div>
        <div className="gallery-item item-3">
          <img src={image3} alt="Team member 3" />
        </div>
        <div className="gallery-item item-4">
          <img src={image4} alt="Team member 4" />
        </div>
        <div className="gallery-item item-5">
          <img src={image5} alt="Team member 5" />
        </div>
        <div className="gallery-item item-6">
          <img src={image6} alt="Team member 6" />
        </div>
      </div>
    </section>
      </main>
        // </section>
        
        
    );
}

export default AboutSection;
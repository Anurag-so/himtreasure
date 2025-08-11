import React from 'react';
import './Career.css'; // All styles for the career page
import Footer from './Footer'; // Assuming you'll create a Footer component
// Component for the top banner with background image
import clockimage from '../assets/clock.png';
import stairs from '../assets/stairs-line.png';
import stars from '../assets/star-fill.png';
import Wallet from '../assets/wallet-3-fill.png'
const CareerHero = () => (
  <section className="career-hero">
    <div className="container">
      <h2>Reach the Top of Your Career With Us. Find the Job of Your Dreams.</h2>
    </div>
  </section>
);

// Component for the four value proposition boxes
const ValuePropSection = () => (
  <section className="value-prop-section">
    <div className="container value-prop-grid">
      <div className="value-prop-item">
        <img src={stairs} alt="" className="value-prop-icon" />
        <h3>Career Growth</h3>
        <p>Innovation, learning, mentorship, and impactful experiences.</p>
      </div>
      <div className="value-prop-item">
        <img src={stars} alt="" className="value-prop-icon" />
        <h3>Innovate</h3>
        <p>Be a part of a team that creates groundbreaking solutions everyday.</p>
      </div>
      <div className="value-prop-item">
        <img src={clockimage} alt="" className="value-prop-icon" />
        <h3>Work Culture</h3>
        <p>Enjoy celebrations for birthdays, milestones, and project successes.</p>
      </div>
      <div className="value-prop-item">
        <img src={Wallet} alt="Smart Salary Icon" className="value-prop-icon" />
        <h3>Smart Salary</h3>
        <p>Competitive compensation where your hard work pays off.</p>
      </div>
    </div>
  </section>
);

// Component for the job descriptions and application form
const CareerFormSection = () => (
  <section className="career-form-section">
    <div className="container">
      <h2 className="section-title">Career</h2>
      <p className="section-subtitle">Evolve alongside us and shape your ideal career path! Discover fresh prospects and transform your career aspirations into achievements with our guidance!</p>

      <div className="career-content-grid">
        <div className="job-description-column">
          {/* Job Description 1 */}
          <div className="job-listing">
            <h3>+ Web Development [ 2 Openings ]</h3>
            <p><strong>Experience:</strong> 1-3 Years</p>
            <p><strong>No. of Positions:</strong> 2</p>
            <p><strong>Salary:</strong> ₹10k - ₹15k</p>
            <p><strong>Role Category:</strong> Developer</p>
            <p><strong>Employment Type:</strong> Full Time, Permanent</p>
            <p><strong>Department:</strong> Development / Programming, IT & Software</p>
            <p><strong>Education:</strong> Any Graduate, Any Post Graduate</p>
            <p><strong>Key Skills:</strong> HTML, CSS, JavaScript, React.js, Node.js, PHP, MySQL, REST APIs</p>
            <p><strong>Description:</strong> As a Web Developer, you will be responsible for designing, coding, and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.</p>
            <p className="job-requirements">
              <strong>Requirements:</strong>
              </p>
              <ul>
                <li>Proven working experience in web programming.</li>
                <li>Top-tier programming skills and in-depth knowledge of HTML/CSS/JavaScript.</li>
                <li>A solid understanding of how web applications work including security, session management, and best development practices.</li>
                <li>Adequate knowledge of relational database systems, object-oriented programming and web application development.</li>
                <li>Hands-on experience with network diagnostics, network analytics tools.</li>
                <li>Basic knowledge of Search Engine Optimization process.</li>
                <li>Aggressive problem diagnosis and creative problem-solving skills.</li>
                <li>Strong organizational skills to juggle multiple tasks within the constraints of timelines and budgets with business acumen.</li>
                <li>Ability to work and thrive in a fast-paced environment, learn rapidly and master diverse web technologies and techniques.</li>
              </ul>
            
          </div>
          {/* Job Description 2 */}
          <div className="job-listing">
            <h3>+ WordPress Developer</h3>
            {/* ... add content for WordPress Developer similar to above ... */}
            <p><strong>Experience:</strong> 1-2 Years</p>
            <p><strong>No. of Positions:</strong> 1</p>
            <p><strong>Salary:</strong> ₹8k - ₹12k</p>
            <p><strong>Description:</strong> Responsible for both back-end and front-end development, including creating WordPress themes and plugins.</p>
          </div>
        </div>

        <div className="application-form-column">
          <form className="career-application-form">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Your Email*" required />
            <input type="tel" placeholder="Phone Number*" required />
            <div className="file-upload-container">
              <label htmlFor="resume-upload" className="custom-file-upload">Choose File (No file chosen)</label>
              <input type="file" id="resume-upload" accept=".pdf,.doc,.docx" />
            </div>
            <select className="service-dropdown" defaultValue="">
              <option value="" disabled hidden>Services that interest you *</option>
              <option value="web-dev">Web Development</option>
              <option value="wordpress">WordPress Development</option>
              <option value="mobile-app">Mobile App Development</option>
            </select>
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Component for the Call to Action banner
const CallToActionSection = () => (
  <section className="call-to-action-section">
    <div className="container call-to-action-content">
      <h3>Do you find development partner for your business?</h3>
      <button className="contact-us-btn">Contact Us</button>
    </div>
  </section>
);

// Main Career Component
function Career() {
  return (
    <div className="career-page-layout">
      {/* The Header/Navbar would typically go here, above the CareerHero */}
      {/* <Header /> */}

      <CareerHero />
      <ValuePropSection />
      <CareerFormSection />
      <CallToActionSection />
      {/* <Footer /> Your Footer component */}
    </div>
  );
}

export default Career;
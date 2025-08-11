import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css'; // Create this CSS file for Navbar specific styles
import Dropdown from './Dropdown'; // Import the Dropdown component

// Import your images (make sure these paths are correct or put them in public folder)
import himtreasuresLogo from '../assets/himtreasures-logo.png'; // Example path
// You'll need to create an assets folder inside src and place your logo there.
// Or place it in the public folder and use /himtreasures-logo.png

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Data for the service dropdown columns
    // Note: For now, service dropdown links remain '#' as their routes are not defined yet.
    // If you create dedicated pages for these services, update these links with actual paths.
    const serviceOptions = [
        [
            { name: "Website Designing", link: "./WebDesigningPage" },
            { name: "Web Development", link: "./WebDevelopment" },
            { name: "Mobile App Development", link: "#" },
            { name: "Graphics Design", link: "#" },
        ],
        [
            { name: "Mern Stack", link: "/Mernstack" },
            { name: "Content Strategy", link: "#" },
            { name: "Frame Work", link: "#" },
            { name: "CMS Solutions", link: "#" },
        ],
        [
            { name: "Landing Page", link: "./LandingPage" },
            { name: "Ecommerce", link: "#" },
            { name: "Digital Marketing", link: "#" },
            { name: "Web Application Development", link: "#" },
            { name: "Software Testing", link: "#" },
        ]
    ];

    return (
        <header className="navbar-container">
            <div className="navbar-logo">
                {/* Link the logo to the home page */}
                <Link to="/"><img src={himtreasuresLogo} alt="Himtreasures Logo" /> </Link>
            </div>
            <nav className="navbar-nav">
                <ul className="navbar-links">
                    {/* Use Link components for navigation */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li> {/* Link to the About Us page */}
                    <li
                        className="navbar-dropdown-wrapper"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        {/* This 'a' tag is kept for dropdown functionality, not for navigation to a dedicated 'Service' page */}
                        <Link to="/Service" className="dropbtn">
                        Service <i className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></i>
                    </Link>
                        {isDropdownOpen && <Dropdown options={serviceOptions} />}
                    </li>
                    
                    {/* Assuming these also navigate to dedicated pages */}
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                </ul>
            </nav>
            {/* Use Link for the "Let's Chat" button, assuming it goes to the Contact page */}
            <Link to="/contact" className="chat-button">Let's Chat</Link>
        </header>
    );
};

export default Navbar;
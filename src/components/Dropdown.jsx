import React from 'react';
import'../index.css'; // Create this CSS file for Dropdown specific styles
import Dropdownimage from '../assets/whatsapp-icon.png'
const Dropdown = ({ options }) => {
    return (
        <div className="dropdown-content">
            {options.map((column, colIndex) => (
                <div key={colIndex} className="dropdown-column">
                    {column.map((item, itemIndex) => (
                        <a key={itemIndex} href={item.link}>{item.name}</a>
                    ))}
                </div>
            ))}
            {/* Image on the right side of the dropdown */}
            <div className="dropdown-image-container">
                <img src={Dropdownimage} alt="Creative Solutions" /> {/* Place your image in public folder or adjust path */}
            </div>
        </div>
    );
};

export default Dropdown;
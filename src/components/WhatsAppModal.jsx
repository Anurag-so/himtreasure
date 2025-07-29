import React from 'react';
import '../index.css'; // Import the merged CSS file

import whatsappIconSmall from '../assets/whatsapp-small.png'; // You'll need a small WhatsApp icon for the support card
import closeIcon from '../assets/cross.png'; // A close/cross icon for the modal header

const WhatsAppModal = ({ onClose }) => {
    // Replace with your actual WhatsApp number for the support chat
    const whatsappSupportLink = "https://wa.me/917414879104"; // e.g., +919876543210

    return (
        <div className="whatsapp-modal-overlay">
            <div className="whatsapp-modal-content">
                <div className="whatsapp-modal-header">
                    <div className="whatsapp-header-left">
                        <img src={whatsappIconSmall} alt="WhatsApp" className="whatsapp-header-icon" />
                        <span>Start a Conversation</span>
                    </div>
                    <button onClick={onClose} className="whatsapp-modal-close-button">
                        <img src={closeIcon} alt="Close" />
                    </button>
                </div>
                <div className="whatsapp-modal-body">
                    <p className="whatsapp-modal-intro">Hi! Click one of our member below to chat on <span className="whatsapp-highlight">WhatsApp</span></p>
                    <p className="whatsapp-modal-reply-time">The team typically replies in a few minutes.</p>

                    <a href={whatsappSupportLink} target="_blank" rel="noopener noreferrer" className="whatsapp-support-card">
                        <div className="whatsapp-support-left">
                            <img src={whatsappIconSmall} alt="Support" className="whatsapp-support-card-icon" />
                            <span>Support</span>
                        </div>
                        <img src={whatsappIconSmall} alt="Chat" className="whatsapp-support-card-chat-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppModal;
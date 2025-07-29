import React, { useState } from 'react';
import '../index.css'; // Import the merged CSS file
import whatsappIcon from '../assets/whatsapp-small.png';
import supportIcon from '../assets/whatsapp-small.png';
import closeIcon from '../assets/whatsapp-small.png'; // Generic close icon for the main button
import WhatsAppModal from './WhatsAppModal'; // Import the modal component

/**
 * FloatingHelpButton Component
 * Manages the floating "Need Help?" text, WhatsApp button (which opens a modal),
 * and a general support button.
 */
const FloatingHelpButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        // The main container for all floating elements, fixed to the viewport
        <div className="floating-help-wrapper">
            {/* The WhatsApp modal is positioned absolutely relative to this wrapper */}
            {isModalOpen && <WhatsAppModal onClose={closeModal} />}

            <div className="floating-help">
                <div className="help-text">Need Help? Chat with us</div>
                {/* Always show the WhatsApp button, which toggles the modal */}
                <button onClick={isModalOpen ? closeModal : openModal} className="whatsapp-button">
                    <img src={isModalOpen ? closeIcon : whatsappIcon} alt={isModalOpen ? "Close" : "WhatsApp"} className="whatsapp-icon" />
                </button>
                <button className="support-icon-button">
                    <img src={supportIcon} alt="Support" className="support-icon" />
                </button>
            </div>
        </div>
    );
};

export default FloatingHelpButton;
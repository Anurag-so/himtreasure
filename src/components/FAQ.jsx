// src/components/FAQ.jsx
import React, { useState } from 'react';
import '../index.css'; // Create this CSS file for FAQ specific styles

// A simple AccordionItem component
const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={toggleAccordion}>
                <span className="accordion-question">{question}</span>
                <span className="accordion-icon">{isOpen ? '↑' : '↓'}</span>
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="faq-header-wrapper">
                <div className="faq-header-left">
                    <p className="faq-tag">Frequently Asked Questions</p>
                    <h2 className="faq-main-heading">Find answers to your most common questions</h2>
                    <p className="faq-left-description">
                        We are dedicated to providing unparalleled services that drive results and
                        exceed expectations. Here's why businesses choose us as their go-to digital
                        marketing partner. Looking to Achieve Exceptional Growth and Success.
                    </p>
                </div>
                <p className="faq-header-right-description">
                    Explore our most recent articles and blog posts to stay informed about the
                    latest trends, strategies, and insights in digital marketing. Our expert team
                    shares valuable knowledge to help you.
                </p>
            </div>

            <div className="faq-columns-grid">
                <div className="faq-column">
                    <AccordionItem
                        question="How to Change my Photo from Admin Dashboard?"
                        answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
                    />
                    <AccordionItem
                        question="How to Change my Password easily?"
                        answer="Separated they live in Bookmarksgrove right at the coast, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    />
                    <AccordionItem
                        question="How to Change my Subscription Plan using PayPal"
                        answer="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to fly into the far World of Grammar."
                    />
                    {/* Add more FAQ items for the left column */}
                </div>

                <div className="faq-column">
                    <AccordionItem
                        question="How to Change my Photo from Admin Dashboard?"
                        answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
                    />
                    <AccordionItem
                        question="How to Change my Password easily?"
                        answer="Separated they live in Bookmarksgrove right at the coast, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    />
                    <AccordionItem
                        question="How to Change my Subscription Plan using PayPal"
                        answer="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to fly into the far World of Grammar."
                    />
                    {/* Add more FAQ items for the right column */}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
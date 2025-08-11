import React from 'react';
import './WebDevlopment.css';

// Import your images (replace with actual paths)
import teamImage from '../assets/blog-learn.png';
import webDevServiceImage from '../assets/blog-learn.png';
import advancedToolsImage from '../assets/blog-learn.png';
import webAppDevImage from '../assets/blog-learn.png';
import eCommerceDevImage from '../assets/blog-learn.png';
import magentoDevImage from '../assets/blog-learn.png';
import cmsImage from '../assets/blog-learn.png';
import websiteMaintenanceImage from '../assets/blog-learn.png';
import portalDevelopmentImage from '../assets/blog-learn.png';

const WebDevelopmentWithoutNavbar = () => {
    const services = [
        {
            image: webAppDevImage,
            title: "Web Application Development",
            description: "We handle design, integration, and maintenance for secure, scalable, and seamless experiences across devices, allowing you to focus on core objectives while we manage your digital presence efficiently.",
            features: ["Customized Solutions", "Scalable Architecture", "Responsive Design", "User-Friendly Interface", "Strong Functionality"]
        },
        {
            image: eCommerceDevImage,
            title: "E-commerce Development",
            description: "Tailor-made for your requirements, we'll create a user-friendly online store. Our team ensures seamless integration with your existing tools, with expertise in both comprehensive e-commerce platforms and platform enhancements.",
            features: ["User interface design", "Responsive layout", "User-friendly Checkout", "Inventory Management", "Mobile Optimization"]
        },
        {
            image: magentoDevImage,
            title: "Magento Website Development",
            description: "We specialize in building custom Magento stores from scratch or seamlessly migrating your current platform to Magento. Our services include theme development, integrations, and implementing top-notch security measures.",
            features: ["Magento Expertise", "Customizable Themes", "E-commerce Functionality", "Responsive Design", "Performance Optimization"]
        },
        {
            image: cmsImage,
            title: "CMS Development",
            description: "Ensuring a well-structured website is crucial for a robust online presence. We specialize in developing and refining Content Management Systems (CMS), vital for diverse websites, from informational to e-commerce platforms. Our expertise ensures optimal optimization, and functionality, empowering businesses with effective digital solutions to enhance their online visibility and performance.",
            features: ["Content Management System", "Easy-to-Use Interface", "Customizable Templates", "Workflow Automation", "Multi-User Collaboration"]
        },
        {
            image: websiteMaintenanceImage,
            title: "Website Maintenance",
            description: "Experience peace of mind with our adaptable website maintenance plans, offering monthly, hourly, or efforts options. Trust AWPS, a globally recognized maintenance services provider, to cater to your website’s needs. With our expertise, ensure your website remains optimized and secure, allowing you to focus on your core business activities while we handle the intricacies of maintenance, ensuring your online presence operates smoothly at all times.",
            features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Management", "Bug Fixing"]
        },
        {
            image: portalDevelopmentImage,
            title: "Portal Development",
            description: "Being a leading web app developer, we specialize in crafting bespoke web and enterprise portals that cater to your unique business requirements. Our portals guarantee optimal performance, cost-effectiveness, and scalability, seamlessly integrating features such as collaborative tools, streamlined access to aggregated information, self-service workflows, and enterprise social functionalities.",
            features: ["Custom Portal Solutions", "User Authentication", "Content Management", "Scalable Architecture", "Smooth Integration"]
        }
    ];

    const processSteps = [
        {
            title: "Strategy",
            description: "We employ a strategic approach to web app development, thoroughly analyzing your business model, market dynamics, and product positioning to ensure precision and effectiveness."
        },
        {
            title: "Product Design",
            description: "Our approach involves bringing together a multidisciplinary team consisting of Strategists, Designers, and Developers."
        },
        {
            title: "Development",
            description: "We uphold an agile and efficient development process, harnessing the expertise of highly skilled teams. Each project is supervised by seasoned managers committed to upholding exemplary standards of code quality."
        },
        {
            title: "Quality Assurance",
            description: "We conduct thorough testing to identify and resolve any bugs or issues. Our goal is to deliver solutions that are not only free of bugs but also dependable, safe, and secure, ensuring a seamless user experience."
        }
    ];

    const faqs = [
        {
            question: "What distinguishes your web development service from others?",
            answer: "We distinguish ourselves by prioritizing top-notch applications, ensuring a transparent and seamless development process, and drawing on over eleven years of experience in collaborating with leading companies across various industries.",
            open: true
        },
        {
            question: "Could you elaborate on your approach to web application development?",
            answer: "From initial design to continual maintenance, we manage all facets to ensure a secure, scalable, and seamless experience across diverse devices and platforms.",
            open: true
        },
        {
            question: "Which technologies are employed in your web development endeavors?",
            answer: ""
        },
        {
            question: "What solutions do you offer for Magento website development?",
            answer: ""
        },
        {
            question: "How do you guarantee seamless integration for e-commerce development projects?",
            answer: ""
        },
        {
            question: "What makes CMS development vital for a strong online presence?",
            answer: ""
        },
        {
            question: "How do you approach web app development projects?",
            answer: ""
        },
        {
            question: "How do you guarantee the quality of your web development projects?",
            answer: ""
        }
    ];

    // Placeholder for FAQ state management
    const [openFaqs, setOpenFaqs] = React.useState({});

    const toggleFaq = (index) => {
        setOpenFaqs(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="web-development-page">
            {/* Hero Section with an image */}
            <section className="web-dev-hero">
                <img src={teamImage} alt="A team working together" />
            </section>

            {/* Web Development Service Section */}
            <section className="text-with-image-section">
                <div className="text-content">
                    <h2>Web Development Service</h2>
                    <p>Our company specializes in creating advanced websites and online applications with the latest technologies. Our experienced team handles diverse projects, from interactive websites to internal systems, ensuring top-tier quality and a seamless process. With over eleven years of experience, we've partnered with leading companies across various industries, continuously engaging with the latest internet technologies. We focus on using the most effective tools to tailor your web application to your needs, guaranteeing exceptional results.</p>
                </div>
                <div className="image-content">
                    <img src={webDevServiceImage} alt="Web Development" />
                </div>
            </section>

            {/* We Use Advanced Tools Section */}
            <section className="text-with-image-section reversed">
                <div className="image-content">
                    <img src={advancedToolsImage} alt="Advanced Tools" />
                </div>
                <div className="text-content">
                    <h2>We Use Advanced Tools To Complete Your Project</h2>
                    <p>Our devoted development team ensures that all our projects are crafted using the latest applications, coding languages, and technologies, allowing us to produce stunning results for our clients. We not only employ the finest tools but also tailor our process to uniquely suit each project, guaranteeing that the final product is one that is both our clients and we are proud of.</p>
                    <div className="tools-list">
                        <div className="tool-item"><span>✔</span> PHP Frameworks</div>
                        <div className="tool-item"><span>✔</span> Node.js</div>
                        <div className="tool-item"><span>✔</span> WordPress</div>
                        <div className="tool-item"><span>✔</span> React.js</div>
                        <div className="tool-item"><span>✔</span> Shopify</div>
                        <div className="tool-item"><span>✔</span> Angular.js</div>
                    </div>
                </div>
            </section>

            {/* Web Development Services We Offer Section */}
            <section className="web-dev-services-section">
                <h2>Web Development Services We Offer</h2>
                <div className="services-container">
                    {services.slice(0, 3).map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-image-container">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}:</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}><span>✔</span> {feature}</li>
                                ))}
                            </ul>
                            <button className="get-quote-button">Get a quote</button>
                        </div>
                    ))}
                </div>
                <div className="services-container" style={{ marginTop: '30px' }}>
                     {services.slice(3, 6).map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-image-container">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}:</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}><span>✔</span> {feature}</li>
                                ))}
                            </ul>
                            <button className="get-quote-button">Get a quote</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="approach-section">
                <h2>Our Approach To Effective Web Development Process</h2>
                <div className="approach-container">
                    {processSteps.map((step, index) => (
                        <div className="approach-card" key={index}>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-column">
                        {faqs.slice(0, 4).map((faq, index) => (
                            <div className="faq-item" key={index}>
                                <h4 onClick={() => toggleFaq(index)}>
                                    <span>{openFaqs[index] ? '−' : '+'}</span> {faq.question}
                                </h4>
                                {openFaqs[index] && <p className="faq-answer">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                    <div className="faq-column">
                        {faqs.slice(4, 8).map((faq, index) => (
                            <div className="faq-item" key={index + 4}>
                                <h4 onClick={() => toggleFaq(index + 4)}>
                                    <span>{openFaqs[index + 4] ? '−' : '+'}</span> {faq.question}
                                </h4>
                                {openFaqs[index + 4] && <p className="faq-answer">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentWithoutNavbar;
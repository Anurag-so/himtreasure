// src/components/Blogs.jsx
import React from 'react';
import '../index.css'; // Create this CSS file for BlogSection specific styles
import blogimage from '../assets/blog-seo.png';
import bloglearn from '../assets/blog-learn.png';
import phpimage from '../assets/php-frame.png'



const Blogs = () => {
    return (
        <section className="blogs-section">
            <div className="blogs-header-wrapper">
                <div className="blogs-header-text">
                    <p className="blogs-tag">Our Blogs</p>
                    <h2 className="blogs-main-heading">Stay updated with our latest articles</h2>
                </div>
                <p className="blogs-description">
                    Explore our most recent articles and blog posts to stay informed about the latest trends, strategies, and insights in digital marketing. Our expert team shares valuable knowledge to help you.
                </p>
            </div>

            <div className="blog-cards-grid">
                {/* Blog Card 1 */}
                <div className="blog-card">
                    <img src={blogimage} alt="SEO Blog" className="blog-image" />
                    <div className="card-content">
                        <h3 className="card-title">8 WAYS TO INCREASE TRAFFIC TO YOUR WEBSITE</h3>
                        <p className="card-excerpt">Website without traffic is considered an market without customers. If you have attracted website and great product there is no surely that it will going to be sold You have...</p>
                        <button className="read-more-button">Learn More</button>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="blog-card">
                    <img src={bloglearn} alt="Online Learning" className="blog-image" />
                    <div className="card-content">
                        <h3 className="card-title">Is Online Learning Is As Good As Face-To-Face Learning Experience?</h3>
                        <p className="card-excerpt">Recently, Offline and Online modes of learning and teaching both are available. It's totally depended upon the individual which mode of learning he wants to prefer. One side having numerous...</p>
                        <button className="read-more-button">Learn More</button>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="blog-card">
                    <img src={phpimage} alt="PHP Frameworks" className="blog-image" />
                    <div className="card-content">
                        <h3 className="card-title">The Six most powerful PHP frameworks to use in your next project (2022)</h3>
                        <p className="card-excerpt">When you consider web development aside from HTML, CSS & JAVASCRIPT one thing that comes into mind is PHP language. People have their opinion that PHP is dead somewhere but...</p>
                        <button className="read-more-button">Learn More</button>
                    </div>
                </div>
                {/* Add more blog cards if needed */}
            </div>
        </section>
    );
};

export default Blogs;
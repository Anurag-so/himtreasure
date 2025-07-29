import React, { useState, useEffect } from 'react';
import './Blog.css'; // All styles for the Blog page
import Footer from './Footer'; // Reusing the Footer component
// import blog-traffic from '../assets/blog-traffic.png';



// Sample data for blog posts (expand this as needed)
const blogPostsData = [
  {
    id: 1,
    title: '8 WAYS TO INCREASE TRAFFIC TO YOUR WEBSITE',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/03/INCREASE-TRAFFIC-TO-YOUR-WEBSITE.jpg',
    excerpt: 'Website traffic is often a vital metric in any internet business or activity. If you have an online store, website traffic is directly related to sales. It is also an important indicator of business growth. There are many ways to increase traffic to your website. Here are some of them:',
    category: 'Marketing',
  },
  {
    id: 2,
    title: 'Is Online Learning As Good As Face-To-Face Learning Experience?',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/03/Online-Learning.jpg',
    excerpt: 'Recently, Offline and Online modes of learning are both available. It is purely dependent upon the individual’s needs and preferences to choose a suitable mode for themselves. There is a continuous debate about the effectiveness of both methods and which method is a better way of learning.',
    category: 'Education',
  },
  {
    id: 3,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/02/six.jpg',
    excerpt: 'Web development is constantly evolving. Stay ahead of the curve by exploring the latest trends shaping the future of the web.',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Designing User-Friendly Interfaces: Best Practices',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/02/laravel.png',
    excerpt: 'Creating intuitive and enjoyable user interfaces is crucial for any successful digital product. Discover key principles for effective UI/UX design.',
    category: 'Design',
  },
  {
    id: 5,
    title: 'The Rise of AI in Everyday Life and Business',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/02/plan.png',
    excerpt: 'Artificial Intelligence is no longer just a sci-fi concept. Learn how AI is integrating into daily routines and transforming industries.',
    category: 'Technology',
  },
  {
    id: 6,
    title: 'E-commerce Strategies for Small Businesses',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/02/plan.png',
    excerpt: 'Launch and grow your online store with effective e-commerce strategies tailored for small and medium-sized enterprises.',
    category: 'Business',
  },
  {
    id: 7,
    title: 'Content Marketing: Your Key to Digital Success',
    imageUrl: 'https://himtreasure.com/wp-content/uploads/2022/01/omicron.jpg',
    excerpt: 'High-quality content is the backbone of any successful digital marketing strategy. Explore tips for engaging your audience.',
    category: 'Marketing',
  },
];

// Hero banner for blog
const BlogHero = () => (
  <section className="blog-hero">
    <div className="container">
      <h1>OUR BLOG</h1>
    </div>
  </section>
);

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(2); // Initial posts to show, as per screenshot

  useEffect(() => {
    setVisiblePosts(blogPostsData.slice(0, loadMoreCount));
  }, [loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount(prevCount => Math.min(prevCount + 2, blogPostsData.length));
  };

  // For Recent and Popular Posts, simply slice from the data or have dedicated data
  const recentPosts = blogPostsData.slice(0, 4); // First 4 as recent
  const popularPosts = blogPostsData.slice(1, 5); // Example: different slice for popular

  return (
    <div className="blog-page-layout">
      {/* HEADER SECTION REMOVED HERE */}

      <BlogHero />

      <section className="blog-content-section">
        <div className="container blog-main-grid">
          <main className="blog-posts-main">
            {visiblePosts.map(post => (
              <div key={post.id} className="blog-post-card">
                <img src={post.imageUrl} alt={post.title} />
                <div className="blog-post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            ))}
            {loadMoreCount < blogPostsData.length && (
              <div className="load-more-container">
                <button onClick={handleLoadMore} className="load-more-btn">
                  Load More
                </button>
              </div>
            )}
          </main>
          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h4>Recent Post</h4>
              <ul>
                {recentPosts.map(post => (
                  <li key={post.id}>
                    <img src={post.imageUrl} alt={post.title} />
                    <div className="recent-post-info">
                      <p>{post.title}</p>
                      <span>{post.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-section">
              <h4>Popular Post</h4>
              <ul>
                {popularPosts.map(post => (
                  <li key={post.id}>
                    <img src={post.imageUrl} alt={post.title} />
                    <div className="popular-post-info">
                      <p>{post.title}</p>
                      <span>{post.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default Blog;
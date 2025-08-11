import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Portfolio.css';
import Footer from './Footer';

// Data for portfolio items
const portfolioItemsData = [
  { id: 1, category: 'EDUCATION', title: 'One IT', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image178.jpg' },
  { id: 2, category: 'E-COMMERCE', title: 'Invite Mart', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image175.jpg' },
  { id: 3, category: 'HEALTH', title: 'Estate To Estate', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image180.jpg' },
  { id: 4, category: 'HOTEL AND RESTAURANT', title: 'Rasi', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image187.jpg' },
  { id: 5, category: 'HOME AND DECOR', title: 'Growtex', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image182.jpg' },
  { id: 6, category: 'JEWELLERS', title: 'Bedorf', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image188.jpg' },
  { id: 7, category: 'SALON', title: 'Regulatory Affairs', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 8, category: 'OTHER', title: 'Growhes', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 9, category: 'EDUCATION', title: 'ITS', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 10, category: 'E-COMMERCE', title: 'Meat Super', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 11, category: 'HEALTH', title: 'Fitness App', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 12, category: 'HOTEL AND RESTAURANT', title: 'Dine In', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 13, category: 'HOME AND DECOR', title: 'Smart Home', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 14, category: 'JEWELLERS', title: 'Lux Jewelry', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 15, category: 'SALON', title: 'Style Studio', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  // Add more items here if you want a longer scrollable page
  { id: 16, category: 'EDUCATION', title: 'Code Academy', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image178.jpg' },
  { id: 17, category: 'E-COMMERCE', title: 'Fashion Hub', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 18, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 19, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 20, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 21, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 22, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 23, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 24, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 25, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 26, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 27, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 28, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 29, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 30, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 31, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 32, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 33, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 34, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 35, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 36, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 37, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
  { id: 38, category: 'HEALTH', title: 'Wellness Center', imageUrl: 'https://himtreasure.com/wp-content/uploads/2024/02/image185.jpg' },
];

const PortfolioHero = () => (
  <section className="portfolio-hero">
    <div className="container">
      <h1>OUR PORTFOLIO</h1>
    </div>
  </section>
);

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filteredItems, setFilteredItems] = useState([]); // Renamed from displayedItems
  const itemRefs = useRef([]); // To store refs for each portfolio item

  const categories = ['ALL', 'EDUCATION', 'EVENTS', 'E-COMMERCE', 'HEALTH', 'HOTEL AND RESTAURANT', 'HOME AND DECOR', 'JEWELLERS', 'SALON', 'OTHER'];

  // Effect to filter items based on category
  useEffect(() => {
    const items = activeCategory === 'ALL'
      ? portfolioItemsData
      : portfolioItemsData.filter(item => item.category === activeCategory);
    setFilteredItems(items);
    // Important: Clear refs and remove 'in-view' class from existing elements
    // when category changes, so they re-animate on scroll
    itemRefs.current = []; // Clear old refs
    // You might also need to explicitly remove 'in-view' from items that were previously shown
    // A better approach is to rely on re-rendering for new class applications
  }, [activeCategory]);


  // Observer callback to add 'in-view' class
  // We use a Map to keep track of observed elements to avoid re-adding 'in-view' unnecessarily
  const observedMap = useRef(new Map());

  const observerCallback = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!observedMap.current.has(entry.target.dataset.itemId)) { // Check if already handled
          entry.target.classList.add('in-view');
          observedMap.current.set(entry.target.dataset.itemId, true); // Mark as observed
          // Optional: Stop observing once it's in view if you only want it to animate once
          // observer.unobserve(entry.target); // <-- If you uncomment this, define observer outside this callback or pass it.
        }
      } else {
        // Optional: remove 'in-view' class if you want animation to re-play on scroll back up
        // entry.target.classList.remove('in-view');
        // observedMap.current.delete(entry.target.dataset.itemId); // If you remove class, reset observed status
      }
    });
  }, []); // No dependencies for observerCallback as it's self-contained with useRef for observedMap

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null, // viewport as root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the item is visible
    });

     const currentobservedMap = observedMap.current;

    // Observe each current portfolio item
    // Make sure we only observe elements that are actually rendered
    itemRefs.current.forEach(itemRef => {
      if (itemRef) {
        observer.observe(itemRef);
      }
    });

    return () => {
      // Disconnect observer on unmount or when filteredItems change
      observer.disconnect();
      currentobservedMap.clear(); // Clear map on disconnect
    };
  }, [filteredItems, observerCallback]); // Re-run when filteredItems (new set of items) changes

  return (
    <div className="portfolio-page-layout">
      <PortfolioHero />

      <section className="portfolio-content-section">
        <div className="container portfolio-main-grid">
          <aside className="portfolio-sidebar">
            <ul>
              {categories.map(cat => (
                <li
                  key={cat}
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  i{cat}
                </li>
              ))}
            </ul>
          </aside>
          <main className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item"
                ref={el => (itemRefs.current[index] = el)} // Assign ref to element
                data-item-id={item.id} // Add data attribute to uniquely identify item for observedMap
              >
                <img src={item.imageUrl} alt={item.title} />
                <div className="portfolio-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Portfolio;
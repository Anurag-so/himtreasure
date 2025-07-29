import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

/**
 * Counter Component for animating numbers.
 * Uses IntersectionObserver to start counting when visible.
 */
const AnimatedCounter = ({ targetValue, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    let start = 0;
                    const end = targetValue;
                    const increment = end / (duration / 10);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            start = end;
                            clearInterval(timer);
                            hasAnimated.current = true;
                        }
                        setCount(Math.floor(start));
                    }, 10);

                    return () => clearInterval(timer);
                }
            },
            {
                threshold: 0.5,
            }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [targetValue, duration]);

    return (
        <span ref={ref} className="animated-number">
            {count}
            {suffix}
        </span>
    );
};


const AchievementsSection = () => {
    return (
        <section className="achievements-section">
            <div className="achievements-left-column">
                <p className="achievements-tag">Our Achievements</p>
                <h3>Discover our <br /> impressive <span className="highlight">stats<br></br> and achievements</span></h3>
                {/* <--- ADD THIS DESCRIPTION TEXT IF IT'S MISSING */}
                <p className="achievements-description-text">
                    We pride ourselves on delivering exceptional results. Here are some of our key accomplishments that
                    highlight our expertise and commitment to helping our clients succeed.
                </p>
            </div>
            <div className="achievements-right-grid">
                <div className="achievement-card">
                    <p className="achievement-number">
                        <AnimatedCounter targetValue={98} suffix="+" />
                    </p>
                    <p className="achievement-description">Satisfied Clients Across Various Industries</p>
                </div>
                <div className="achievement-card">
                    <p className="achievement-number">
                        <AnimatedCounter targetValue={99} suffix="%" />
                    </p>
                    <p className="achievement-description">Increased Client Revenue by an Average.</p>
                </div>
                <div className="achievement-card">
                    <p className="achievement-number">
                        <AnimatedCounter targetValue={50} suffix="%" />
                    </p>
                    <p className="achievement-description">Achieved a 50% Increase in Organic Traffic for Clients</p>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
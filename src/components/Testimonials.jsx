import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
            quote: '"GTA consistently delivers exceptional results. Our office complex has never looked better. Highly recommend their daily janitorial team!"',
            author: 'Sarah Jenkins',
            location: 'Property Manager, DT Core'
        },
        {
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
            quote: '"We needed a reliable partner for post-construction cleanup across multiple retail sites. They handled all the debris and dust flawlessly."',
            author: 'David Chen',
            location: 'Operations Director'
        },
        {
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
            quote: '"The dedication to sanitation at our clinic is top notch. Their staff is thoroughly trained in medical facility protocols."',
            author: 'Dr. Emily Torres',
            location: 'Clinic Administrator'
        },
        {
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
            quote: '"Flexible scheduling means they work around our weird retail hours. The floor waxing service brought our showroom back to life."',
            author: 'Mark Rutherford',
            location: 'Retail Owner'
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <span className="hero-subtitle" style={{ color: 'var(--text-muted)' }}>TESTIMONIALS</span>
                    <h2>What our customers are saying</h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">{review.quote}</p>
                                <div className="testimonial-info">
                                    <div className="testimonial-author">{review.author}</div>
                                    <div className="testimonial-location">{review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-dots" aria-label="Testimonial navigation">
                    <button className="dot" aria-label="Previous testimonial">&lt;</button>
                    <button className="dot" aria-label="Next testimonial">&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import { Award, Users, Clock, Shield } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './MeetTheOwner.css';

const MeetTheOwner = () => {
    const sectionRef = useScrollReveal();

    const highlights = [
        { icon: Clock, label: 'Experience', value: '18+ Years' },
        { icon: Users, label: 'Team Size', value: '50+ Cleaners' },
        { icon: Award, label: 'Clients', value: '200+ Active' },
        { icon: Shield, label: 'Guarantee', value: '100% Satisfaction' },
    ];

    return (
        <section className="owner-section" id="about" ref={sectionRef}>
            <div className="container owner-container">
                <div className="owner-content">
                    <span className="hero-subtitle" style={{ color: 'var(--primary-color)' }}>Meet the Founder</span>
                    <h2>Danny Gil</h2>
                    <p className="owner-role">Founder & Operations Director</p>
                    <p className="owner-description">
                        With over 18 years of hands-on experience in the commercial cleaning industry,
                        I started GTA City Cleaning Services with a simple promise: deliver the highest
                        standard of cleaning every single time. What began as a one-person operation has
                        grown into a trusted team serving 200+ clients across the Greater Toronto Area.
                    </p>
                    <p className="owner-description">
                        When you hire GTA City Cleaning, you get my personal guarantee of quality.
                        Every job is overseen to ensure we meet the standards that built our reputation
                        for excellence.
                    </p>

                    <div className="owner-highlights">
                        {highlights.map((item, idx) => (
                            <div className="highlight-item" key={idx}>
                                <div className="highlight-icon">
                                    <item.icon size={20} />
                                </div>
                                <div className="highlight-text">
                                    <span className="highlight-value">{item.value}</span>
                                    <span className="highlight-label">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="owner-image-section">
                    <div className="owner-image-wrapper">
                        <img
                            src="/images/founder_danny.png"
                            alt="Danny Gil - Founder of GTA City Cleaning Services"
                            loading="lazy"
                            decoding="async"
                            width="500"
                            height="600"
                        />
                        <div className="owner-image-accent"></div>
                    </div>
                    <div className="owner-quote">
                        <blockquote>
                            "Quality isn't just a promise—it's the foundation of everything we do."
                        </blockquote>
                        <cite>— Danny Gil, Founder</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTheOwner;

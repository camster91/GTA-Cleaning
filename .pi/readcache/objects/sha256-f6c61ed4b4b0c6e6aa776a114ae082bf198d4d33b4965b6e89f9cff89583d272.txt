import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ShieldCheck, Users, Award, Sparkles } from 'lucide-react';
import MeetTheOwner from '../components/MeetTheOwner';
import './About.css';

const benefits = [
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock service to fit your schedule without disrupting your business operations.' },
    { icon: ShieldCheck, title: 'Insured & Bonded', description: 'Full liability coverage for your peace of mind. Every technician is background-checked and certified.' },
    { icon: Users, title: 'Trained Professionals', description: 'Our staff undergoes rigorous training in commercial cleaning protocols and safety standards.' },
    { icon: Award, title: '18+ Years Experience', description: 'Nearly two decades of excellence serving the Greater Toronto Area\'s commercial spaces.' },
    { icon: Sparkles, title: 'Eco-Friendly Products', description: 'Green-certified cleaning solutions that are tough on grime but gentle on the environment.' },
    { icon: CheckCircle2, title: '100% Satisfaction', description: 'We stand behind every job with a satisfaction guarantee. If it\'s not right, we\'ll make it right.' },
];

const About = () => {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn about GTA City Cleaning Services - 18+ years of trusted commercial cleaning in the Greater Toronto Area. Insured, bonded, and eco-friendly. Meet our founder Danny Gil."
                path="/about"
            />

            {/* 1. Hero Section */}
            <section className="about-hero bg-pattern diagonal-section">
                <div className="container about-hero-container animate-fade-in">
                    <span className="hero-badge">ABOUT US</span>
                    <h1 className="about-hero-title">Built on trust, driven by excellence</h1>
                    <p className="about-hero-subtitle">
                        For over 18 years, GTA City Cleaning Services has been the trusted cleaning partner for commercial properties across the Greater Toronto Area.
                    </p>
                </div>
            </section>

            {/* 2. Full-width Image */}
            <section className="about-image-section">
                <div className="about-full-image"></div>
            </section>

            {/* 3. Story / Mission Block */}
            <section className="section about-story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-text-col">
                            <span className="subtitle">OUR STORY</span>
                            <h2>A commitment to precision, consistency, and absolute client satisfaction</h2>
                        </div>
                        <div className="story-content-col">
                            <p>
                                Founded in 2007, GTA City Cleaning Services started with a simple promise: deliver the highest standard of commercial cleaning every single time. What began as a small operation serving local offices has grown into a full-service commercial cleaning company trusted by over 200 active clients.
                            </p>
                            <p>
                                We specialize in office buildings, medical facilities, retail spaces, post-construction cleanup, and floor maintenance. Our team operates 24/7, ensuring your business spaces are always pristine, safe, and ready for whatever comes next.
                            </p>
                            <Link to="/contact" className="btn btn-dark" style={{ marginTop: '1rem' }}>Get in touch</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Benefits / Why Choose Us Grid */}
            <section className="section about-benefits bg-light diagonal-inverse">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">WHY CHOOSE US</span>
                        <h2>The GTA Cleaning advantage</h2>
                        <p className="description" style={{ margin: '0 auto', maxWidth: '600px' }}>
                            Every detail matters. Here's why businesses across the GTA trust us with their commercial spaces.
                        </p>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div className="benefit-card" key={idx}>
                                    <div className="benefit-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Meet the Founder - Same as Home page */}
            <MeetTheOwner />

            {/* 6. CTA Banner */}
            <section className="about-cta bg-pattern">
                <div className="container about-cta-container">
                    <h2>Ready to experience the difference?</h2>
                    <p>Let's discuss how we can keep your commercial space pristine.</p>
                    <Link to="/contact" className="btn btn-primary">Contact us</Link>
                </div>
            </section>
        </div>
    );
};

export default About;

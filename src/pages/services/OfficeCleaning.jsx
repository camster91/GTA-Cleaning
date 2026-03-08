import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, Clock, ShieldCheck, Sparkles, ArrowRight, Phone } from 'lucide-react';
import './ServiceLanding.css';

const OfficeCleaning = () => {
    const benefits = [
        {
            icon: Sparkles,
            title: 'Daily & Weekly Maintenance',
            description: 'Regular cleaning schedules tailored to your office hours. We work before or after your team to ensure zero disruption.'
        },
        {
            icon: ShieldCheck,
            title: 'Eco-Friendly Products',
            description: 'Green-certified cleaning solutions that are safe for your employees and the environment.'
        },
        {
            icon: Clock,
            title: '24/7 Availability',
            description: 'Flexible scheduling including nights and weekends. We adapt to your business needs.'
        },
        {
            icon: Building2,
            title: 'All Office Types',
            description: 'From small startups to large corporate buildings. We scale our services to match your space.'
        }
    ];

    const services = [
        'Desk and workstation sanitization',
        'Common area cleaning',
        'Kitchen and break room cleaning',
        'Restroom deep cleaning',
        'Trash removal and recycling',
        'Floor sweeping, mopping, and vacuuming',
        'Window and glass cleaning',
        'Dusting and surface cleaning'
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Office Cleaning Services Toronto | GTA Commercial Cleaners"
                description="Professional office cleaning services in Toronto & GTA. Daily, weekly & custom schedules. 18+ years experience, insured & bonded. Get a free quote today!"
                path="/services/office-cleaning"
            />

            {/* Hero Section */}
            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Office Cleaning</span>
                            </div>
                            <h1>Professional Office Cleaning Services in Toronto</h1>
                            <p className="service-hero-subtitle">
                                Keep your workspace pristine with our comprehensive office cleaning services.
                                Trusted by 200+ businesses across the Greater Toronto Area for 18+ years.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Quote
                                </a>
                                <a href="#services" className="btn btn-outline btn-lg">View Services</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item">
                                    <CheckCircle2 size={16} />
                                    Insured & Bonded
                                </span>
                                <span className="badge-item">
                                    <CheckCircle2 size={16} />
                                    18+ Years Experience
                                </span>
                                <span className="badge-item">
                                    <CheckCircle2 size={16} />
                                    200+ Happy Clients
                                </span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="/images/office_clean.png"
                                alt="Professional office cleaning in Toronto"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="service-benefits section bg-light" id="services">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">WHY CHOOSE US</span>
                        <h2>The GTA Cleaning advantage for your office</h2>
                        <p className="description">
                            We understand that a clean office is essential for productivity and employee well-being.
                        </p>
                    </div>
                    <div className="benefits-grid-4">
                        {benefits.map((benefit, idx) => (
                            <div className="benefit-card-v2" key={idx}>
                                <div className="benefit-icon-v2">
                                    <benefit.icon size={28} />
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="service-detail section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-content">
                            <span className="subtitle">OUR SERVICES</span>
                            <h2>Comprehensive office cleaning solutions</h2>
                            <p className="lead">
                                From daily maintenance to deep cleaning, we provide everything your office needs
                                to maintain a professional, healthy environment.
                            </p>
                            <ul className="service-list">
                                {services.map((service, idx) => (
                                    <li key={idx}>
                                        <CheckCircle2 size={20} />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-dark btn-lg">
                                Schedule Your Cleaning
                                <ArrowRight size={20} />
                            </a>
                        </div>
                        <div className="service-detail-image">
                            <img
                                src="/images/hero_floor.png"
                                alt="Office cleaning team at work"
                                loading="lazy"
                            />
                            <div className="service-stat-card">
                                <strong>200+</strong>
                                <span>Offices Cleaned Weekly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="service-process section bg-pattern">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">OUR PROCESS</span>
                        <h2>How our office cleaning works</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Free Consultation</h3>
                            <p>We assess your office space and discuss your specific cleaning needs and schedule.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Customized Plan</h3>
                            <p>We create a tailored cleaning plan that fits your budget and requirements.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Professional Cleaning</h3>
                            <p>Our trained team arrives on schedule with all necessary equipment and supplies.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Quality Check</h3>
                            <p>We perform regular inspections to ensure our high standards are maintained.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta section" id="contact">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Ready for a cleaner office?</h2>
                            <p>Get a free, no-obligation quote for your office cleaning needs. We service all areas in the Greater Toronto Area.</p>
                            <div className="cta-buttons">
                                <a href="tel:4160000000" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Call 647-901-1995
                                </a>
                                <Link to="/contact" className="btn btn-outline-light btn-lg">
                                    Request Quote Online
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="service-faq section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">FAQ</span>
                        <h2>Common questions about office cleaning</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>How often should an office be cleaned?</h4>
                            <p>Most offices benefit from daily cleaning for high-traffic areas, with deep cleaning weekly or monthly depending on office size and usage.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What time do you clean offices?</h4>
                            <p>We work around your schedule. Most clients prefer after-hours cleaning (evenings or weekends) to avoid disrupting work.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Are your cleaning products safe?</h4>
                            <p>Yes! We use eco-friendly, green-certified products that are safe for employees while being tough on germs and dirt.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide all cleaning supplies?</h4>
                            <p>Absolutely. We bring all necessary equipment, cleaning products, and supplies. You don't need to provide anything.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="related-services section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">MORE SERVICES</span>
                        <h2>Explore our other cleaning services</h2>
                    </div>
                    <div className="related-grid">
                        <Link to="/services/post-construction-cleaning" className="related-card">
                            <h3>Post-Construction Cleaning</h3>
                            <p>Get your newly renovated space ready for business</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/floor-maintenance" className="related-card">
                            <h3>Floor Maintenance</h3>
                            <p>Stripping, waxing & carpet cleaning services</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/residential-cleaning" className="related-card">
                            <h3>Residential Cleaning</h3>
                            <p>Move-in, move-out, and deep cleaning services</p>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfficeCleaning;

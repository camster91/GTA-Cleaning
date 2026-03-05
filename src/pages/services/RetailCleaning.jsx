import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Store, CheckCircle2, Clock, Sparkles, Users, ArrowRight, Phone } from 'lucide-react';
import './ServiceLanding.css';

const RetailCleaning = () => {
    const benefits = [
        {
            icon: Clock,
            title: 'After-Hours Service',
            description: 'We clean when your store is closed. Flexible scheduling including early mornings and overnight cleaning.'
        },
        {
            icon: Sparkles,
            title: 'First Impressions Matter',
            description: 'Spotless floors, gleaming windows, and pristine surfaces that welcome your customers every day.'
        },
        {
            icon: Users,
            title: 'High-Traffic Expertise',
            description: 'Specialized cleaning for busy retail environments. We handle the dirt and wear of constant foot traffic.'
        },
        {
            icon: Store,
            title: 'All Retail Types',
            description: 'From boutiques to big box stores, malls to standalone shops. We scale to fit your retail space.'
        }
    ];

    const services = [
        'Daily floor cleaning (sweeping, mopping, vacuuming)',
        'Window and glass display cleaning',
        'Dusting of shelves and merchandise areas',
        'Fitting room sanitization',
        'Restroom cleaning and restocking',
        'Trash removal and recycling',
        'Entrance and storefront cleaning',
        'High-touch surface disinfection',
        'Seasonal deep cleaning',
        'Parking lot litter pickup'
    ];

    const retailTypes = [
        'Clothing & Fashion Boutiques',
        'Grocery & Convenience Stores',
        'Electronics & Tech Retailers',
        'Furniture & Home Goods',
        'Pharmacies & Drug Stores',
        'Department Stores',
        'Shopping Malls & Centers',
        'Specialty Retail Shops'
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Retail Store Cleaning Toronto | Commercial Cleaning GTA"
                description="Professional retail cleaning services in Toronto. Stores, malls & showrooms. After-hours service, 7 days a week. Get your free quote today!"
                path="/services/retail-cleaning"
            />

            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Retail Cleaning</span>
                            </div>
                            <h1>Retail Store & Commercial Cleaning Services</h1>
                            <p className="service-hero-subtitle">
                                Create a welcoming shopping environment with our professional retail cleaning.
                                Trusted by stores across the GTA to keep spaces pristine and customers impressed.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Quote
                                </a>
                                <a href="#services" className="btn btn-outline btn-lg">View Services</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item"><CheckCircle2 size={16} />After-Hours Available</span>
                                <span className="badge-item"><CheckCircle2 size={16} />7 Days a Week</span>
                                <span className="badge-item"><CheckCircle2 size={16} />200+ Retail Clients</span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2300&auto=format&fit=crop"
                                alt="Professional retail store cleaning"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-benefits section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">WHY RETAILERS CHOOSE US</span>
                        <h2>Cleaning that sells</h2>
                    </div>
                    <div className="benefits-grid-4">
                        {benefits.map((benefit, idx) => (
                            <div className="benefit-card-v2" key={idx}>
                                <div className="benefit-icon-v2"><benefit.icon size={28} /></div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-detail section" id="services">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-image">
                            <img
                                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2300&auto=format&fit=crop"
                                alt="Retail cleaning services"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-detail-content">
                            <span className="subtitle">OUR SERVICES</span>
                            <h2>Complete retail cleaning solutions</h2>
                            <p className="lead">
                                From daily maintenance to seasonal deep cleans, we keep your retail
                                space looking its best for every customer.
                            </p>
                            <ul className="service-list">
                                {services.map((service, idx) => (
                                    <li key={idx}><CheckCircle2 size={20} />{service}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-dark btn-lg">
                                Schedule Cleaning
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-areas section bg-pattern">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">RETAIL TYPES</span>
                        <h2>We clean all retail environments</h2>
                    </div>
                    <div className="areas-grid retail">
                        {retailTypes.map((type, idx) => (
                            <div className="area-card" key={idx}>
                                <Store size={24} />
                                <span>{type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-quote section">
                <div className="container">
                    <blockquote className="retail-quote">
                        <p>"A clean store is a successful store. We make sure your customers notice the quality of your products, not the dust on your shelves."</p>
                    </blockquote>
                </div>
            </section>

            <section className="service-cta section" id="contact">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Ready to impress your customers?</h2>
                            <p>Get a customized cleaning plan for your retail space. We work around your hours to ensure zero disruption to your business.</p>
                            <div className="cta-buttons">
                                <a href="tel:4160000000" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Call (416) 000-0000
                                </a>
                                <Link to="/contact" className="btn btn-outline-light btn-lg">
                                    Request Quote Online
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-services section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">MORE SERVICES</span>
                        <h2>Explore other services</h2>
                    </div>
                    <div className="related-grid">
                        <Link to="/services/office-cleaning" className="related-card">
                            <h3>Office Cleaning</h3>
                            <p>Professional office maintenance</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/floor-maintenance" className="related-card">
                            <h3>Floor Maintenance</h3>
                            <p>Floor care for high-traffic areas</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/post-construction-cleaning" className="related-card">
                            <h3>Post-Construction</h3>
                            <p>Store renovation cleanup</p>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RetailCleaning;

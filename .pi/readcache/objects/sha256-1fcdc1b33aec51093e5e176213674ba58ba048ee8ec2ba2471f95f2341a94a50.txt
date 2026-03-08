import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Building2, Store, HeartPulse, Building, Factory, ShieldCheck, ArrowRight,
    Briefcase, Map as MapIcon, Globe
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const mainServices = [
        {
            icon: Building2,
            title: 'Office Cleaning',
            description: 'Daily or weekly maintenance for offices. We sweep, mop, dust, and sanitize to ensure your staff always arrive to a fresh workspace.',
            link: '/services/office-cleaning'
        },
        {
            icon: Store,
            title: 'Retail Spaces',
            description: 'High-traffic environments require special attention to detail. We ensure your storefront looks immaculate to welcome your customers.',
            link: '/services/retail-cleaning'
        },
        {
            icon: HeartPulse,
            title: 'Medical Clinics',
            description: 'Strict sanitation protocols utilizing hospital-grade disinfectants to ensure the utmost safety for patients and healthcare providers.',
            link: '/services/medical-facility-cleaning'
        },
        {
            icon: Factory,
            title: 'Industrial & Warehouse',
            description: 'Heavy-duty cleaning for industrial spaces. We tackle tough grime, manage waste disposal, and maintain safety standards.',
            link: '/contact'
        },
        {
            icon: Building,
            title: 'Post-Construction',
            description: 'Comprehensive dust removal and deep cleaning to get your newly renovated space perfectly ready for its grand opening.',
            link: '/services/post-construction-cleaning'
        },
        {
            icon: ShieldCheck,
            title: 'Floor Maintenance',
            description: 'Expert stripping, waxing, and carpet extraction to prolong the life of your flooring and maintain a brilliant shine.',
            link: '/services/floor-maintenance'
        }
    ];

    return (
        <div className="services-page">
            <SEO
                title="Commercial Cleaning Services Toronto | GTA Cleaning Company"
                description="Full-service commercial cleaning in Toronto & GTA. Office, post-construction, medical, retail & floor care. 18+ years experience. Free quotes!"
                path="/services"
            />

            {/* 1. Hero Section */}
            <section className="services-hero bg-pattern">
                <div className="container hero-container animate-fade-in">
                    <span className="hero-badge">SERVICES</span>
                    <h1 className="hero-title">Expert commercial cleaning services for every need</h1>
                    <p className="hero-description">
                        From daily office maintenance to specialized post-construction cleanup,
                        we provide comprehensive cleaning solutions across the Greater Toronto Area.
                    </p>
                    <a href="#services-grid" className="btn btn-primary" style={{ marginTop: '2rem' }}>Explore Services</a>
                </div>
            </section>

            {/* 2. Full Width Image & Logo Strip */}
            <section className="image-strip-section">
                <div className="full-width-image">
                    {/* Background image set in CSS */}
                </div>
                <div className="logo-strip bg-pattern">
                    <div className="container logo-grid">
                        <div className="logo-item"><Building2 size={24} /> <span>Commercial</span></div>
                        <div className="logo-item"><Briefcase size={24} /> <span>Office</span></div>
                        <div className="logo-item"><MapIcon size={24} /> <span>GTA Wide</span></div>
                        <div className="logo-item"><Globe size={24} /> <span>Eco-Friendly</span></div>
                    </div>
                </div>
            </section>

            {/* 3. Services Grid (6-grid) */}
            <section className="section bg-light" id="services-grid">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">OUR SERVICES</span>
                        <h2>Quality Cleaning Solutions</h2>
                        <p className="description" style={{ margin: '0 auto', maxWidth: '600px' }}>
                            We offer a comprehensive range of facility services tailored to meet the unique demands of your commercial space. Consistent quality, every time.
                        </p>
                    </div>

                    <div className="services-6-grid">
                        {mainServices.map((service, idx) => (
                            <Link to={service.link} className="service-card-link" key={idx}>
                                <div className="service-card">
                                    <service.icon className="service-icon" />
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="learn-more">Learn more <ArrowRight size={16} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Service Detail Block (Dark split-screen) */}
            <section className="service-detail-block bg-pattern" id="detail-block">
                <div className="container">
                    <div className="split-grid">
                        <div className="image-col">
                            <div className="detail-image"></div>
                        </div>
                        <div className="content-col">
                            <span className="subtitle">GTA CLEANING</span>
                            <h2>Service detail: Floor Maintenance</h2>
                            <p>
                                From deep carpet extraction to hard floor stripping and waxing, our specialized team ensures your surfaces remain not just clean, but protected and impressive. We use advanced equipment to restore the original luster of your facility's floors.
                            </p>
                            <Link to="/services/floor-maintenance" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. List Inclusion Block */}
            <section className="section list-inclusion-block">
                <div className="container">
                    <div className="split-grid">
                        <div className="text-col">
                            <span className="subtitle">GTA CLEANING</span>
                            <h2>Our floor maintenance services include</h2>
                            <p>
                                We utilize industry-leading techniques and high-quality finishes to address diverse flooring types. Our dedicated team can handle everything, ensuring your floors project perfect professionalism.
                            </p>
                            <Link to="/services/floor-maintenance" className="btn btn-dark" style={{ marginTop: '1rem' }}>View Floor Services</Link>
                        </div>
                        <div className="list-col">
                            <div className="list-item">
                                <div className="icon-wrap"><CheckCircle2 /></div>
                                <div>
                                    <h4>Stripping and Waxing</h4>
                                    <p>Complete removal of old finish and application of high-gloss protective layers for VCT and hard floors.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="icon-wrap"><CheckCircle2 /></div>
                                <div>
                                    <h4>Carpet Deep Extraction</h4>
                                    <p>Hot water extraction to remove deep-seated dirt, allergens, and stains from commercial carpeting.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="icon-wrap"><CheckCircle2 /></div>
                                <div>
                                    <h4>Tile and Grout Scrubbing</h4>
                                    <p>Machine scrubbing and specialized solutions to lift heavy soiling and restore grout lines.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="icon-wrap"><CheckCircle2 /></div>
                                <div>
                                    <h4>High-Speed Burnishing</h4>
                                    <p>Routine high-speed buffing to maintain a wet-look shine and harden the protective wax coating.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section services-cta-section">
                <div className="container">
                    <div className="services-cta-card">
                        <h2>Need a custom cleaning solution?</h2>
                        <p>Contact us to discuss your specific requirements. We create tailored cleaning plans for businesses of all sizes.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Home, CheckCircle2, ShieldCheck, Sparkles, ClipboardCheck, ArrowRight, Phone } from 'lucide-react';
import HowItWorks from '../../components/HowItWorks';
import './ServiceLanding.css';

const ResidentialCleaning = () => {
    const standards = [
        {
            icon: ShieldCheck,
            title: 'Detail Oriented',
            description: 'Comprehensive cleaning protocols ensuring every corner is prepared for the next resident.'
        },
        {
            icon: Sparkles,
            title: 'Deep Cleaning',
            description: 'Thorough cleaning and disinfection of bathrooms, kitchens, bedrooms, and all living spaces.'
        },
        {
            icon: ClipboardCheck,
            title: 'Ready for Showings',
            description: 'We ensure units are in pristine condition for realtor showings and new tenant move-ins.'
        },
        {
            icon: Home,
            title: 'Reliable Service',
            description: 'Professional, dependable cleaning staff trained to deliver exceptional results every time.'
        }
    ];

    const areas = [
        'Entire residential units',
        'Kitchens and appliances',
        'Bathrooms and fixtures',
        'Bedrooms and closets',
        'Living and dining areas',
        'Floor deep cleaning and waxing'
    ];

    const protocols = [
        'Use of effective, safe cleaning products',
        'Color-coded microfiber cloths to prevent cross-contamination',
        'HEPA filtration vacuum systems',
        'Attention to detail in all living spaces',
        'Detailed cleaning checklists for quality assurance',
        'Flexible scheduling to meet your move-in/move-out timelines'
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Residential Cleaning Services GTA, Toronto & Mississauga"
                description="Professional residential cleaning services in GTA, Toronto, and Mississauga. Specializing in move-in/move-out cleaning, and preparing units for realtor showings. 18+ years of experience."
                path="/services/residential-cleaning"
            />

            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Residential Cleaning</span>
                            </div>
                            <h1>Residential Cleaning & Move-in/Move-out Services</h1>
                            <p className="service-hero-subtitle">
                                Professional residential cleaning services, specializing in preparing units for 
                                realtor showings or for tenants to move in. Reliable, detailed, and 
                                dedicated to getting your property ready.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Quote
                                </a>
                                <a href="#protocols" className="btn btn-outline btn-lg">Our Protocols</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item"><CheckCircle2 size={16} />Detailed Cleaning</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Move-in Ready</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Realtor Approved</span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="/images/residential_clean.jpg"
                                alt="Professional residential cleaning"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Added sections for better SEO content */}
            <section className="service-benefits section bg-light" id="benefits">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">WHY CHOOSE US</span>
                        <h2>The GTA Cleaning advantage for residential units</h2>
                    </div>
                    <div className="benefits-grid">
                        {standards.map((item, idx) => {
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

            <section className="section" id="areas">
                <div className="container">
                    <h2>Our Service Area</h2>
                    <p>
                        We are proud to provide expert residential move-in/move-out cleaning services across the Greater Toronto Area (GTA). 
                        Our primary service areas include:
                    </p>
                    <ul className="service-area-list" style={{ columns: '2', marginTop: '1rem', listStyle: 'disc', paddingLeft: '1.5rem' }}>
                        <li>Toronto</li>
                        <li>Mississauga</li>
                        <li>Bradford</li>
                        <li>North York</li>
                        <li>Scarborough</li>
                        <li>Etobicoke</li>
                        <li>Vaughan</li>
                        <li>Richmond Hill</li>
                    </ul>
                </div>
            </section>

            <HowItWorks />
            
            <section className="section bg-light" id="faq">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid" style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
                        <div className="faq-item">
                            <h4>Do you offer same-day move-out cleaning?</h4>
                            <p>While we recommend booking in advance, we understand plans change. Contact us ASAP and we'll do our best to accommodate you.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Are your cleaning products safe for pets?</h4>
                            <p>Yes. We use eco-friendly, non-toxic products safe for both pets and children.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Does the move-out clean include appliances?</h4>
                            <p>Yes, we focus on deep-cleaning kitchens and appliances so the unit is move-in ready.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Why choose professional move-in cleaning?</h4>
                            <p>It ensures your new space is pristine from day one, saving you time and stress.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResidentialCleaning;
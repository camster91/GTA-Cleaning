import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ShieldCheck, Sparkles, ClipboardCheck, ArrowRight, Phone } from 'lucide-react';
import './ServiceLanding.css';

const MedicalCleaning = () => {
    const standards = [
        {
            icon: ShieldCheck,
            title: 'Infection Control',
            description: 'Hospital-grade disinfection protocols following CDC and Health Canada guidelines for healthcare environments.'
        },
        {
            icon: Sparkles,
            title: 'Terminal Cleaning',
            description: 'Thorough cleaning and disinfection of patient rooms, waiting areas, and high-touch surfaces between patients.'
        },
        {
            icon: ClipboardCheck,
            title: 'Compliance Ready',
            description: 'Documentation and processes that support your compliance with health regulations and inspections.'
        },
        {
            icon: HeartPulse,
            title: 'Healthcare Trained',
            description: 'Staff trained in bloodborne pathogens, HIPAA (PHIPA) protocols, and medical facility safety.'
        }
    ];

    const areas = [
        'Patient examination rooms',
        'Waiting rooms and reception',
        'Surgical suites',
        'Dental offices',
        'Laboratories',
        'Pharmacies',
        'Medical office buildings',
        'Long-term care facilities',
        'Physiotherapy clinics',
        'Veterinary clinics'
    ];

    const protocols = [
        'Use of EPA and Health Canada approved disinfectants',
        'Color-coded microfiber cloths to prevent cross-contamination',
        'HEPA filtration vacuum systems',
        'Proper PPE usage at all times',
        'Strict handling of biomedical waste',
        'Detailed cleaning logs and documentation'
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Medical Facility Cleaning Toronto | Healthcare Sanitization GTA"
                description="Specialized medical cleaning services in Toronto. Hospitals, clinics & dental offices. CDC-compliant protocols, certified staff. Call for a quote!"
                path="/services/medical-facility-cleaning"
            />

            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Medical Facility Cleaning</span>
                            </div>
                            <h1>Medical Facility Cleaning & Sanitization Services</h1>
                            <p className="service-hero-subtitle">
                                Hospital-grade cleaning for healthcare environments. Trusted by clinics,
                                dental offices, and medical facilities across Toronto for infection control
                                and patient safety.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Quote
                                </a>
                                <a href="#protocols" className="btn btn-outline btn-lg">Our Protocols</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item"><CheckCircle2 size={16} />CDC Compliant</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Trained Staff</span>
                                <span className="badge-item"><CheckCircle2 size={16} />HIPAA Aware</span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="/images/medical_clean.png"
                                alt="Professional medical facility cleaning"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-benefits section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">OUR STANDARDS</span>
                        <h2>Healthcare cleaning excellence</h2>
                    </div>
                    <div className="benefits-grid-4">
                        {standards.map((item, idx) => (
                            <div className="benefit-card-v2" key={idx}>
                                <div className="benefit-icon-v2"><item.icon size={28} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-detail section" id="protocols">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-content">
                            <span className="subtitle">OUR PROTOCOLS</span>
                            <h2>Medical-grade cleaning protocols</h2>
                            <p className="lead">
                                We follow strict procedures to ensure your facility meets the highest
                                standards of cleanliness and infection control.
                            </p>
                            <ul className="service-list">
                                {protocols.map((protocol, idx) => (
                                    <li key={idx}><CheckCircle2 size={20} />{protocol}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-dark btn-lg">
                                Schedule Consultation
                                <ArrowRight size={20} />
                            </a>
                        </div>
                        <div className="service-detail-image">
                            <img
                                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2300&auto=format&fit=crop"
                                alt="Medical cleaning protocols"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-areas section bg-pattern">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">FACILITIES WE SERVICE</span>
                        <h2>Medical spaces we clean</h2>
                    </div>
                    <div className="areas-grid">
                        {areas.map((area, idx) => (
                            <div className="area-card" key={idx}>
                                <HeartPulse size={24} />
                                <span>{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="compliance-banner section">
                <div className="container">
                    <div className="compliance-card">
                        <ShieldCheck size={48} />
                        <h3>Compliance & Documentation</h3>
                        <p>
                            We provide detailed cleaning logs, checklists, and documentation to support
                            your facility's compliance with health regulations. Our team stays current
                            with the latest healthcare cleaning standards and guidelines.
                        </p>
                    </div>
                </div>
            </section>

            <section className="service-cta section" id="contact">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Protect your patients & staff</h2>
                            <p>Get a customized cleaning plan for your medical facility. We understand the unique requirements of healthcare environments.</p>
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
                        <h2>Other cleaning services</h2>
                    </div>
                    <div className="related-grid">
                        <Link to="/services/office-cleaning" className="related-card">
                            <h3>Office Cleaning</h3>
                            <p>General commercial cleaning</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/floor-maintenance" className="related-card">
                            <h3>Floor Maintenance</h3>
                            <p>Carpet & hard floor care</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/post-construction-cleaning" className="related-card">
                            <h3>Post-Construction</h3>
                            <p>Renovation cleanup</p>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MedicalCleaning;

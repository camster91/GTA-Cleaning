import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Award, ArrowRight, Phone, Zap } from 'lucide-react';
import './ServiceLanding.css';

const FloorMaintenance = () => {
    const services = [
        {
            icon: Sparkles,
            title: 'Stripping & Waxing',
            description: 'Complete removal of old wax buildup and application of new protective layers for a brilliant, long-lasting shine on VCT and hard floors.'
        },
        {
            icon: Zap,
            title: 'Buffing & Burnishing',
            description: 'High-speed buffing to maintain your floors between waxing. Restores shine and extends the life of your floor finish.'
        },
        {
            icon: ShieldCheck,
            title: 'Carpet Extraction',
            description: 'Deep hot water extraction removes embedded dirt, allergens, and stains. Leaves carpets fresh and extends their lifespan.'
        },
        {
            icon: Award,
            title: 'Tile & Grout',
            description: 'Professional scrubbing and sealing of tile floors. We restore grout lines and protect against future staining.'
        }
    ];

    const floorTypes = [
        'Vinyl Composition Tile (VCT)',
        'Ceramic & Porcelain Tile',
        'Hardwood & Laminate',
        'Concrete Floors',
        'Carpet & Area Rugs',
        'Natural Stone',
        'Rubber Flooring',
        'Epoxy Floors'
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Floor Stripping & Waxing Toronto | Commercial Floor Care GTA"
                description="Professional floor maintenance in Toronto. VCT stripping & waxing, carpet cleaning, tile & grout. 18+ years experience. Free estimates!"
                path="/services/floor-maintenance"
            />

            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Floor Maintenance</span>
                            </div>
                            <h1>Commercial Floor Maintenance & Stripping Services</h1>
                            <p className="service-hero-subtitle">
                                Restore and protect your commercial floors with our professional stripping,
                                waxing, and deep cleaning services across the Greater Toronto Area.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Estimate
                                </a>
                                <a href="#services" className="btn btn-outline btn-lg">Our Services</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item"><CheckCircle2 size={16} />Professional Equipment</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Premium Products</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Satisfaction Guaranteed</span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="/images/hero_floor.png"
                                alt="Professional floor maintenance in Toronto"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-benefits section bg-light" id="services">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">OUR SERVICES</span>
                        <h2>Complete floor care solutions</h2>
                    </div>
                    <div className="benefits-grid-4">
                        {services.map((service, idx) => (
                            <div className="benefit-card-v2" key={idx}>
                                <div className="benefit-icon-v2"><service.icon size={28} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-detail section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-content">
                            <span className="subtitle">FLOOR TYPES</span>
                            <h2>We service all commercial flooring</h2>
                            <p className="lead">
                                From VCT in office buildings to carpet in medical facilities,
                                we have the expertise and equipment for every floor type.
                            </p>
                            <ul className="service-list two-col">
                                {floorTypes.map((type, idx) => (
                                    <li key={idx}><CheckCircle2 size={18} />{type}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-dark btn-lg">
                                Schedule Floor Service
                                <ArrowRight size={20} />
                            </a>
                        </div>
                        <div className="service-detail-image">
                            <img
                                src="/images/mid_banner_office_1772682465026.png"
                                alt="Shiny polished commercial floor"
                                loading="lazy"
                            />
                            <div className="service-stat-card">
                                <strong>1M+</strong>
                                <span>Sq Ft Cleaned Monthly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-highlight section bg-pattern">
                <div className="container">
                    <div className="highlight-box">
                        <div className="highlight-content">
                            <h2>The Stripping & Waxing Process</h2>
                            <div className="process-list">
                                <div className="process-item">
                                    <span className="step">1</span>
                                    <div>
                                        <h4>Floor Assessment</h4>
                                        <p>We evaluate your floors condition and determine the best approach.</p>
                                    </div>
                                </div>
                                <div className="process-item">
                                    <span className="step">2</span>
                                    <div>
                                        <h4>Stripping</h4>
                                        <p>Old wax and buildup is completely removed using professional equipment.</p>
                                    </div>
                                </div>
                                <div className="process-item">
                                    <span className="step">3</span>
                                    <div>
                                        <h4>Cleaning & Prep</h4>
                                        <p>Floors are thoroughly cleaned and neutralized for optimal wax adhesion.</p>
                                    </div>
                                </div>
                                <div className="process-item">
                                    <span className="step">4</span>
                                    <div>
                                        <h4>Wax Application</h4>
                                        <p>Multiple coats of premium floor finish applied for lasting protection.</p>
                                    </div>
                                </div>
                                <div className="process-item">
                                    <span className="step">5</span>
                                    <div>
                                        <h4>Burnishing</h4>
                                        <p>Final buffing creates a brilliant, wet-look shine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-cta section" id="contact">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Restore your floors today</h2>
                            <p>Contact us for a free assessment and quote. We service offices, retail spaces, medical facilities, and more.</p>
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
                        <h2>Complete your cleaning package</h2>
                    </div>
                    <div className="related-grid">
                        <Link to="/services/office-cleaning" className="related-card">
                            <h3>Office Cleaning</h3>
                            <p>Regular maintenance cleaning</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/post-construction-cleaning" className="related-card">
                            <h3>Post-Construction</h3>
                            <p>New build & renovation cleanup</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/retail-cleaning" className="related-card">
                            <h3>Retail Cleaning</h3>
                            <p>Store & showroom cleaning</p>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FloorMaintenance;

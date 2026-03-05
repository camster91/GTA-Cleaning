import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle2, Clock, ShieldCheck, Sparkles, ArrowRight, Phone, Trash2, Wind, Droplets } from 'lucide-react';
import './ServiceLanding.css';

const PostConstructionCleaning = () => {
    const benefits = [
        {
            icon: HardHat,
            title: 'Construction Specialists',
            description: 'Trained teams experienced in post-construction cleanup. We handle debris, dust, and construction residue safely.'
        },
        {
            icon: Clock,
            title: 'Quick Turnaround',
            description: 'Fast service to meet your project deadlines. Available for last-minute and emergency cleanups.'
        },
        {
            icon: ShieldCheck,
            title: 'Safe Debris Removal',
            description: 'Proper disposal of construction waste following all local regulations and safety protocols.'
        },
        {
            icon: Sparkles,
            title: 'Move-In Ready',
            description: 'Thorough cleaning that leaves your space spotless and ready for occupancy or final inspection.'
        }
    ];

    const phases = [
        {
            title: 'Rough Clean',
            items: [
                'Remove construction debris and trash',
                'Sweep and vacuum all surfaces',
                'Clean windows and glass surfaces',
                'Dust walls, ceilings, and fixtures'
            ]
        },
        {
            title: 'Light Clean',
            items: [
                'Deep clean all surfaces',
                'Clean kitchens and bathrooms',
                'Floor scrubbing and mopping',
                'Air vent and duct cleaning'
            ]
        },
        {
            title: 'Final Clean',
            items: [
                'Detail cleaning and touch-ups',
                'Window polishing',
                'Floor waxing and buffing',
                'Final inspection preparation'
            ]
        }
    ];

    return (
        <div className="service-landing-page">
            <SEO
                title="Post-Construction Cleaning Toronto | Renovation Cleanup GTA"
                description="Expert post-construction cleaning in Toronto & GTA. Dust removal, debris cleanup & final detailing for renovations. Licensed & insured. Free quotes!"
                path="/services/post-construction-cleaning"
            />

            <section className="service-hero bg-pattern">
                <div className="container">
                    <div className="service-hero-grid">
                        <div className="service-hero-content">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link>
                                <span>/</span>
                                <span>Post-Construction Cleaning</span>
                            </div>
                            <h1>Post-Construction Cleaning Services in Toronto</h1>
                            <p className="service-hero-subtitle">
                                Transform your construction site into a move-in ready space. Complete cleanup
                                services for renovations, new builds, and commercial projects across the GTA.
                            </p>
                            <div className="service-hero-cta">
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    <Phone size={20} />
                                    Get a Free Quote
                                </a>
                                <a href="#phases" className="btn btn-outline btn-lg">Our Process</a>
                            </div>
                            <div className="trust-badges">
                                <span className="badge-item"><CheckCircle2 size={16} />Licensed & Insured</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Same-Day Available</span>
                                <span className="badge-item"><CheckCircle2 size={16} />Licensed Waste Disposal</span>
                            </div>
                        </div>
                        <div className="service-hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2300&auto=format&fit=crop"
                                alt="Post-construction cleaning service"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-benefits section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">WHY CHOOSE US</span>
                        <h2>Construction cleanup experts</h2>
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

            <section className="service-phases section" id="phases">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">OUR PROCESS</span>
                        <h2>Three-phase cleaning system</h2>
                        <p className="description">We follow a comprehensive approach to ensure every trace of construction is eliminated.</p>
                    </div>
                    <div className="phases-grid">
                        {phases.map((phase, idx) => (
                            <div className="phase-card" key={idx}>
                                <div className="phase-number">0{idx + 1}</div>
                                <h3>{phase.title}</h3>
                                <ul>
                                    {phase.items.map((item, i) => (
                                        <li key={i}><CheckCircle2 size={16} />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-detail section bg-pattern">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-image">
                            <img
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2300&auto=format&fit=crop"
                                alt="Construction cleanup crew"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-detail-content">
                            <span className="subtitle">WHAT WE CLEAN</span>
                            <h2>Complete post-construction cleanup</h2>
                            <p className="lead">
                                From drywall dust to paint splatters, we handle all types of construction debris and residue.
                            </p>
                            <div className="icon-list">
                                <div className="icon-list-item"><Trash2 size={24} /><span>Debris & waste removal</span></div>
                                <div className="icon-list-item"><Wind size={24} /><span>Dust & particle removal</span></div>
                                <div className="icon-list-item"><Droplets size={24} /><span>Paint & adhesive cleanup</span></div>
                                <div className="icon-list-item"><Sparkles size={24} /><span>Final detailing</span></div>
                            </div>
                            <a href="#contact" className="btn btn-dark btn-lg">
                                Get Your Quote
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-cta section" id="contact">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Ready to finish your project?</h2>
                            <p>Schedule your post-construction cleaning today. We work with contractors, builders, and property owners across the GTA.</p>
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
                        <h2>Related cleaning services</h2>
                    </div>
                    <div className="related-grid">
                        <Link to="/services/office-cleaning" className="related-card">
                            <h3>Office Cleaning</h3>
                            <p>Regular maintenance for commercial spaces</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/floor-maintenance" className="related-card">
                            <h3>Floor Maintenance</h3>
                            <p>Stripping, waxing & polishing</p>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/services/retail-cleaning" className="related-card">
                            <h3>Retail Cleaning</h3>
                            <p>Storefront and commercial space cleaning</p>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostConstructionCleaning;

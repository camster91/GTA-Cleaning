import { Building2, HardHat, Sparkles, HeartPulse, Store, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './ServicesGrid.css';

const ServicesGrid = () => {
    const sectionRef = useScrollReveal();

    const services = [
        {
            icon: <Building2 size={24} />,
            title: 'Office Cleaning',
            description: 'Daily and weekly office cleaning services. We work around your schedule to keep workspaces pristine.',
            link: '/services/office-cleaning'
        },
        {
            icon: <Store size={24} />,
            title: 'Retail Cleaning',
            description: 'Storefront and retail space cleaning. We handle high-traffic environments with attention to detail.',
            link: '/services/retail-cleaning'
        },
        {
            icon: <HeartPulse size={24} />,
            title: 'Medical Facility Cleaning',
            description: 'Hospital-grade disinfection for clinics and healthcare facilities. CDC-compliant protocols.',
            link: '/services/medical-facility-cleaning'
        },
        {
            icon: <Factory size={24} />,
            title: 'Industrial & Warehouse',
            description: 'Heavy-duty cleaning for industrial spaces. We tackle tough grime and maintain safety standards.',
            link: '/contact'
        },
        {
            icon: <HardHat size={24} />,
            title: 'Post-Construction',
            description: 'Complete cleanup after renovations. Dust removal, debris cleanup, and move-in ready detailing.',
            link: '/services/post-construction-cleaning'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Floor Maintenance',
            description: 'Stripping, waxing, and carpet extraction. Restore and protect your commercial flooring.',
            link: '/services/floor-maintenance'
        }
    ];

    return (
        <section className="services-section" id="services" ref={sectionRef}>
            <div className="container">
                <div className="services-header">
                    <span className="hero-subtitle" style={{ color: 'var(--text-muted)' }}>SERVICES</span>
                    <h2>Quality commercial cleaning solutions</h2>
                    <p>Our dedicated approach means precision, consistency, and absolute client satisfaction across the Greater Toronto Area.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link to={service.link} key={index} className="service-card-link">
                            <div className="service-card">
                                <div className="service-card-header">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                                <p className="service-description">{service.description}</p>
                                <span className="service-link">
                                    LEARN MORE <span className="arrow" aria-hidden="true">➔</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/services" className="btn btn-dark">See all services</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;

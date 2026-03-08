import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page bg-pattern">
            <SEO
                title="Contact Us"
                description="Get in touch with GTA City Cleaning Services. Request a free quote for commercial cleaning, post-construction cleanup, floor maintenance, and more across the GTA."
                path="/contact"
            />
            <div className="container contact-container">

                <div className="contact-hero animate-fade-in">
                    <span className="hero-badge">GTA CLEANING</span>
                    <h1 className="hero-title">Get in touch with us today</h1>
                    <p className="hero-subtitle">
                        Ready for a pristine workspace? Whether you need a one-time deep clean, ongoing maintenance, or specialized floor care, our team is here to help.
                    </p>
                </div>

                <ContactForm />

            </div>

            <div className="container" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
                <div className="contact-map animate-fade-in" style={{ animationDelay: '0.4s', width: '100%' }}>
                    <iframe
                        title="GTA City Cleaning Service Area"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-80.12,43.43,-79.13,43.95&amp;layer=mapnik"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <p style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                        <a href="https://www.openstreetmap.org/?mlat=43.65&mlon=-79.38#map=10/43.65/-79.38" target="_blank" rel="noopener noreferrer">View Larger Map</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
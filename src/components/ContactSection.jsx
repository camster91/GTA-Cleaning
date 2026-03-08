import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact-form">
            <div className="container contact-container">

                <div className="contact-content">
                    <span className="hero-subtitle" style={{ color: 'var(--text-muted)' }}>CONTACT US</span>
                    <h2>Get in touch with us today</h2>
                    <p className="contact-subtitle">We can schedule work anytime depending on your needs. Happily Servicing for over 18 years!</p>

                    <div className="contact-image-wrapper">
                        <img
                            src="/images/hero_floor.png"
                            alt="GTA Cleaning Service Professional providing commercial cleaning"
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="400"
                        />
                    </div>

                    <div className="contact-info-grid">
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Phone size={22} />
                            </div>
                            <div className="contact-info-text">
                                <h4>Phone</h4>
                                <p>647-901-1995</p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Mail size={22} />
                            </div>
                            <div className="contact-info-text">
                                <h4>Email</h4>
                                <p>contact@gtacitycleaningservices.ca</p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Clock size={22} />
                            </div>
                            <div className="contact-info-text">
                                <h4>Hours</h4>
                                <p>24/7 Service Available</p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <MapPin size={22} />
                            </div>
                            <div className="contact-info-text">
                                <h4>Service Area</h4>
                                <p>Greater Toronto Area</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
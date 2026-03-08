import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', propertyType: 'office', frequency: 'daily', message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            const data = await res.json();
            
            if (!res.ok) {
                // Handle validation errors (400)
                if (res.status === 400 && data.errors) {
                    setErrors(data.errors);
                    setStatus('idle');
                } else {
                    // Handle server errors (500) or other errors
                    throw new Error(data.error || 'Server error');
                }
                return;
            }
            
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', propertyType: 'office', frequency: 'daily', message: '' });
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
        }
    };

    return (
        <section className="contact-section" id="contact">
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
                                <p>(416) 000-0000</p>
                            </div>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Mail size={22} />
                            </div>
                            <div className="contact-info-text">
                                <h4>Email</h4>
                                <p>info@gtacitycleaning.com</p>
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

                <div className="form-container">
                    {status === 'success' ? (
                        <div className="form-success" role="alert">
                            <h3>Thank you!</h3>
                            <p>We've received your message and will get back to you within 24 hours.</p>
                            <button className="btn btn-dark" onClick={() => setStatus('idle')}>Send another</button>
                        </div>
                    ) : (
                        <>
                            <div className="form-header">
                                <h3>Request a Free Quote</h3>
                                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>
                            <form className="quote-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name <span aria-label="required">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? 'name-error' : undefined}
                                        required
                                    />
                                    {errors.name && <span className="field-error" id="name-error" role="alert">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address <span aria-label="required">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                        required
                                    />
                                    {errors.email && <span className="field-error" id="email-error" role="alert">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number <span aria-label="required">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="(416) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        required
                                    />
                                    {errors.phone && <span className="field-error" id="phone-error" role="alert">{errors.phone}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="propertyType">Property Type</label>
                                    <select id="propertyType" value={formData.propertyType} onChange={handleChange}>
                                        <option value="office">Office</option>
                                        <option value="commercial">Commercial Building</option>
                                        <option value="retail">Retail Space</option>
                                        <option value="medical">Medical Facility</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="frequency">Service Frequency</label>
                                    <select id="frequency" value={formData.frequency} onChange={handleChange}>
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="onetime">One-Time Deep Clean</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message <span aria-label="required">*</span></label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Tell us about your cleaning needs..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                        required
                                    ></textarea>
                                    {errors.message && <span className="field-error" id="message-error" role="alert">{errors.message}</span>}
                                </div>

                                {status === 'error' && (
                                    <p className="form-error-msg" role="alert">Something went wrong. Please try again.</p>
                                )}

                                <button type="submit" className="btn btn-dark form-submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

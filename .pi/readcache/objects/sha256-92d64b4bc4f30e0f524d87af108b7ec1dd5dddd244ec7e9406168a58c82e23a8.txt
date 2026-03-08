import { useState } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: ''
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
        if (!formData.service) newErrors.service = 'Please select a service.';
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
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
        }
    };

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

                <div className="contact-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {status === 'success' ? (
                        <div className="form-success">
                            <h3>Message sent!</h3>
                            <p>Thank you for reaching out. Our team will respond within 24 hours.</p>
                            <button className="btn btn-dark" onClick={() => setStatus('idle')}>Send another message</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} />
                                {errors.name && <span className="field-error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} />
                                {errors.email && <span className="field-error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} aria-invalid={!!errors.phone} />
                                {errors.phone && <span className="field-error">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Select Services</label>
                                <div className="select-wrapper">
                                    <select id="service" value={formData.service} onChange={handleChange} aria-invalid={!!errors.service}>
                                        <option value="" disabled hidden>Select Services</option>
                                        <option value="office">Office Cleaning</option>
                                        <option value="retail">Retail Space Cleaning</option>
                                        <option value="medical">Medical Facility Cleaning</option>
                                        <option value="post-construction">Post-Construction Cleaning</option>
                                        <option value="floor-care">Stripping & Waxing</option>
                                    </select>
                                </div>
                                {errors.service && <span className="field-error">{errors.service}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your message</label>
                                <textarea id="message" rows="5" placeholder="Your message" value={formData.message} onChange={handleChange} aria-invalid={!!errors.message}></textarea>
                                {errors.message && <span className="field-error">{errors.message}</span>}
                            </div>

                            {status === 'error' && (
                                <p className="form-error-msg">Something went wrong. Please try again.</p>
                            )}

                            <button type="submit" className="btn btn-dark submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Submit'}
                            </button>

                        </form>
                    )}
                </div>

                <div className="contact-map animate-fade-in" style={{ animationDelay: '0.4s', width: '100%', maxWidth: '1200px' }}>
                    <iframe
                        title="GTA City Cleaning Service Area"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369354.7511982637!2d-79.74951468692994!3d43.71812270908498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contact;

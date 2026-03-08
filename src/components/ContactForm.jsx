import { useState } from 'react';

const ContactForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', companyName: '', email: '', phone: '', service: '', propertyType: 'office', frequency: 'daily', size: '', message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const validate = (stepToValidate) => {
        const newErrors = {};
        if (stepToValidate >= 1) {
            if (!formData.name.trim()) newErrors.name = 'Name is required.';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required.';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Enter a valid email address.';
            }
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        }
        if (stepToValidate >= 2) {
            if (!formData.service) newErrors.service = 'Please select a service.';
            if (!formData.message.trim()) newErrors.message = 'Message is required.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate(1)) {
            setStep(2);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate(2)) return;

        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            const data = await res.json();
            
            if (!res.ok) {
                if (res.status === 400 && data.errors) {
                    setErrors(data.errors);
                    setStatus('idle');
                } else {
                    throw new Error(data.error || 'Server error');
                }
                return;
            }
            
            setStatus('success');
            setFormData({ name: '', companyName: '', email: '', phone: '', service: '', propertyType: 'office', frequency: 'daily', size: '', message: '' });
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="contact-card animate-fade-in" id="contact-form" style={{ animationDelay: '0.2s' }}>
            {status === 'success' ? (
                <div className="form-success">
                    <h3>Message sent!</h3>
                    <p>Thank you for reaching out. Our team will respond within 24 hours.</p>
                    <button className="btn btn-dark" onClick={() => setStatus('idle')}>Send another message</button>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                    {step === 1 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} />
                                {errors.name && <span className="field-error">{errors.name}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name (Optional)</label>
                                <input type="text" id="companyName" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
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

                            <button type="button" className="btn btn-dark" onClick={handleNext}>Next</button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="service">Select Services</label>
                                <div className="select-wrapper">
                                    <select id="service" value={formData.service} onChange={handleChange} aria-invalid={!!errors.service}>
                                        <option value="" disabled hidden>Select Services</option>
                                        <option value="office">Office Cleaning</option>
                                        <option value="retail">Retail Space Cleaning</option>
                                        <option value="residential">Residential Cleaning</option>
                                        <option value="post-construction">Post-Construction Cleaning</option>
                                        <option value="floor-care">Stripping & Waxing</option>
                                    </select>
                                </div>
                                {errors.service && <span className="field-error">{errors.service}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="propertyType">Property Type</label>
                                <div className="select-wrapper">
                                    <select id="propertyType" value={formData.propertyType} onChange={handleChange}>
                                        <option value="office">Office</option>
                                        <option value="commercial">Commercial Building</option>
                                        <option value="retail">Retail Space</option>
                                        <option value="residential">Residential</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="frequency">Preferred Frequency</label>
                                <div className="select-wrapper">
                                    <select id="frequency" value={formData.frequency} onChange={handleChange}>
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="biweekly">Bi-Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="one-time">One-time / Deep Clean</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="size">Estimated Size (sq ft)</label>
                                <div className="select-wrapper">
                                    <select id="size" value={formData.size} onChange={handleChange}>
                                        <option value="" disabled hidden>Select Size</option>
                                        <option value="under600">Under 600</option>
                                        <option value="600-1000">600 - 1000</option>
                                        <option value="1000-2000">1000 - 2000</option>
                                        <option value="2000+">2000+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your message</label>
                                <textarea id="message" rows="5" placeholder="Your message" value={formData.message} onChange={handleChange} aria-invalid={!!errors.message}></textarea>
                                {errors.message && <span className="field-error">{errors.message}</span>}
                            </div>
                            <div className="form-actions" style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                                <button type="submit" className="btn btn-dark submit-btn" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </>
                    )}
                    
                    {status === 'error' && (
                        <p className="form-error-msg">Something went wrong. Please try again.</p>
                    )}

                </form>
            )}
        </div>
    );
};

export default ContactForm;
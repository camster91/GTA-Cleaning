import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './GlobalHeader.css';

const GlobalHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`global-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">

                {/* Logo Section */}
                <div className="logo-container">
                    <Link to="/" className="logo-text" style={{ flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
                        <div className="logo-img-wrapper">
                            <img src="/logo.jpg" alt="GTA Cleaning Logo" className="header-logo-img" />
                        </div>
                        <span className="logo-brand-text">GTA City Cleaning Services Inc</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li className="has-dropdown">
                            <Link to="/services">Services</Link>
                            <ul className="dropdown">
                                <li><Link to="/services/office-cleaning">Office Cleaning</Link></li>
                                <li><Link to="/services/post-construction-cleaning">Post-Construction</Link></li>
                                <li><Link to="/services/floor-maintenance">Floor Maintenance</Link></li>
                                <li><Link to="/services/residential-cleaning">Residential Cleaning</Link></li>
                                <li><Link to="/services/retail-cleaning">Retail Cleaning</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link to="#">Locations</Link>
                            <ul className="dropdown">
                                <li><Link to="/locations/toronto">Toronto</Link></li>
                                <li><Link to="/locations/mississauga">Mississauga</Link></li>
                                <li><Link to="/locations/bradford">Bradford</Link></li>
                                <li><Link to="/locations/north-york">North York</Link></li>
                                <li><Link to="/locations/scarborough">Scarborough</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="nav-phone"><a href="tel:6479011995" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>647-901-1995</a></li>
                    </ul>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
                    <li><strong style={{display: 'block', padding: '1rem 1.5rem'}}>Services</strong></li>
                    <li><Link to="/services/office-cleaning" onClick={() => setMobileMenuOpen(false)}>Office Cleaning</Link></li>
                    <li><Link to="/services/post-construction-cleaning" onClick={() => setMobileMenuOpen(false)}>Post-Construction</Link></li>
                    <li><Link to="/services/floor-maintenance" onClick={() => setMobileMenuOpen(false)}>Floor Maintenance</Link></li>
                    <li><Link to="/services/residential-cleaning" onClick={() => setMobileMenuOpen(false)}>Residential Cleaning</Link></li>
                    <li><Link to="/services/retail-cleaning" onClick={() => setMobileMenuOpen(false)}>Retail Cleaning</Link></li>
                    <li><strong style={{display: 'block', padding: '1rem 1.5rem'}}>Service Areas</strong></li>
                    <li><Link to="/locations/toronto" onClick={() => setMobileMenuOpen(false)}>Toronto</Link></li>
                    <li><Link to="/locations/mississauga" onClick={() => setMobileMenuOpen(false)}>Mississauga</Link></li>
                    <li><Link to="/locations/bradford" onClick={() => setMobileMenuOpen(false)}>Bradford</Link></li>
                    <li><Link to="/locations/north-york" onClick={() => setMobileMenuOpen(false)}>North York</Link></li>
                    <li><Link to="/locations/scarborough" onClick={() => setMobileMenuOpen(false)}>Scarborough</Link></li>
                    <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default GlobalHeader;
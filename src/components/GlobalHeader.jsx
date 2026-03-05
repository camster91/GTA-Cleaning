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
                            <img src="/images/gta_logo.jpg" alt="GTA Cleaning Logo" className="header-logo-img" />
                        </div>
                        <span className="logo-brand-text">GTA City Cleaning Services Inc</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Nav pushed to right by space-between now that CTA is removed */}

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
                    <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default GlobalHeader;

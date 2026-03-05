import { Link } from 'react-router-dom';
import './GlobalFooter.css';

const GlobalFooter = () => {
    return (
        <footer className="global-footer">
            <div className="container footer-content">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <div className="logo-img-wrapper">
                            <img src="/images/gta_logo.jpg" alt="GTA Cleaning Logo" className="header-logo-img" />
                        </div>
                        <span className="footer-logo-text">GTA CITY CLEANING</span>
                    </Link>
                    <p className="footer-desc">
                        Your trusted partner for commercial cleaning across the GTA. We're dedicated to keeping your workspace pristine and safe so you can focus on what matters.
                    </p>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Commercial Cleaning</Link></li>
                            <li><Link to="/services">Post-Construction</Link></li>
                            <li><Link to="/services">Floor Maintenance</Link></li>
                            <li><Link to="/services">Specialty Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/contact">Request a Quote</Link></li>
                            <li><Link to="/contact">Schedule Service</Link></li>
                            <li><Link to="/about">Our Process</Link></li>
                            <li><Link to="/about">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of Service</Link></li>
                            <li><Link to="/">Accessibility</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-pattern">
                    <div className="footer-circle footer-circle-1"></div>
                    <div className="footer-circle footer-circle-2"></div>
                    <div className="footer-circle footer-circle-3"></div>
                </div>
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} GTA City Cleaning Services Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default GlobalFooter;

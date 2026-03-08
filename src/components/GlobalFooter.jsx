import { Link } from 'react-router-dom';
import './GlobalFooter.css';

const GlobalFooter = () => {
    return (
        <footer className="global-footer">
            <div className="container footer-content">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <div className="logo-img-wrapper" style={{ width: '120px', height: 'auto' }}>
                            <img src="/logo.jpg" alt="GTA Cleaning Logo" className="header-logo-img" />
                        </div>
                        <span className="footer-logo-text">GTA CITY CLEANING</span>
                    </Link>
                    <p className="footer-desc">
                        Your trusted partner for cleaning across the GTA. Proudly serving Toronto, Mississauga, Bradford, North York, Scarborough, and surrounding areas with 18+ years of experience.
                    </p>
                    <p className="footer-phone" style={{ fontWeight: '600', color: 'var(--white)' }}>
                        Call us: <a href="tel:6479011995" style={{ color: 'var(--primary-color)' }}>647-901-1995</a>
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
                            <li><Link to="/services/office-cleaning">Office Cleaning</Link></li>
                            <li><Link to="/services/post-construction-cleaning">Post-Construction</Link></li>
                            <li><Link to="/services/floor-maintenance">Floor Maintenance</Link></li>
                            <li><Link to="/services/residential-cleaning">Residential Cleaning</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Service Areas</h4>
                        <ul>
                            <li><Link to="/locations/toronto">Toronto</Link></li>
                            <li><Link to="/locations/mississauga">Mississauga</Link></li>
                            <li><Link to="/locations/bradford">Bradford</Link></li>
                            <li><Link to="/locations/north-york">North York</Link></li>
                            <li><Link to="/locations/scarborough">Scarborough</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/legal/privacy">Privacy Policy</Link></li>
                            <li><Link to="/legal/terms">Terms of Service</Link></li>
                            <li><Link to="/legal/accessibility">Accessibility</Link></li>
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

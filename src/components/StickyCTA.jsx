import { Phone } from 'lucide-react';
import './StickyCTA.css';

const StickyCTA = () => {
  return (
    <div className="sticky-cta-mobile">
      <a href="tel:6479011995" className="btn btn-dark" style={{ width: '100%', borderRadius: '0', backgroundColor: 'var(--primary-color)', color: 'var(--dark-bg)' }}>
        <Phone size={18} /> Call: 647-901-1995
      </a>
    </div>
  );
};

export default StickyCTA;
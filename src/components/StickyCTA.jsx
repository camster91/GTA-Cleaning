import { Phone } from 'lucide-react';
import './StickyCTA.css';

const StickyCTA = () => {
  return (
    <div className="sticky-cta-mobile">
      <a href="/contact" className="btn btn-dark" style={{ width: '100%', borderRadius: '0' }}>
        <Phone size={18} /> Get a Free Quote
      </a>
    </div>
  );
};

export default StickyCTA;
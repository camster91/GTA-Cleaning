import useScrollReveal from '../hooks/useScrollReveal';
import './MidPageBanner.css';

const MidPageBanner = () => {
    const sectionRef = useScrollReveal();

    return (
        <section className="mid-banner" ref={sectionRef}>
            <div className="container banner-text-container">
                <span className="hero-subtitle" style={{ color: 'var(--white)' }}>EXPERTISE</span>
                <h2>Fast, reliable, and premium commercial cleaning solutions.</h2>
                <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book now</a>
            </div>

            <div className="banner-full-image">
                <img 
                    src="/images/mid-banner.png" 
                    alt="Commercial Cleaning Service"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="600"
                />
            </div>
        </section>
    );
};

export default MidPageBanner;

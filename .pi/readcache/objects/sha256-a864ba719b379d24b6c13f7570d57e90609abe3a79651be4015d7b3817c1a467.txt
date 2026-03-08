import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section diagonal-section" id="home">
            <div className="hero-split left-panel">
                <div className="hero-content animate-fade-in">
                    <span className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>GTA CLEANING</span>
                    <h1 className="hero-heading" style={{ fontWeight: '500' }}>Your trusted<br />partner for commercial<br />cleaning</h1>
                    <p className="hero-description" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', maxWidth: '400px' }}>
                        Professional commercial cleaning services across the Greater Toronto Area. 18+ years of excellence keeping businesses pristine.
                    </p>
                    <a href="#contact" className="btn btn-primary hero-btn" style={{ borderRadius: '8px', padding: '0.8rem 2rem', fontWeight: '600' }}>
                        Contact us
                    </a>

                    <div className="hero-badges">
                        <div className="badge">
                            <strong>18y</strong>
                            <span>EXPERIENCES</span>
                        </div>
                        <div className="badge">
                            <strong>200+</strong>
                            <span>ACTIVE CLIENTS</span>
                        </div>
                        <div className="badge">
                            <strong>1k</strong>
                            <span>PROJECTS</span>
                        </div>
                    </div>
                </div>              </div>

            <div className="hero-split right-panel">
                {/* Background image via CSS */}
                <div className="hero-image-placeholder" role="img" aria-label="Professional commercial cleaning services"></div>
            </div>
        </section>
    );
};

export default HeroSection;

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="text-center">How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Request a Quote</h3>
            <p>Tell us about your space and specific cleaning needs through our simple contact form.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Schedule Your Date</h3>
            <p>Our team confirms your appointment and prepares a custom cleaning plan.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Enjoy Your Space</h3>
            <p>Relax and enjoy a pristine, professionally cleaned unit that's move-in ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
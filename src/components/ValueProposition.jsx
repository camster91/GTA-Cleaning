import useScrollReveal from '../hooks/useScrollReveal';
import './ValueProposition.css';

const ValueProposition = () => {
    const sectionRef = useScrollReveal();

    return (
        <section className="value-prop-section container" ref={sectionRef}>
            <div className="value-prop-content">
                <div className="value-prop-grid">
                    <h2 className="vp-heading">
                        A commitment to precision, consistency, and absolute client satisfaction across the Greater Toronto Area.
                    </h2>
                    <div>
                        <a href="#about" className="btn btn-dark" style={{ marginBottom: '2rem' }}>Learn More</a>
                        <p className="vp-paragraph">
                            We work around your schedule—day or night—to ensure your commercial space is spotless with zero disruption to your daily operations. 18 years of excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;

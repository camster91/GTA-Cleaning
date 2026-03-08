import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import ServicesGrid from '../components/ServicesGrid';
import Testimonials from '../components/Testimonials';
import MidPageBanner from '../components/MidPageBanner';
import MeetTheOwner from '../components/MeetTheOwner';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <>
            <SEO
                title=""
                description="GTA City Cleaning Services provides 24/7 expert commercial, post-construction, and floor maintenance cleaning across the Greater Toronto Area. 18+ years of excellence. Get a free quote today!"
                path="/"
            />
            <HeroSection />
            <ValueProposition />
            <ServicesGrid />
            <Testimonials />
            <div className="diagonal-inverse">
                <MidPageBanner />
            </div>
            <MeetTheOwner />
            <ContactSection />
        </>
    );
};

export default Home;

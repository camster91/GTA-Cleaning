import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/SEO';

const LocationPage = ({ city }) => {
    return (
        <div className="container section">
            <SEO
                title={`Cleaning Services in ${city}`}
                description={`Looking for professional cleaning services in ${city}? GTA City Cleaning Services offers residential and commercial cleaning with over 18 years of experience.`}
                path={`/locations/${city.toLowerCase().replace(' ', '-')}`}
            />
            <h1>Professional Cleaning Services in {city}</h1>
            <p>GTA City Cleaning Services is proud to serve the {city} community. Whether you need office cleaning, post-construction cleanup, or residential services, our experienced team is ready to assist you.</p>
            <p>Contact us today to get a free quote for your cleaning needs in {city}!</p>
        </div>
    );
};

export default LocationPage;
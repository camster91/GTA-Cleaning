import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'GTA City Cleaning Services';
const BASE_URL = 'https://gtacitycleaning.com';

const SEO = ({
    title,
    description,
    path = '/',
    type = 'website',
    image = '/og-image.png',
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Expert Commercial Cleaning 24/7`;
    const url = `${BASE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={`${BASE_URL}${image}`} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_CA" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${BASE_URL}${image}`} />

            {/* Geo */}
            <meta name="geo.region" content="CA-ON" />
            <meta name="geo.placename" content="Greater Toronto Area" />
        </Helmet>
    );
};

export default SEO;

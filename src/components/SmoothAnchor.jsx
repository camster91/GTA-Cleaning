import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smooth Anchor Link Scrolling Component
 * Handles smooth scrolling to anchor links (#contact, #services, etc.)
 */
const SmoothAnchor = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle initial load with hash
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const offset = 80; // Account for fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [location]);

    // Handle clicks on anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href || href === '#') return;

            const element = document.querySelector(href);
            if (element) {
                e.preventDefault();
                const offset = 80; // Account for fixed header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                window.history.pushState(null, '', href);
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return null;
};

export default SmoothAnchor;

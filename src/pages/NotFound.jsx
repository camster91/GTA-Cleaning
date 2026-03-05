import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page bg-pattern">
            <div className="container not-found-container animate-fade-in">
                <span className="not-found-code">404</span>
                <h1>Page not found</h1>
                <p>The page you're looking for doesn't exist or has been moved.</p>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;

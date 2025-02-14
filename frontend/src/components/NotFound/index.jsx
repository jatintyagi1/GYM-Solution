import { Link } from "react-router-dom";
import { ExclamationTriangleFill } from "react-bootstrap-icons"; // Bootstrap icon

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <ExclamationTriangleFill size={80} className="text-danger mb-3" />
            <h1 className="fw-bold text-dark">404</h1>
            <h3 className="text-secondary">Oops! Page Not Found</h3>
            <p className="text-muted">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary mt-3 px-4">
                Go to Homepage
            </Link>
        </div>
    );
}

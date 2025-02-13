import "bootstrap/dist/css/bootstrap.min.css";
import useResponsive from "../../utils/useResponsive";
import { TelephoneFill, Facebook, Instagram, Youtube, Linkedin, Search, Cart3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

export default function NavCard() {
    const { isMobile } = useResponsive();
    return isMobile ? <Mobile /> : <Desktop />
};


function Desktop() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm p-3">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center fw-bold">
                    <TelephoneFill className="text-primary me-2" size={20} />
                    <span>+91 98765 43210</span>
                </div>

                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/Shop-By-Brand">Shop by Brand</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Refurbishment">Refurbishment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Project">Project</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Video">Video</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Finance">Finance</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Warranty">Warranty</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Return-Policy">Return Policy</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/FAQs">FAQs</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/About-us">About us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blog-News">Blog/News</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Contact-us">Contact us</Link></li>
                    </ul>
                </div>

                <div className="d-flex">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                        <Youtube size={24} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </nav>
    )
}

function Mobile() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm p-3">
            <div className="container-fluid d-flex justify-content-between">
                <button className="btn btn-outline-primary" type="button">
                    <Search size={24} />
                </button>

                <button className="btn btn-outline-secondary positive-relative" type="button">
                    <Cart3 size={24} />
                    <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger" style={{ marginTop: '15px', marginLeft: '10px' }}>
                        3
                    </span>
                </button>
            </div>
        </nav>
    )
}
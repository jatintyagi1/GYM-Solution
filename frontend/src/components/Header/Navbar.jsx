import "bootstrap/dist/css/bootstrap.min.css";
import useResponsive from "../../utils/useResponsive";
import { Search, Cart, PersonCircle, List } from "react-bootstrap-icons"; // Import Bootstrap icons
import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/Navbar.css'

export default function Navbar() {
  const { isMobile } = useResponsive();
  return isMobile ? <Mobile /> : <Desktop />
};


function Desktop() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3" style={{ backgroundColor: '#2c3e50', height: '75px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo Section */}
        <div className="navbar-brand">
          <img
            src="https://www.gymsolutions.com.au/wp-content/uploads/2022/02/GYM_SOLUTIONS_LOGO_HORIZONTAL_MAN_WHT-1-copy.png"
            alt="logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </div>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/cardio">cardio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/strength">Strength</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/free-weight">Free Weight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/functional">Functional</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/flooring">Flooring</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/wellness">Wellness</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/sale">Sale</Link>
            </li>
          </ul>
        </div>


        <div className="d-flex gap-3">
          <button className="btn btn-outline-light">
            <Search size={20} />
          </button>
          <button className="btn btn-outline-light">
            <Cart size={20} />
            <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger" style={{ marginTop: '25px', marginLeft: '8px' }}>
              3
            </span>
          </button>
          <Link to="/register">
            <button className="btn btn-outline-light">
              <PersonCircle size={20} />
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}



function Mobile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3" style={{ backgroundColor: '#2c3e50', height: 'auto' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand">
            <img
              src="https://www.gymsolutions.com.au/wp-content/uploads/2022/02/GYM_SOLUTIONS_LOGO_HORIZONTAL_MAN_WHT-1-copy.png"
              alt="logo"
              className="img-fluid"
              style={{ maxHeight: "40px" }}
            />
          </div>

          <button className="btn btn-outline-light" onClick={() => setSidebarOpen(true)}>
            <List size={24} />
          </button>
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)}>
        <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex gap-3 mb-3 justify-content-center align-items-center">
            <button className="btn btn-outline-light">
              <Search size={20} />
            </button>
            <button className="btn btn-outline-light">
              <Cart size={20} />
              <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger" style={{ marginTop: '25px', marginLeft: '8px' }}>
                3
              </span>
            </button>
            <Link to="/register">
              <button className="btn btn-outline-light">
                <PersonCircle size={20} />
              </button>
            </Link>
          </div>

          <button className="close-btn btn btn-danger mb-3" onClick={() => setSidebarOpen(false)}>✖</button>

          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Cardio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Strength</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Free Weight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Functional</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Flooring</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Wellness</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Sale</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
};

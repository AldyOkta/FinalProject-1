import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isNewsActive = location.pathname === "/";
  const isSavedActive = location.pathname === "/saved";
  const isProgrammingActive = location.pathname === "/programming";
  const isCovidActive = location.pathname === "/covid";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={`nav-item ${isNewsActive ? "active" : ""}`}>
            <Link to="/" className={`nav-link ${isNewsActive ? "active-link" : ""}`}>
              News <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={`nav-item ${isSavedActive ? "active" : ""}`}>
            <Link to="/saved" className={`nav-link ${isSavedActive ? "active-link" : ""}`}>
              Saved
            </Link>
          </li>
          <li className={`nav-item ${isProgrammingActive ? "active" : ""}`}>
            <Link to="/programming" className={`nav-link ${isProgrammingActive ? "active-link" : ""}`}>
              Programming
            </Link>
          </li>
          <li className={`nav-item ${isCovidActive ? "active" : ""}`}>
            <Link to="/covid" className={`nav-link ${isCovidActive ? "active-link" : ""}`}>
              COVID-19
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

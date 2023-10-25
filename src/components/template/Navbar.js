import { Link } from "react-router-dom";

export const Navbar = () => {
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
          <li className="nav-item active">
            <Link to="/">
              <a className="nav-link" href="#">
                News <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved">
              <a className="nav-link" href="#">
                Saved
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/programming">
              <a className="nav-link" href="#">
                Programming
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/covid">
              <a className="nav-link" href="#">
                COVID-19
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2 border-bottom border-warning">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/trainer">
          <span className="fs-4 fw-bold text-warning">
            <i className="bi bi-journal-code me-2"></i>
            Course Content Portal
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-warning"></i>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Profile */}
            <li className="nav-item mx-1">
              <Link
                className="nav-link d-flex align-items-center py-2 px-3 rounded hover-bg-gold"
                to="/trainer/profile"
              >
                <i className="bi bi-person-fill me-2 text-warning"></i>
                <span className="position-relative">
                  Profile
                  <span className="position-absolute bottom-0 start-0 w-100 bg-warning" style={{ height: '2px', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                </span>
              </Link>
            </li>

            {/* Course Content */}
            <li className="nav-item mx-1">
              <Link
                className="nav-link d-flex align-items-center py-2 px-3 rounded hover-bg-gold"
                to="/trainer/all-courses"
              >
                <i className="bi bi-speedometer2 me-2 text-warning"></i>
                <span className="position-relative">
                  All Courses
                  <span className="position-absolute bottom-0 start-0 w-100 bg-warning" style={{ height: '2px', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                </span>
              </Link>
            </li>
          </ul>

          {/* User Dropdown */}
          <div className="d-flex align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-transparent dropdown-toggle d-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="position-relative">
                  <img
                    src={user?.profilePic || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                    alt="Profile"
                    className="rounded-circle border border-warning"
                    width="40"
                    height="40"
                  />
                  <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-warning rounded-circle"></span>
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-lg-end bg-dark border border-warning shadow-lg">
                <li>
                  <Link className="dropdown-item text-light hover-bg-gold" to="/profile">
                    <i className="bi bi-person-fill me-2 text-warning"></i>My Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider bg-warning" /></li>
                <li>
                  <button
                    className="dropdown-item text-light hover-bg-gold"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2 text-warning"></i>Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// Add this to your CSS file or style component
const styles = `
  .hover-bg-gold:hover {
    background-color: rgba(255, 193, 7, 0.1);
  }
  .nav-link:hover span span {
    transform: scaleX(1) !important;
  }
  .dropdown-item:hover {
    background-color: rgba(255, 193, 7, 0.1) !important;
    color: #ffc107 !important;
  }
  .navbar-brand:hover {
    opacity: 0.9;
  }
`;

// Inject the styles
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
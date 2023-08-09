import "../components/styles/global.css";
import "../components/styles/navbar.css";
import logo from "../assets/logo.png";
import right from "../assets/Right.svg";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <em className="btn loginbutton">
                    Login <img className="right" src={right} alt="" />
                  </em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default NavBar;

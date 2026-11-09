import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">Menu item 1</a>
            <a className="dropdown-item" href="#">Menu item 2</a>
            <a className="dropdown-item" href="#">Menu item 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
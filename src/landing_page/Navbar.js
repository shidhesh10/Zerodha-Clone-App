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
            <ul className="navbar-nav flex-row justify-content-end w-100">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn menu-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars fa-lg"></i>
          </button>

          
        <div className="dropdown-menu dropdown-menu-end mega-menu">

          <div className="mega-top">
            <div className="row text-center">

              <div className="col-3">
                <a href="#" style={{textDecoration:"none"}}>
                  <img src="media/images/kite-logo.svg" alt="kite logo" style={{width:"32%"}} />
                <h6>Kite</h6>
                <p>Trading platform</p>
                </a>
              </div>

              <div className="col-3">
                <a href="#" style={{textDecoration:"none"}}>
                  <img src="media/images/console-logo.svg" alt="console logo" style={{width:"32%"}} />
                  <h6>Console</h6>
                  <p>Backoffice</p>
                </a>
              </div>

              <div className="col-3">
                <a href="#" style={{textDecoration:"none"}}>
                  <img src="media/images/kite-connect-logo.svg" alt="kite connect logo" style={{width:"32%"}} />
                <h6>Kite Connect</h6>
                <p>Trading APIs</p>
                </a>
              </div>

              <div className="col-3">
                <a href="#" style={{textDecoration:"none"}}>
                  <img src="media/images/coin-logo.svg" alt="coin logo" style={{width:"32%"}} />
                <h6>Coin</h6>
                <p>Mutual funds</p>
                </a>
              </div>

            </div>
          </div>

          <div className="mega-bottom">
            <div className="row">

              <div className="col-4">
                <h6>Utilities</h6>
                <a href="#">Calculators</a>
                <a href="#">Brokerage calculator</a>
                <a href="#">Margin calculator</a>
                <a href="#">SIP calculator</a>
              </div>

              <div className="col-4">
                <h6>Updates</h6>
                <a href="#">Z-Connect blog</a>
                <a href="#">Circulars / Bulletin</a>
                <a href="#">IPOs</a>
                <a href="#">Markets</a>
              </div>

              <div className="col-4 d-flex flex-column justify-content-left">
                <h6>Education</h6>

                <div className="d-flex justify-content-center gap-4 ml-0">

                  <a href="#" className="d-flex flex-column align-items-center text-decoration-none">
                    <img src="media/images/varsity-logo.png" alt="varsity" />
                    Varsity
                  </a>

                  <a href="#" className="d-flex flex-column align-items-center text-decoration-none">
                    <img src="media/images/tqna.png" alt="trading logo" />
                    Trading Q&A
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
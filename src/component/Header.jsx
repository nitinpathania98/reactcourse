import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const myData = useSelector((state) => state.CARDDATA)
  console.log(myData.length)
  return (
    <div>
      {/* <!-- Navbar Start --> */}
      <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div class="col-lg-6 px-5 text-start">
            <small><i class="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
            <small class="ms-4"><i class="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
          </div>
          <div class="col-lg-6 px-5 text-end">
            <small><i class="fa fa-envelope text-primary me-2"></i>info@example.com</small>
            <small class="ms-4"><i class="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="display-5 text-primary m-0">Finanza</h1>
          </a>
          <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" class="nav-item nav-link active">Home</Link>
              <Link to="/About" class="nav-item nav-link">About</Link>
              <Link to="/Services" class="nav-item nav-link">Services</Link>
              <div class="nav-item dropdown">
                <a href="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu border-light m-0">
                  <Link to="/Projects" class="dropdown-item">Projects</Link>
                  <Link to="/Features" class="dropdown-item">Features</Link>
                  <Link to="/Team" class="dropdown-item">Team Member</Link>
                  <Link to="/Testimonial" class="dropdown-item">Testimonial</Link>
                  <Link to="/Page404" class="dropdown-item">404 Page</Link>
                  <Link to="/State" class="dropdown-item">State</Link>
                  <Link to="/Effects" class="dropdown-item">Effects</Link>
                  <Link to="/Axiosdata" class="dropdown-item">Axiosdata</Link>
                  <Link to="Login/" class="dropdown-item">Login</Link>
                </div>
              </div>
              <Link to="/Contact" class="nav-item nav-link">Contact</Link>
            </div>
            <div class="d-none d-lg-flex ms-2">
              <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="/">
                <small class="fab fa-facebook-f text-primary">{myData.length}</small>
              </a>
              <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="/">
                <small class="fab fa-twitter text-primary"></small>
              </a>
              <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="/">
                <small class="fab fa-linkedin-in text-primary"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </div>
  )
}

export default Header
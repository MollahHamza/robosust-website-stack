import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="znav-container znav-white znav-freya znav-fixed" id="znav-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand overflow-hidden pr-3" to="/">
            <img 
              src="/assets/images/robosust_logo.jpeg" 
              alt="Robosust" 
              width="70" 
              style={{ borderRadius: '60%' }} 
            />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <div className="hamburger hamburger--emphatic">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fs-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/agp">Agp</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
            <ul className="navbar-nav fs-0 ml-lg-auto">
              <li className="text-center">
                <a 
                  className="pl-3 pl-lg-1 d-inline-block" 
                  href="https://www.facebook.com/robosustofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-facebook"></span>
                </a>
                <a 
                  className="pl-3 pl-lg-1 d-inline-block" 
                  href="https://www.youtube.com/@robosustofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-youtube"></span>
                </a>
                <a 
                  className="pl-3 pl-lg-1 d-inline-block pr-0" 
                  href="https://bd.linkedin.com/company/robosust" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

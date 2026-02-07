import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/images/favicons/robosust_logo.png" alt="RoboSUST" />
          <span>RoboSUST</span>
        </Link>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/agp" onClick={() => setIsOpen(false)}>AGP</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/forum" onClick={() => setIsOpen(false)}>Forum</NavLink></li>
        </ul>

        <div className="navbar-social">
          <a href="https://www.facebook.com/robosust" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@robosust" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/robosust" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

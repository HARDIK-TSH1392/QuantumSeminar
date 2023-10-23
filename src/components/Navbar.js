import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) {
        setActiveLink('home');
      } else if (scrollY >= 300 && scrollY < 800) {
        setActiveLink('about');
      } else if (scrollY >= 800 && scrollY < 1200) {
        setActiveLink('schedule');
      } else if (scrollY >= 1200 && scrollY < 1600) {
        setActiveLink('speakers');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#aad6ec' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          IIIT Delhi
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                smooth
                to="#home"
                onClick={() => handleNavLinkClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                smooth
                to="#about"
                onClick={() => handleNavLinkClick('about')}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'schedule' ? 'active' : ''}`}
                smooth
                to="#schedule"
                onClick={() => handleNavLinkClick('schedule')}
              >
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'speakers' ? 'active' : ''}`}
                smooth
                to="#speakers"
                onClick={() => handleNavLinkClick('speakers')}
              >
                Speakers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

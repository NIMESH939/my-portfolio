import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <div className="NavBarContainer">
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <img src="./img/logo.svg" alt="NimeshLogo" />
        </div>

        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`NavBarItems ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="NavBarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="NavBarContent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="NavBarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyProjects"
                className="NavBarContent"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="NavBarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Technologies"
                className="NavBarContent"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="NavBarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="NavBarContent"
              >
                About Me
              </Link>
            </li>
            <li>
            <Link
              onClick={closeMenu}
              activeClass="NavBarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="NavBarContent"
            >
              Contact
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

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
          <Link
            to="HeroSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <img className="Logo-img" src="./img/logo.svg" alt="NimeshLogo" />
          </Link>
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
                to="HeroSection"
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
                to="Skills"
                className="NavBarContent"
              >
                Skills
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

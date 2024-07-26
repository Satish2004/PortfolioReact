import React, { useState } from "react";
import "./header.css";

const Header = ({ toggleTheme, darkMode }) => {
  // State to toggle menu visibility
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleBtn = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            SATISH
          </a>
          <div className={toggleMenu ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link ancherTag">
                  <i className="uil uil-estate nav__icon active-link"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skill" className="nav__link">
                  <i className="uil uil-file nav__icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#project" className="nav__link">
                  <i className="uil uil-briefcase nav__icon"></i>
                  Project
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <i className="uil uil-book nav__icon"></i>
                  Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-phone nav__icon"></i>
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <i
                  className={` ${darkMode ? `fa-solid fa-sun` : `fa-regular fa-sun`} toggleMoon`}
                  onClick={toggleTheme}
                ></i>
              </li>
            </ul>
            <li
              className="uil uil-times nav__close"
              onClick={handleToggleBtn}
            ></li>
          </div>
          <div className="nav__toggle">
            <li
              className="uil uil-apps nav__apps"
              onClick={handleToggleBtn}
            ></li>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

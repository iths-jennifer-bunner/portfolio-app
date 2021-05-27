import React, { useState } from "react";
import "../App.scss";
import "../styles/Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                om mig
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                cv
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                skoluppgifter
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                projekt
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                lia
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

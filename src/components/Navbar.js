import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.scss";
import "../styles/Navbar.scss";

function Navbar({ reference, navClick, navClick2, navClick3, navClick4 }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <div className="nav-imgContainer">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="Vector.svg" className="navbar-logo" alt="logo" />
            </Link>{" "}
          </div> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" ref={reference} onClick={navClick}>
              <p className="nav-links" onClick={closeMobileMenu}>
                OM MIG
              </p>
            </li>
            {/* <li className="nav-item">
              <p className="nav-links" onClick={closeMobileMenu}>
                cv
              </p>
            </li> */}
            <li className="nav-item" ref={reference} onClick={navClick3}>
              <p className="nav-links" onClick={closeMobileMenu}>
                SKOLUPPGIFTER
              </p>
            </li>
            <li className="nav-item" ref={reference} onClick={navClick2}>
              <p className="nav-links" onClick={closeMobileMenu}>
                PROJEKT
              </p>
            </li>
            <li className="nav-item" ref={reference} onClick={navClick4}>
              <p className="nav-links" onClick={closeMobileMenu}>
                KUNSKAPER
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

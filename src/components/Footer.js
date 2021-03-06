import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__leftDiv">
        <h2>KONTAKT</h2>
        <div className="footer__iconsDiv">
          <div className="footer__icon">
            <a href="https://www.linkedin.com/in/jenniferbunner810">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://github.com/iths-jennifer-bunner">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

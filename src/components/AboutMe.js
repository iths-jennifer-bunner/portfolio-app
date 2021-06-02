import React from "react";
import "../styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="wrapper">
      <h3>OM MIG</h3>
      <div className="about__container">
        <div className="about__textField">
          <p>
            Med kunskaper som teamwork, problemlösning och kommunikation samt
            ett öga för detaljer är jag van att jobba i snabbt tempo och
            stressiga situationer. Jag är flexibel och tycker om att komma med
            och prova nya idéer. Det går hela att lära sig något nytt och
            utvecklas. Jag är inte rädd för att utmana mig eller att dela med
            mig av mig av mina erfarenheter samt sprida glädje! Hemsidan är
            fortfarande under uppbyggnad men jag uppdaterar den allt eftersom.
          </p>
        </div>
        <div className="about__imageContainer">
          <img
            alt="Jennifer"
            src="../../images/jennifer-kvadrat.jpg"
            className="about__image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
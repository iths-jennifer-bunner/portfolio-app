import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/SchoolProjects.scss";
import { useElementOnScreen } from "../scripts/useElementOnScreen";

function SchoolProjects({ reference }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const [containerRef, containerRef2, isVisible, isVisible2] =
    useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  const [doParallax, setDoParallax] = useState("cards__outerContainer");

  if (window.innerWidth < 600) {
    setDoParallax("cards__outerContainer");
  } else {
    setDoParallax(
      `cards__outerContainer fade-in-section ${isVisible ? "is-visible" : ""}`
    );
  }

  return (
    <div className="schoolProject-container" ref={reference}>
      <div className="wrapper">
        <h3>SKOLUPPGIFTER</h3>
        <p>
          Nedan följer några utvalda skolprojekt. Klicka på korten för att se
          github repot eller sidan.
        </p>
        <div className="cards">
          <a href="http://ankra.jakobg.se/">
            <div
              ref={containerRef}
              className={`cards__outerContainer fade-in-section ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/ankra.png"
                />
              </div>

              <h4>ANKRA</h4>
              <p>
                Det här är en sida vi skapade under ett grupparbete i Wordpress.
                Vi hade i uppgift att skapa ett eget tema för en bokningssite
                för gästhamnar i Sverige. Stor kredd till Jakob G i min grupp
                som deployade sidan och lärde mig mycket om Wordpress.
              </p>
            </div>
          </a>
          <a href="https://github.com/iths-jennifer-bunner/guessTheNumber">
            <div
              ref={containerRef}
              className={`cards__outerContainer fade-in-section ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/guessTheNumber.png"
                />
              </div>
              <h4>Guess The Number</h4>
              <p>
                Här var uppgiften att skapa ett spel, man skulle gissa nummret.
                Gissade man för lågt eller för högt så får man ett meddelande
                och man har tio chanser på sig att gissa.
              </p>
            </div>
          </a>
          <a href="https://github.com/iths-jennifer-bunner/colorChanger">
            <div
              ref={containerRef}
              className={`cards__outerContainer fade-in-section ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/colorchanger.png"
                />
              </div>

              <h4>Color Changer</h4>
              <p>
                Denna uppgift var att skapa ett inputfält som när önskad färg
                väljs så byter bakgrunden till önskad färg, inputfältet kan även
                visa förslag över färger då man börjar skriva.
              </p>
            </div>
          </a>
          <a href="https://github.com/iths-jennifer-bunner/userCard">
            <div
              ref={containerRef2}
              className={`cards__outerContainer fade-in-section ${
                isVisible2 ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/cards.png"
                />
              </div>
              <h4>Cards</h4>
              <p>
                Här har jag skapat en "carousel" av cards som visar olika
                personer där informationen hämtas från ett api.
              </p>
            </div>
          </a>
          <a href="https://github.com/iths-jennifer-bunner/star-wars">
            <div
              ref={containerRef2}
              className={`cards__outerContainer fade-in-section ${
                isVisible2 ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/starwars.png"
                />
              </div>
              <h4>Star Wars</h4>
              <p>
                Labbade med StarWars Apiet SWAPI med att loopa ut personer från
                StarWars-filmerna.
              </p>
            </div>
          </a>
          <a href="https://github.com/iths-jennifer-bunner/canvas">
            <div
              ref={containerRef2}
              className={`cards__outerContainer fade-in-section ${
                isVisible2 ? "is-visible" : ""
              }`}
            >
              <div className="cards__imageContainer">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/canvas.png"
                />
              </div>
              <h4>Canvas</h4>
              <p>
                Testade på HTML elementet canvas där bubblor skapades och
                påverkades av hur musen rör sig på skärmen.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div
        className="parallax"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <div className="svg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1900 954"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M565.501 488.814C565.501 709.727 185.242 896 0.503143 896C0.500977 733.5 0.500977 709.727 0.500977 488.814C0.500977 267.9 0.502204 245 0.503143 81.8136C185.242 81.8136 565.501 267.9 565.501 488.814Z"
              fill="#F2778D"
            />
            <path
              d="M1220 360.523C1220 559.635 905.61 795 665.267 795C424.925 795 254 559.635 254 360.523C254 161.412 448.836 0 689.178 0C929.521 0 1220 161.412 1220 360.523Z"
              fill="#F2778D"
            />
            <path
              d="M1899.5 585.5C1899.5 388.058 1899.5 333.5 1899.5 217C1595.74 217 989 407.058 989 604.5C989 801.942 1595.74 954 1899.5 954C1899.5 846.5 1899.5 782.942 1899.5 585.5Z"
              fill="#F2778D"
            />
            <path
              d="M1369 238.692C1369 309.215 1300.5 526 1216 526C1131.5 526 1063 309.215 1063 238.692C1063 168.17 1131.5 111 1216 111C1300.5 111 1369 168.17 1369 238.692Z"
              fill="#F2778D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SchoolProjects;

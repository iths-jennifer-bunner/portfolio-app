import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/SchoolProjects.scss";
import { useElementOnScreen } from "../scripts/useElementOnScreen";

function SchoolProjects() {
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

  return (
    <div className="schoolProject-container">
      <div className="wrapper">
        <h3>SKOLUPPGIFTER</h3>
        <div
          className="cards"
          // ref={domRef}
          // className={`cards fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div
            ref={containerRef}
            className={`cards__outerContainer fade-in-section ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div className="cards__imageContainer">
              <Link to="/canvas">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/canvas.png"
                />
              </Link>
            </div>
            <h4>Canvas</h4>
            <p>Labbade runt lite och testade på HTML5 Canvas</p>
          </div>
          <div
            ref={containerRef}
            className={`cards__outerContainer fade-in-section ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div className="cards__imageContainer">
              <Link to="/guessTheNumber">
                <img
                  className="cards__image"
                  alt="schoolProject"
                  src="../../images/ukkonpng.png"
                />
              </Link>
            </div>
            <h4>Guess The Number</h4>
            <p>
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the miwas strewn with
              silver. Looking down into the dark gulf below, I could see a ru
            </p>
          </div>
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
                src="../../images/ukkonpng.png"
              />
            </div>
            <p>
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the miwas strewn with
              silver. Looking down into the dark gulf below, I could see a ru
            </p>
          </div>
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
                src="../../images/ukkonpng.png"
              />
            </div>
            <p>
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the miwas strewn with
              silver. Looking down into the dark gulf below, I could see a ru
            </p>
          </div>
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
                src="../../images/ukkonpng.png"
              />
            </div>
            <p>
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the miwas strewn with
              silver. Looking down into the dark gulf below, I could see a ru
            </p>
          </div>

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
                src="../../images/ukkonpng.png"
              />
            </div>
            <p>
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the miwas strewn with
              silver. Looking down into the dark gulf below, I could see a ru
            </p>
          </div>
        </div>
      </div>
      <div
        className="parallax"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <div className="svg">
          <svg
            width="100%"
            height="auto"
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

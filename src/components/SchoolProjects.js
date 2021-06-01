import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/SchoolProjects.scss";

function SchoolProjects() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);
  return (
    <div className="schoolProject-container">
      <div className="wrapper">
        <h3>SKOLUPPGIFTER</h3>
        <div className="cards">
          <div className="cards__outerContainer">
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
          <div className="cards__outerContainer">
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
          <div className="cards__outerContainer">
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
          <div className="cards__outerContainer">
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
          <div className="cards__outerContainer">
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

          <div className="cards__outerContainer">
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
        <div className="curved__upperPink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#f2778d"
              fillOpacity="1"
              d="M0,160L17.1,170.7C34.3,181,69,203,103,192C137.1,181,171,139,206,138.7C240,139,274,181,309,197.3C342.9,213,377,203,411,208C445.7,213,480,235,514,218.7C548.6,203,583,149,617,128C651.4,107,686,117,720,128C754.3,139,789,149,823,128C857.1,107,891,53,926,42.7C960,32,994,64,1029,80C1062.9,96,1097,96,1131,90.7C1165.7,85,1200,75,1234,96C1268.6,117,1303,171,1337,213.3C1371.4,256,1406,288,1423,304L1440,320L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="pinkBlock"></div>
        <div className="curvedPink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L24,80C48,128,96,224,144,245.3C192,267,240,213,288,186.7C336,160,384,160,432,170.7C480,181,528,203,576,202.7C624,203,672,181,720,165.3C768,149,816,139,864,154.7C912,171,960,213,1008,240C1056,267,1104,277,1152,266.7C1200,256,1248,224,1296,208C1344,192,1392,192,1416,192L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SchoolProjects;

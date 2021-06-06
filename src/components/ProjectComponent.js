import React, { useState, useEffect } from "react";

import "../styles/ProjectComponent.scss";

function ProjectComponent({ reference }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <div className="wrapper projectContainer" ref={reference}>
      <div
        className="parallax-projects"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="svg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1711 1274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M789.034 580.859C789.034 916.372 -31.9992 988 1.99912 984.5C1.99912 984.5 1.99718 909 1.99773 878.5C2.00075 710.19 1.99826 35.9827 1.99826 35.9827C471.501 -114 789.034 245.346 789.034 580.859Z"
              fill="#F2C8A2"
            />
            <path
              d="M1149.16 632.21C1149.16 868.138 893.046 1106.02 701.22 1106.02C509.394 1106.02 378.168 868.138 378.168 632.21C378.168 396.282 533.675 205.024 725.501 205.024C917.327 205.024 1149.16 396.282 1149.16 632.21Z"
              fill="#F2C8A2"
            />
            <path
              d="M1710.48 616.024C1710.48 878.912 1710.48 529.524 1710.48 1273.52C1467.48 1273.52 927.021 895.098 927.021 632.21C927.021 369.323 1467.48 97.9999 1710.48 97.9999C1710.48 348.21 1710.48 353.137 1710.48 616.024Z"
              fill="#F2C8A2"
            />
            <path
              d="M1280.16 304.486C1280.16 387.584 1216.81 643.024 1138.66 643.024C1060.51 643.024 997.165 387.584 997.165 304.486C997.165 221.389 1060.51 154.025 1138.66 154.025C1216.81 154.025 1280.16 221.389 1280.16 304.486Z"
              fill="#F2C8A2"
            />
          </svg>
        </div>
      </div>
      <div>
        <h3>PROJEKT</h3>
        <p className="projects__intro">
          Dessa är lite större projekt som jag gjort. Jag kommer att uppdatera
          här allt eftersom.
        </p>
        <div className="projects__container">
          <div className="projects">
            <div className="projects__imageContainer ">
              <a
                href="https://bocapital.se/"
                className="projects__imageContainer "
              >
                <img
                  alt="screenshot BoCapital"
                  className="projects__image"
                  src="../../images/bocapital.png"
                />
              </a>
            </div>
            <h4>BoCapital</h4>
            <p>
              Detta är "marknadssidan" för BoCapital och deras produkt som jag
              skapade under min första Lia-praktik. Har haft huvudansvar i allt
              från att rita designen i Figma till development. Den är skriven i
              Vue och Quasar Framework och jag har även översatt sidan till
              svenska med i18n.
            </p>
          </div>
          <div className="projects">
            <div className="projects__imageContainer ">
              <img
                alt="screenshot ZignSec"
                className="projects__image"
                src="../../images/ZignSec.jpg"
              />
            </div>
            <h4>Zignsec</h4>
            <p>
              Under min andra lia hos ZignSec fick jag och en till praktikant i
              uppdrag att skapa en helt ny portal. Vi kodade den i React och har
              gjort login med hjälp av api och Bearer Token authentication, till
              ett avancerat sökformulär som hämtar information från ett annat
              api som sedan loopade ut resultaten på en ny sida. Även denna
              portal skapade vi vår egen design i Figma. På grund av personlig
              information och sekretess kan jag inte länka till koden för denna
              sida
            </p>
          </div>
        </div>

        <div className="projects__container">
          <div className="projects">
            <div className="projects__imageContainer">
              <a
                href="http://fab-hamster-wars.herokuapp.com/"
                className="projects__imageContainer"
              >
                <img
                  alt="fullstack Hamsterwars"
                  className="projects__image"
                  src="../../images/herokuapp.png"
                />
              </a>
            </div>
            <h4>Hamsterwars</h4>
            <p>
              Det här är mitt första "fullstack" projekt som jag gjorde under
              utbildningen, deployad i Heroku och skriven i React.js. Det är en
              sida man kan rösta på den sötaste hamstern, se: topp 5 och botten
              5, ett formulär där man kan lägga in egna hamstrar samt en katalog
              över alla hamstrar. Backend i Node.js pakethantering med NPM,
              skapat eget Api för hamstrarna spm lagras i en databas i Firebase
              Firestore.
            </p>
          </div>
          <div className="projects">
            <div className="projects__imageContainer">
              <a
                href="https://iths-jennifer-bunner.github.io/iths-slutprojekt-javascript/index.html"
                className="projects__imageContainer"
              >
                <img
                  alt="screenshot Ukkons page"
                  className="projects__image"
                  src="../../images/ukkonpng.png"
                />
              </a>
            </div>
            <h4>Ukkon</h4>
            <p>
              Det här är första slutprojektet jag hade i Kursen Javascript.
              Tanken var att skapa en hemsida åt mitt vän som jag tycker är en
              fantastisk konstnär. Den är skriven i Html, Css och Javascript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;

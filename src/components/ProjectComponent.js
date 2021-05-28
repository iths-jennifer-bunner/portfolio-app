import React from "react";

import "../styles/ProjectComponent.scss";

function ProjectComponent() {
  return (
    <>
      <div className="curved__upper curved__upper--beige">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#f2c8a2"
            fill-opacity="1"
            d="M0,0L48,10.7C96,21,192,43,288,74.7C384,107,480,149,576,186.7C672,224,768,256,864,277.3C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="wrapper project-background">
        <h3>PROJEKT</h3>
        <div className="projects">
          <div className="projects__imageContainer">
            <a
              href="https://bocapital.se/"
              className="projects__imageContainer"
            >
              <img
                alt="screenshot Hamsterwars"
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
      </div>{" "}
      <div className="curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,0L24,0C48,0,96,0,144,16C192,32,240,64,288,106.7C336,149,384,203,432,240C480,277,528,299,576,266.7C624,235,672,149,720,96C768,43,816,21,864,53.3C912,85,960,171,1008,170.7C1056,171,1104,85,1152,64C1200,43,1248,85,1296,122.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default ProjectComponent;

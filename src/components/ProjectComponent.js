import React from "react";

import "../styles/ProjectComponent.scss";

function ProjectComponent() {
  return (
    <div className="wrapper-project">
      <h3>PROJEKT</h3>
      <div className="projects">
        <div className="projects__imageContainer">
          <a href="https://bocapital.se/" className="projects__imageContainer">
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
          skapade under min första Lia-praktik. Har haft huvudansvar i allt från
          att rita designen i Figma till development. Den är skriven i Vue och
          Quasar Framework och jag har även översatt sidan till svenska med
          i18n.
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
            sida man kan rösta på den sötaste hamstern, se: topp 5 och botten 5,
            ett formulär där man kan lägga in egna hamstrar samt en katalog över
            alla hamstrar. Backend i Node.js pakethantering med NPM, skapat eget
            Api för hamstrarna spm lagras i en databas i Firebase Firestore.
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
            Det här är första slutprojektet jag hade i Kursen Javascript. Tanken
            var att skapa en hemsida åt mitt vän som jag tycker är en fantastisk
            konstnär. Den är skriven i Html, Css och Javascript
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;

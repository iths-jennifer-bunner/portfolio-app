import React from "react";
import "../styles/AboutMe.scss";

function AboutMe({ reference }) {
  return (
    <div className="wrapper" ref={reference}>
      <h3>OM MIG</h3>
      <div className="about__container">
        <div className="about__textField">
          <p>
            Hej och välkommen till min Portfolio-sida. Jag heter Jennifer Bunner
            och 40 år och bor på Söder i Stockholm.
          </p>
          <p>
            Jag hade jobbat som Visual merchandiser i över tio år när jag
            bestämde mig för att det var dags för mig att prova på något nytt
            och för att kunna göra ett karriärbyte. Bättre för sent än aldrig
            tänkte jag och jag visste direkt att jag ville jobba med något inom
            IT. Men exakt vad visste jag inte först då men jag sökte till en
            Java-utvecklare utbildning på IT-högskolan i Stockholm.
          </p>
          <p>
            När jag skulle börja fick jag höra att det var fullt på
            Java-utbildningen men att det fanns plats på Frontend-utvecklare och
            Webb-utvecklare och om jag ville börja på någon av dessa
            utbildningar istället. Tur var det, för jag kollade upp lite
            noggrannare vad dessa utbildningar gick ut på och jag insåg snabbt
            att Frontend skulle passa mig bättre, då jag alltid haft ett stort
            intresse för färg, form, design och att få vara kreativ.
          </p>
          <p>
            Nu har två år gått och jag tar snart min examen och jag söker därför
            ett jobb inom Frontend-utveckling där jag kan få chansen att utmanas
            och utvecklas. Jag har ett stort intresse av frontend-utveckling och
            jag försöker hela tiden att lära mig nya tekniker för att kunna bli
            en bättre utvecklare. Kontakta mig gärna på LinkedIn om ni vill veta
            eller kontakta mig här genom min kontaktsida. mera.
          </p>
          <p>
            Hemsidan är fortfarande under uppbyggnad men jag uppdaterar den allt
            eftersom.
          </p>
        </div>
        <div className="about__imageContainer">
          <img
            alt="Jennifer"
            src="../../images/blob-image1.png"
            className="about__image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

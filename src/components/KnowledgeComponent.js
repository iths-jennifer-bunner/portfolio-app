import React from "react";
import "../styles/KnowledgeComponent.scss";

function KnowledgeComponent({ reference }) {
  return (
    <div className="wrapper" ref={reference}>
      <h3>KUNSKAPER</h3>
      <div className="knowledge__container">
        <p>
          Under snart 2 år har jag fått lära mig allt från Html, Css och
          Javascript till att jobba med projekt med agila metoder, scrum och
          git. Vi har haft stort fokus på React.js men även node.js, apier,
          bygga sideor med egna teman och plugins i Wordpress och Php samt att
          styla med Sass/Scss och BEM-metodiken. Utbildningen har varit väldigt
          bred men uppskattar att jag har fått prova på så mycket och jag gillar
          att lära mig nya saker och jag lär mig snabbt. Jag brinner lite extra
          för design, färg och form men vill gärna lära fördjupa mina kunskaper
          i tex. React även om det är där jag har mest grund ifrån min
          utbildning och praktik så kan man alltid utvecklas mer.
        </p>
        <p>
          Under mina Lior har jag fått en bra bild över hur det fungerar att
          arbeta i team både remote men även inhouse. På min första lia fick jag
          i uppdrag att skapa från design till development deras produktsida:
          www.bocapital.se. som jag kodat helt själv med Vue.js och Quasar
          Framework. Jag översatte även sidan med hjälp av i18n samt
          installerade MailChimp.
        </p>
        <p>
          Under min andra lia hos ZignSec fick jag och en till praktikant i
          uppdrag att skapa en helt ny portal. Vi kodade den i React och har
          gjort login med hjälp av api och Bearer Token authentication, till ett
          avancerat sökformulär som hämtar information från ett annat api som
          sedan loopade ut resultaten på en ny sida. Även denna portal skapade
          vi vår egen design i Figma.
        </p>
      </div>
      <div className="knowledge__iconsContainer">
        <i className="fab fa-js-square knowledge__icons"></i>
        <i className="fab fa-html5 knowledge__icons"></i>
        <i className="fab fa-css3-alt knowledge__icons"></i>
        <i className="fab fa-react knowledge__icons"></i>
        <i className="fab fa-vuejs knowledge__icons"></i>
        <i className="fab fa-wordpress knowledge__icons"></i>
        <i className="fab fa-sass knowledge__icons"></i>
      </div>
    </div>
  );
}

export default KnowledgeComponent;

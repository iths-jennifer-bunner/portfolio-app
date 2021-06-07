import React from "react";
import "../styles/KnowledgeComponent.scss";

function KnowledgeComponent({ reference }) {
  return (
    <div className="wrapper" ref={reference}>
      <h3>KUNSKAPER</h3>
      <div className="knowledge__container">
        <p>
          Under de två år jag har gått på IT-högskolan har jag fått bra
          kunskaper i HTML, CSS och Javascript. Jag har också goda kunskaper i
          Sass och Bem-metodiken. Jag har gjort flera projekt i React.js och på
          min första Lia så kodade jag en sida i Vue.js.
        </p>
        <p>
          Vi har haft en omfattande kurs i Grafisk- och UX design, där vi har
          lärt oss flera begrepp, metoder, processer och verktyg som används
          inom User Experience. Vi har jobbat med Agil utveckling såsom Scrum
          och Kanban, sprint-planering, User Stories bla och det har jag sedan
          fått mer erfarenhet efter mina Lior som har jobbat med SCRUM.
          Kombinerat med kursen Agila metoder och Kommunikation, Kravhantering
          och Projektstyrning så jobbade vi med CMS och i detta fall Wordpress.
          Där har vi fått skapa egna webbsidor, e-handel och i grupparbete
          skapat eget tema till en fiktiv hemsida, med custom fields och Session
          variables. Så jag har grundläggande kunskaper i Php. Vi har även fått
          öva på backend-programmering med Node.js och pakethantering med NPM
          och prestandaoptimering.
        </p>
        <p>
          Utbildningen har varit väldigt bred men jag uppskattar att jag har
          fått prova på så mycket och jag gillar att lära mig nya saker och jag
          lär mig snabbt. Jag brinner lite extra för design, färg och form men
          vill gärna lära fördjupa mina kunskaper i tex. React.js även om det är
          där jag har mest grund ifrån min utbildning och praktik så kan man
          alltid utvecklas mer.
        </p>
        <p>
          Under mina Lior har jag fått en bra bild över hur det fungerar att
          arbeta i team både remote men även inhouse. På min första lia fick jag
          i uppdrag att skapa från design till development deras produktsida:
          <a href="www.bocapital.se"> www.bocapital.se</a>. som jag kodat helt
          själv med Vue.js och Quasar Framework. Jag översatte även sidan med
          hjälp av i18n samt installerade MailChimp.
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

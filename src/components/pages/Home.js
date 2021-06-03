import React, { useRef } from "react";
import "../../App.scss";
import HeaderComponent from "../../components/HeaderComponent";
import AboutMe from "../../components/AboutMe";
import ProjectComponent from "../../components/ProjectComponent";
import SchoolProjects from "../../components/SchoolProjects";
import KnowledgeComponent from "../../components/KnowledgeComponent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  return (
    <>
      <HeaderComponent />
      <Navbar
        reference={el1}
        navClick={() => scrollToDiv(el2)}
        navClick2={() => scrollToDiv(el3)}
        navClick3={() => scrollToDiv(el4)}
        navClick4={() => scrollToDiv(el5)}
      />
      <AboutMe reference={el2} />
      <ProjectComponent reference={el3} />
      <SchoolProjects reference={el4} />
      <KnowledgeComponent reference={el5} />
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import "../../App.scss";
import HeaderComponent from "../../components/HeaderComponent";
import AboutMe from "../../components/AboutMe";
import ProjectComponent from "../../components/ProjectComponent";
import SchoolProjects from "../../components/SchoolProjects";
import KnowledgeComponent from "../../components/KnowledgeComponent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <HeaderComponent />
      <Navbar />
      <AboutMe />
      <ProjectComponent />
      <SchoolProjects />
      <KnowledgeComponent />
      <Footer />
    </>
  );
}

export default Home;

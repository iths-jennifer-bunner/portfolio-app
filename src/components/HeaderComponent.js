import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/HeaderComponent.scss";

// import { init } from "../scripts/blob";

function HeaderComponent() {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [width]);

  // useEffect(() => {
  //   width > 601 && init();
  // }, [width]);
  // useEffect(() => {
  //   init();
  // }, []);
  // window.addEventListener("resize", init);

  // function handleSideNavToggle() {
  //   // console.log("toggle it");
  // }

  // var w =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  // if (w > 601) {
  //   alert("The size of the window is 1199");
  //   init();
  //   return;
  // }

  return (
    <div className="header-container blobBody">
      <div className="blob">
        <svg viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
      {/* {width < 600 && (
      
      )} */}
      {/* {width < 600 ? (
        <div className="blob">
          <svg viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
      ) : (
        init()
      )} */}
      <div className="container__title">
        <h1 className="header__title">JENNIFER BUNNER</h1>
        <h2 className="header__secondTitle">FRONTEND DEVELOPER</h2>{" "}
        {/* <i class="fas fa-chevron-down"></i> */}
      </div>
    </div>
  );
}

export default HeaderComponent;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<HeaderComponent />, rootElement);

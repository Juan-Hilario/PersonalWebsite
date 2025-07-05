import Timeline from "./Timeline";
import { useEffect } from "react";
import "../styles/AboutMe.css";
function AboutMe() {
  return (
    <>
      <div id="aboutMe">
        <div className="content">
          <h1>about me</h1>

          <p>
            I am a newly graduated Montclair State University computer science
            major. I aspire to be a web developer. I am currently job hunting to
            get some much needed work experience. I have experience with HTML,
            CSS, JavaScript, TypeScript, Python, React, Figma, and Express.js. I
            am eager to learn and excited for new opportunities.
          </p>
        </div>

        <div className="timelineSection">
          <div className="timelineTitle">
            <h2>work history</h2>

            <hr />
          </div>
          <div className="timeline">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

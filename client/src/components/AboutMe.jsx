import Timeline from "./Timeline";
import "../styles/AboutMe.css";
function AboutMe() {
  return (
    <>
      <div id="aboutMe">
        <div className="content">
          <h1>about me</h1>

          <p>
            I am a recent Computer Science graduate from Montclair State
            University with a strong passion for web development.
          </p>
          <p>
            I am actively seeking new opportunities to grow professionally and
            gain hands-on experience. I have a solid fondation in front-end and
            back-end skills, including CSS, JavaScript, TypeScript, Python,
            React, Figma, and Express.js.
          </p>
        </div>

        <Timeline />
      </div>
    </>
  );
}

export default AboutMe;

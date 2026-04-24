import Timeline from "./utils/Timeline";
import Skills from "./Skills";
import "../styles/AboutMe.css";
function AboutMe() {
  return (
    <>
      <div id="aboutMe">
        <div className="content">
          <h1>about me</h1>

          <p>
            I am a Computer Science graduate from Montclair State University
            with a strong passion for web development and software development.
          </p>
          <p>
            I am actively seeking new opportunities to grow professionally and
            gain hands-on experience. I have a solid foundation in front-end and
            back-end skills:
          </p>
          <Skills />
        </div>
        <Timeline />
      </div>
    </>
  );
}

export default AboutMe;

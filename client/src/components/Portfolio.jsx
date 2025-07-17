import "../styles/Portfolio.css";
import workingImg from "../assets/img/working4.gif";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="subHeading">
          <h1>portfolio</h1>
        </div>

        <div className="noContent content">
          <p>
            See what I might be working on @
            <a href="https://github.com/Juan-Hilario">GitHub</a>
          </p>
          <embed
            className="workingImg"
            src={workingImg}
            alt="keyboard animation"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;

import "../styles/Portfolio.css";

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
            src="src/assets/img/working4.gif"
            alt="keyboard animation"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;

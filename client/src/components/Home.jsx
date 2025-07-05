import AboutMe from "./AboutMe";

function Home() {
  return (
    <>
      <div className="main">
        <AboutMe />

        <div id="portfolio">
          <div>
            <div className="subHeading">
              <h1>portfolio</h1>
            </div>

            <p className="noContent">
              Nothing yet... <br />
              See what I might be working on @
              <a href="https://github.com/Juan-Hilario">GitHub</a>
              <br />
              <br />
              <embed
                className="workingImg"
                src="src/assets/img/working4.gif"
                alt="keyboard animation"
              />
            </p>
          </div>
        </div>

        <div id="contact">
          <div className="subHeading">
            <h1>contact me @</h1>
          </div>

          <div className="alert-box hidden">Copied to Clipboard</div>

          <div className="contactList">
            <div className="contactButtonDiv" id="emailDiv">
              <button
                id="emailButton"
                className="contactButton"
                // onclick="copyText()"
              >
                juanhilario5645@gmail.com
              </button>
            </div>

            <div className="contactButtonDiv" id="linkedinDiv">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-hilario-884b0b23a/"
              >
                <button role="" className="contactButton">
                  My LinkedIn Profile
                </button>
              </a>
            </div>

            <div className="contactButtonDiv" id="githubDiv">
              <a target="_blank" href="https://github.com/Juan-Hilario">
                <button role="" className="contactButton">
                  My Github Page
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

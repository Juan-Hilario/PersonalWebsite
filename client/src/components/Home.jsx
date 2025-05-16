function Home() {
  return (
    <>
      <div className="main">
        <div id="aboutMe">
          <div className="subHeading">
            <h1>about me</h1>
          </div>

          <div className="contentStyle1">
            <p>
              I am a newly graduated Montclair State University computer science
              major. I aspire to be a web developer. I am currently job hunting
              to get some much needed work experience. I have experience with
              HTML, CSS, JavaScript, TypeScript, Python, React, Figma, and
              Express.js. I am eager to learn and excited for new opportunities.
            </p>
            <br />
          </div>
          {/*  Make a timeline of events, if you can't just quit */}

          <div className="timeline"></div>
        </div>
        <div id="Portfolio">
          <div>
            <div className="subHeading">
              <h1>portfolio</h1>
            </div>

            <p className="noContentStyle">
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

        <div id="Contact">
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

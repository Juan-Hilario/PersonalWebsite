import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <>
      <div className="main">
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
export default Home;

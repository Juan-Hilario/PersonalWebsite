import "../styles/Contact.css";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    const alertElement = document.querySelector(".copyAlert");
    const emailBtn = document.querySelector("#emailButton");
    let inAnimation = false;
    function copyText() {
      navigator.clipboard.writeText("juanhilario5645@gmail.com");
      if (inAnimation) return;
      inAnimation = true;
      alertElement.classList.add("shown");
      const alertElementAnimation1 = alertElement.animate(
        [
          {
            transform: "translateY(0%)",
          },

          {
            transform: "translateY(-100%)",
          },
        ],
        {
          duration: 1000,
          direction: "normal",
          fill: "forwards",
          easing: "ease",
        },
      );
      alertElementAnimation1.onfinish = () => {
        setTimeout(() => {
          const alertElementAnimation2 = alertElement.animate(
            [
              {
                transform: "translateY(-100%)",
              },
              {
                transform: "translateY(100%)",
              },
            ],
            {
              duration: 1000,
              direction: "normal",
              fill: "forwards",
              easing: "ease",
            },
          );
          alertElementAnimation2.onfinish = () => {
            inAnimation = false;
          };
        }, 1000);
      };
    }
    emailBtn.addEventListener("click", copyText);
    return () => {
      emailBtn.removeEventListener("click", copyText);
    };
  }, []);

  return (
    <>
      <div id="contact">
        <div className="subHeading">
          <h1>contact me @</h1>
        </div>

        <div className="contactList">
          <div className="contactButtonDiv" id="emailDiv">
            <div className="copyAlert">Copied!</div>
            <button className="contactButton" id="emailButton">
              juanhilario5645@gmail.com
            </button>
          </div>

          <div className="contactButtonDiv" id="linkedinDiv">
            <a target="_blank" href="https://www.linkedin.com/in/juanmhilario">
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
    </>
  );
}

export default Contact;

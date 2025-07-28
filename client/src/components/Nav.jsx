import "../styles/Nav.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState(0);
  const [btnRotation, setBtnRotation] = useState(0);

  let navigate = useNavigate();

  const incrementRotation = () => {
    setBtnRotation((prev) => prev + 90);
  };

  const navLinks = [
    { name: "Portfolio", section: "#portfolio" },
    { name: "Contact me", section: "#contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (width > 300) {
      setCollapsed(true);
      setBtnRotation(0);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleSecretBtn = () => {
    navigate("/PEMA");
  };

  const handleScrollToSection = (selector) => {
    const section = document.querySelector(selector);
    const navHeight = document
      .querySelector("nav")
      .getBoundingClientRect().height;
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + sectionPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="nav">
        <div className="navRight">
          <div
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 468 472"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient_1"
                  gradientUnits="userSpaceOnUse"
                  x1="641"
                  y1="617"
                  x2="241"
                  y2="247"
                >
                  <stop offset="0" stopColor="#0A0A0A" />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <g id="SingleElement">
                <path
                  id="Rectangle"
                  d="M403 0C429.513 0 451 21.4867 451 48L451 395C451 421.513 429.513 443 403 443L48 443C21.4867 443 0 421.513 0 395L0 48C0 21.4867 21.4867 0 48 0L403 0Z"
                  fill="#8286ed"
                />

                <path
                  id="Vector"
                  d="M26.2723 0L0.720459 120.922C0.720459 120.922 -2.88318 136.047 6.0282 130.874"
                  fill="none"
                  strokeWidth="9"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  transform="translate(333 72)"
                />

                <path
                  id="Vector"
                  d="M54.9253 129.42C22.1372 118.969 13.1467 92.1754 36.9557 69.0016C60.7644 45.8272 150.381 34.5758 150.381 34.5758C150.381 34.5758 187.897 21.6955 194.256 12.0939C200.616 2.49216 164.698 -22.1539 143.145 48.1584C121.592 118.471 48.0099 331.447 8.68848 288.278C-30.6329 245.108 75.713 245.005 85.2375 243.317C94.762 241.628 146.964 243.307 166.718 162.442"
                  fill="none"
                  strokeWidth="12"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  transform="translate(86 79)"
                />
                <path
                  id="Vector"
                  d="M78.4912 0C78.4912 0 68.6553 91.1679 49.1218 119.014C29.5884 146.86 -0.972168 129.91 0.0236816 111.384C1.01941 92.8576 28.5472 60.3416 69.6893 50.6771C110.831 41.0127 143 20.8211 143 20.8211"
                  fill="none"
                  strokeWidth="9"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  transform="translate(240 100)"
                />
              </g>
            </svg>
          </div>

          {width > 300 ? (
            <div className="links">
              {navLinks.map((link, index) => (
                <button
                  className="link"
                  key={index}
                  onClick={() => handleScrollToSection(link.section)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="navLeft">
          {width > 300 ? (
            <button onClick={() => handleSecretBtn()} className="link secret">
              &#x2665;
            </button>
          ) : (
            <button
              className={`hamburgerBtn ${!collapsed ? "toggled" : null}`}
              style={{ transform: `rotate(${btnRotation}deg)` }}
              onClick={() => {
                incrementRotation();
                setCollapsed(!collapsed);
              }}
            >
              ☰
            </button>
          )}
        </div>
        <div className={`expandedLinks ${!collapsed ? "expanded" : null}`}>
          {navLinks.map((link, index) => (
            <button
              onClick={() => {
                setCollapsed(true);
              }}
              key={index}
              className="link"
              href={link.path || null}
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;

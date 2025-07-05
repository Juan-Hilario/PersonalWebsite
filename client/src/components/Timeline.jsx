import LinkIcon from "./LinkIcon";
import { useEffect } from "react";
import "../styles/Timeline.css";

function Timeline() {
  const experience = [
    {
      name: "GlobiFYE",
      logoFile: "globifyeLogo.jpg",
      position: "UI/UX Intern",
      desc: "Used Figma to create and enhance low fidelity wireframes for application development. Collaborated and communicated effectively with the team to ensure designs align with project goals and requirements.",
      date: "Nov 2024 - Mar 2025",
      link: "https://www.google.com",
    },
    {
      name: "GlobiFYE",
      logoFile: "",
      position: "UI/UX Intern",
      desc: "Used Figma to create and enhance low fidelity wireframes for application development. Collaborated and communicated effectively with the team to ensure designs align with project goals and requirements.",
      date: "Nov 2024 - Mar 2025",
      link: "",
    },
    {
      name: "GlobiFYE",
      logoFile: "globifyeLogo.jpg",
      position: "UI/UX Intern",
      desc: "Used Figma to create and enhance low fidelity wireframes for application development. Collaborated and communicated effectively with the team to ensure designs align with project goals and requirements.",
      date: "Nov 2024 - Mar 2025",
      link: "",
    },
  ];

  let isScrolling = false;
  let now = 0;
  let scrollStartTime = 0;

  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    function onWheel(e) {
      e.preventDefault();
      handleScroll(timeline, e, e.deltaY > 0 ? "Down" : "Up");
    }
    timeline.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      timeline.removeEventListener("wheel", onWheel);
    };
  }, []);

  function handleScroll(timeline, e, direction) {
    now = Date.now();

    if (isScrolling) {
      return;
    }

    if (now - scrollStartTime < 1500) {
      return;
    }

    const currentNodeIndex = getCurrentNodeIndex(timeline);

    if (direction === "Down") {
      if (currentNodeIndex === experience.length - 1) {
        return;
      } else {
        // Go to next node
        scrollToNode(timeline, currentNodeIndex + 1);
      }
    } else {
      if (currentNodeIndex === 0) {
        return;
      } else {
        // Go to previous node
        scrollToNode(timeline, currentNodeIndex - 1);
      }
    }
  }

  function getCurrentNodeIndex(timeline) {
    const container = document.querySelector("#aboutMe");
    const scrollTop = timeline.scrollTop;
    const timelineHeight = container.clientHeight;
    const centerPoint = scrollTop + timelineHeight / 2;

    const nodes = document.querySelectorAll(".timelineEvent");

    let closestIndex = 0;
    let closestDistance = Infinity;

    nodes.forEach((node, index) => {
      const nodeTop = node.offsetTop;
      const distance = Math.abs(nodeTop - centerPoint);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function scrollToNode(timeline, index) {
    isScrolling = true;
    scrollStartTime = Date.now();

    const navHeight = document.querySelector(".nav").clientHeight;
    const timelineTitleHeight = document
      .querySelector(".timelineTitle")
      .getBoundingClientRect().height;
    const footerHeight = document.querySelector("footer").clientHeight;
    const heightDeduction = navHeight + timelineTitleHeight + footerHeight;

    // fix this value so it is not blocked
    const node =
      document.querySelector(`#node-${index}`).offsetTop - heightDeduction;

    timeline.scrollTo({
      top: Math.max(0, node),
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  return (
    <>
      {experience.map((e, index) => (
        <div key={index} id={index} className="timelineEvent">
          <div className="nodeWrapper">
            <div className="node" id={`node-${index}`}></div>
            {experience.indexOf(e) === experience.length - 1 ? null : (
              <div className="line"></div>
            )}
          </div>

          <div className="timelineContent">
            <div className="companyName">
              {" "}
              {e.logoFile ? (
                <img
                  src={`src/assets/img/${e.logoFile}`}
                  width="20%"
                  style={{ borderRadius: "50%" }}
                  alt="GlobiFYE Logo"
                />
              ) : null}
              <div>
                <h2>
                  {e.name}
                  {e.link ? <LinkIcon i={index} link={e.link} /> : null}
                </h2>
                <h5 className="timelineDate">{e.date}</h5>
              </div>
            </div>

            <h4>{e.position}</h4>
            <p>{e.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Timeline;

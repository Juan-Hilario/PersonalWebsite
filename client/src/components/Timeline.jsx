import LinkIcon from "./LinkIcon";
import { useEffect } from "react";
import "../styles/Timeline.css";
import globiFYELogo from "../assets/img/globifyeLogo.jpg";

function Timeline() {
  const experience = [
    {
      name: "GlobiFYE",
      logoFile: globiFYELogo,
      position: "UI/UX Intern",
      desc: "Used Figma to create and enhance low fidelity wireframes for application development. Collaborated and communicated effectively with the team to ensure designs align with project goals and requirements.",
      date: "Nov 2024 - Mar 2025",
      link: "https://globifye.com/",
    },
  ];

  let isScrolling = false;
  let now = 0;
  let scrollStartTime = 0;

  function getCurrentOrientation() {
    return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
  }

  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    function onWheel(e) {
      if (CSS.supports("scroll-behavior", "smooth")) {
        e.preventDefault();
        handleScrollX(timeline, e.deltaX > 0 ? "Right" : "Left");
      }
    }
    timeline.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      timeline.removeEventListener("wheel", onWheel);
    };
  });

  function handleScrollX(timeline, direction) {
    now = Date.now();

    if (isScrolling) {
      return;
    }

    if (now - scrollStartTime < 1500) {
      return;
    }

    const currentNodeIndex = getCurrentNodeIndex(timeline);

    if (direction === "Right") {
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
    const nodes = document.querySelectorAll(".timelineEvent");
    const scrollLeft = timeline.scrollLeft;
    const containerWidth = container.clientWidth;
    const centerPoint = scrollLeft + containerWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    nodes.forEach((node, index) => {
      const nodeLeft = node.offsetLeft;
      const distance = Math.abs(nodeLeft - centerPoint);

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
    const containerWidth = document
      .querySelector("#aboutMe")
      .getBoundingClientRect().width;
    const screenWidth = screen.width;
    const widthDeduction = screenWidth - containerWidth;
    const node =
      document.querySelector(`#node-${index}`).offsetLeft - widthDeduction;

    timeline.scrollTo({
      left: Math.max(0, node),
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  return (
    <>
      <div className="timelineSection">
        <div className="timelineTitle">
          <h2>work history</h2>

          <hr />
        </div>

        <div
          className={`${experience.length === 1 ? "timeline solo" : "timeline"}`}
        >
          {experience.map((e, index) => (
            <div
              key={index}
              id={index}
              className={`${index === experience.length - 1 ? "timelineEvent lastTimelineEvent" : "timelineEvent"}`}
            >
              <div className="nodeWrapper">
                <div className="node" id={`node-${index}`}></div>
                {experience.indexOf(e) === experience.length - 1 ? null : (
                  <div className="line"></div>
                )}
              </div>

              <div className="content">
                <div className="companyName">
                  {" "}
                  {e.logoFile ? (
                    <img
                      src={e.logoFile}
                      className="companyLogo"
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

                <h3>{e.position}</h3>
                <p className="jobDesc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Timeline;

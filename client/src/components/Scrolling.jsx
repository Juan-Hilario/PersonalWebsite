import { useEffect } from "react";
import "../styles/test.css";

function Scrolling() {
  let timelineNodes = [];

  for (let i = 0; i < 5; i++) {
    timelineNodes.push(`node${i}`);
  }

  let isScrolling = false;
  let now = 0;
  let scrollStartTime = 0;

  document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".test-scrollable");

    timeline.addEventListener("wheel", (e) => {
      e.preventDefault();
      handleScroll(timeline, e, e.deltaY > 0 ? "Down" : "Up");
    });
  });

  function handleScroll(timeline, e, direction) {
    now = Date.now();
    console.log("trying to scroll");
    if (isScrolling) {
      return;
    }
    console.log(`scrollStartTime: ${scrollStartTime} now: ${now}`);

    if (now - scrollStartTime < 1500) {
      console.log("got em");
      return;
    }

    const currentNodeIndex = getCurrentNodeIndex(timeline);
    console.log(currentNodeIndex);

    if (direction === "Down") {
      if (currentNodeIndex === timelineNodes.length - 1) {
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
    const container = document.querySelector("#split");
    const scrollTop = timeline.scrollTop;
    const timelineHeight = container.clientHeight;
    const centerPoint = scrollTop + timelineHeight / 2;

    const nodes = document.querySelectorAll(".test-node");

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
    const footerHeight = document.querySelector("footer").clientHeight;
    const heightDeduction = navHeight + footerHeight;

    console.log(heightDeduction);

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
      <div className="test-container">
        <div className="test-section" id="split">
          <h1 className="test-sticky">Text</h1>
          <div className="test-scrollable">
            {timelineNodes.map((node, index) => (
              <div
                className="test-node"
                id={`node-${index}`}
                key={index}
                style={{ backgroundColor: "emerald" }}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
        <div className="test-section"></div>
        <div className="test-section"></div>
      </div>
    </>
  );
}

export default Scrolling;

const node1 = document.getElementById("node1");

node1.addEventListener("wheel", () => {
  node1.scrollIntoView({ behavior: "instant", block: "end" });
});

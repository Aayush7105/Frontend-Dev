const box = document.getElementById("box");
const coords = document.getElementById("coords");
box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  coords.textContent = `X: ${e.clientX - rect.left}, Y: ${
    e.clientY - rect.top
  }`;
});
box.addEventListener("dblclick", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const d = document.createElement("div");
  d.className = "dot";
  d.style.left = x + "px";
  d.style.top = y + "px";
  box.appendChild(d);
});

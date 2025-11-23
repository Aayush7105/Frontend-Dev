const ta = document.getElementById("ta");
const counter = document.getElementById("counter");
const reset = document.getElementById("reset");
const MAX = 100;
ta.addEventListener("keydown", (e) => {
  if (ta.value.length >= MAX && e.key.length === 1) {
    e.preventDefault();
  }
});
ta.addEventListener("input", () => {
  const left = MAX - ta.value.length;
  counter.textContent = left;
  counter.className = "";
  if (left <= 20 && left > 0) counter.classList.add("warn");
  if (left === 0) counter.classList.add("full");
});
reset.addEventListener("click", () => {
  ta.value = "";
  counter.textContent = MAX;
  counter.className = "";
});

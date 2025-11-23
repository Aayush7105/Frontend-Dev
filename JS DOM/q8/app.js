const ddBtn = document.getElementById("ddBtn");
const opts = document.getElementById("opts");
const dd = document.getElementById("dd");
ddBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  opts.classList.toggle("show");
});
opts.addEventListener("click", (e) => {
  const t = e.target;
  if (t.dataset && t.dataset.value) {
    ddBtn.textContent = t.textContent;
    opts.classList.remove("show");
  }
});
window.addEventListener(
  "click",
  () => {
    opts.classList.remove("show");
  },
  true
);

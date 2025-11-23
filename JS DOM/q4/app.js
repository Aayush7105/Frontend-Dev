const b = document.body;
document
  .getElementById("light")
  .addEventListener("click", () => b.setAttribute("data-theme", "light"));
document
  .getElementById("dark")
  .addEventListener("click", () => b.setAttribute("data-theme", "dark"));
document
  .getElementById("blue")
  .addEventListener("click", () => b.setAttribute("data-theme", "blue"));

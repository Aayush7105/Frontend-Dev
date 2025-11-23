const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const urls = [
  "https://picsum.photos/300/200?1",
  "https://picsum.photos/300/200?2",
  "https://picsum.photos/300/200?3",
  "https://picsum.photos/300/200?4",
  "https://picsum.photos/300/200?5",
  "https://picsum.photos/300/200?6",
];
urls.forEach((u) => {
  const img = document.createElement("img");
  img.src = u;
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImg.src = u;
  });
  grid.appendChild(img);
});
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.querySelector(".inner").addEventListener("click", (e) => {
  e.stopPropagation();
});

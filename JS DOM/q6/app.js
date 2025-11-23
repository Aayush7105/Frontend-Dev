const search = document.getElementById("search");
const tbl = document.getElementById("tbl").tBodies[0];
const no = document.getElementById("no");
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  let found = false;
  Array.from(tbl.rows).forEach((r) => {
    const text = r.textContent.toLowerCase();
    const match = text.indexOf(q) !== -1;
    r.style.display = match ? "" : "none";
    if (match) found = true;
  });
  no.style.display = found ? "none" : "block";
});

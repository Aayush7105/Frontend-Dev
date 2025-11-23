const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
let editingId = null;
addBtn.addEventListener("click", () => {
  const v = productInput.value.trim();
  if (!v) return;
  const li = document.createElement("li");
  li.innerHTML = `<span class="label">${v}</span><span class="controls"><button class="edit">Edit</button><button class="delete">Delete</button></span>`;
  productList.appendChild(li);
  productInput.value = "";
});
productList.addEventListener("click", (e) => {
  const btn = e.target;
  const li = btn.closest("li");
  if (!li) return;
  if (btn.classList.contains("delete")) {
    li.remove();
  } else if (btn.classList.contains("edit")) {
    if (editingId) return;
    editingId = li;
    const span = li.querySelector(".label");
    const text = span.textContent;
    const input = document.createElement("input");
    input.value = text;
    li.insertBefore(input, span);
    span.style.display = "none";
    btn.textContent = "Save";
    const saveHandler = () => {
      span.textContent = input.value;
      span.style.display = "";
      input.remove();
      btn.textContent = "Edit";
      editingId = null;
      document.removeEventListener("click", outside);
    };
    btn.addEventListener("click", function saver() {
      saveHandler();
      btn.removeEventListener("click", saver);
    });
    const outside = (ev) => {
      if (!li.contains(ev.target)) {
        saveHandler();
      }
    };
    document.addEventListener("click", outside);
  }
});

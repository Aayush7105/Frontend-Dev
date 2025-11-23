const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summary = document.getElementById("summary");
const nameI = document.getElementById("name");
const emailI = document.getElementById("email");
const passI = document.getElementById("password");
function show(s) {
  [step1, step2, step3].forEach((x) => x.classList.remove("active"));
  s.classList.add("active");
}
document.getElementById("next1").addEventListener("click", () => {
  if (nameI.value.trim().length < 1) {
    document.getElementById("errName").textContent = "Enter name";
    return;
  }
  document.getElementById("errName").textContent = "";
  show(step2);
});
document.getElementById("back2").addEventListener("click", () => show(step1));
document.getElementById("next2").addEventListener("click", () => {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailI.value)) {
    document.getElementById("errEmail").textContent = "Invalid email";
    return;
  }
  document.getElementById("errEmail").textContent = "";
  show(step3);
});
document.getElementById("back3").addEventListener("click", () => show(step2));
document.getElementById("finish").addEventListener("click", () => {
  if (passI.value.length < 6) {
    document.getElementById("errPass").textContent = "Min 6 chars";
    return;
  }
  document.getElementById("errPass").textContent = "";
  document.body
    .querySelectorAll(".step")
    .forEach((s) => (s.style.display = "none"));
  summary.style.display = "block";
  summary.innerHTML = `<h3>Summary</h3><p>Name: ${nameI.value}</p><p>Email: ${emailI.value}</p>`;
});

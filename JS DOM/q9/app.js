const form = document.getElementById("f");
const nameI = document.getElementById("name");
const emailI = document.getElementById("email");
const passI = document.getElementById("password");
const eName = document.getElementById("eName");
const eEmail = document.getElementById("eEmail");
const ePass = document.getElementById("ePass");
const msg = document.getElementById("msg");
function validate() {
  let ok = true;
  eName.textContent = "";
  eEmail.textContent = "";
  ePass.textContent = "";
  if (nameI.value.trim() === "") {
    eName.textContent = "Name required";
    ok = false;
  }
  if (!emailI.value.includes("@")) {
    eEmail.textContent = "Email must contain @";
    ok = false;
  }
  if (passI.value.length < 6) {
    ePass.textContent = "Password min 6";
    ok = false;
  }
  return ok;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "";
  if (validate()) {
    msg.textContent = "Form Submitted Successfully";
  }
});
[nameI, emailI, passI].forEach((i) =>
  i.addEventListener("input", () => {
    validate();
    msg.textContent = "";
  })
);

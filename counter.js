let counter = 0;

function increase() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

function decrease() {
  counter--;
  document.getElementById("counter").textContent = counter;
  decrease();
  increase();
}

function plusTwo() {
  counter += 2;
  document.getElementById("counter").textContent = counter;
  plusTwo();
}

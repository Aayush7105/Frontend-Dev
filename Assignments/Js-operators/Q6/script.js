let count = 0;

function increment() {
  count++;
  console.log("Count:", count);

  function inner() {
    console.log("Nested access:", count);
  }
  inner();
}

function decrement() {
  count--;
  console.log("Count:", count);

  function inner() {
    console.log("Nested access:", count);
  }
  inner();
}

increment();
increment();
decrement();

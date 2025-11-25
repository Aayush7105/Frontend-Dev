// q1_asyncCoffee.js
// The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds.
// The process uses Promise chaining (.then()) and .catch() for errors.

function delayRandom(minMs = 1000, maxMs = 2000) {
  const ms = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise((res) => setTimeout(res, ms));
}

function boilWater() {
  return delayRandom().then(() => {
    // simulate random failure (20% chance)
    if (Math.random() < 0.2) {
      return Promise.reject(new Error("Boiling failed: kettle malfunction."));
    }
    console.log("Step: Water boiled.");
    return "boiled water";
  });
}

function brewCoffee(water) {
  return delayRandom().then(() => {
    if (Math.random() < 0.15) {
      return Promise.reject(new Error("Brewing failed: no coffee grounds."));
    }
    console.log(`Step: Coffee brewed using ${water}.`);
    return "brewed coffee";
  });
}

function pourIntoCup(coffee) {
  return delayRandom().then(() => {
    if (Math.random() < 0.1) {
      return Promise.reject(new Error("Pouring failed: cup missing."));
    }
    console.log(`Step: ${coffee} poured into cup.`);
    return "coffee in cup";
  });
}

// Use Promise chaining (.then())
console.log("Starting coffee process (promise chain)...");
boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err.message);
  });

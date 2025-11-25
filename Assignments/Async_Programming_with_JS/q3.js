// q3_getBugs.js
// Bug Tracker: Callback to Promise Migration

// Original callback-based function (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// Convert to Promise-based version: getBugs()
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure (25% chance)
      const failed = Math.random() < 0.25;
      if (failed) {
        reject(new Error("Failed to fetch bugs: network error"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Use .then() and .catch() to log results
getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    // console.table for neat display
    console.table(bugs.map((bug, i) => ({ id: i + 1, issue: bug })));
  })
  .catch((err) => {
    console.error("Error while fetching bugs:", err.message);
  });

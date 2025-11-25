// q4_deployRace.js
// DevOps Delay: Async Timeout Race
// Manage concurrent server responses using Promise.all() and Promise.race()

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server A failed during deployment."));
      } else {
        resolve("Server A deployed (2s)");
      }
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server B failed during deployment."));
      } else {
        resolve("Server B deployed (3s)");
      }
    }, 3000);
  });
}

// Promise.all for complete deployment
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.table(results);
  })
  .catch((err) => {
    // If any server rejects, Promise.all rejects here
    console.error("Deployment error (all):", err.message);
  });

// Promise.race for the fastest response
Promise.race([serverA(), serverB()])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((err) => {
    // race rejects if the first settled is a rejection
    console.error("Fastest response failed:", err.message);
  });

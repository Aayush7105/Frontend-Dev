// q7_allSettled.js
// The Lazy Loader: Promise Combinator Practice
// Use Promise.allSettled() to load multiple modules, randomly reject one,
// print which modules succeeded/failed, and calculate total time.

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // random rejection possibility (25%)
      if (Math.random() < 0.25) {
        reject(new Error("Profile failed to load"));
      } else {
        resolve("Profile Loaded");
      }
    }, 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) {
        reject(new Error("Posts failed to load"));
      } else {
        resolve("Posts Loaded");
      }
    }, 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) {
        reject(new Error("Messages failed to load"));
      } else {
        resolve("Messages Loaded");
      }
    }, 1000);
  });
}

async function loadAllModules() {
  const start = Date.now();
  console.log("Loading modules...");
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
  ]);
  const end = Date.now();
  results.forEach((res, idx) => {
    const name = ["Profile", "Posts", "Messages"][idx];
    if (res.status === "fulfilled") {
      console.log(`${name}: Success -> ${res.value}`);
    } else {
      console.log(`${name}: Failed -> ${res.reason.message}`);
    }
  });
  console.log(`Total time taken: ${(end - start) / 1000} seconds`);
}

// Run it:
loadAllModules();

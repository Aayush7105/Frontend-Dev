// q5_callbacks_and_async.js
// Frontend Rush: Avoiding Callback Hell
// Implement the pipeline (design → build → test → deploy → celebrate)
// First: nested callbacks (callback hell)
// Then: async/await version (cleaner)

// Helper that simulates an async stage which takes 1 second
function stageWithCallback(name, callback) {
  setTimeout(() => {
    console.log(`Stage complete (callback): ${name}`);
    callback(null, name);
  }, 1000);
}

// ===== Callback Hell implementation =====
function runPipelineWithCallbacks() {
  console.log("Pipeline (callbacks) starting...");
  stageWithCallback("design", (err, res) => {
    if (err) return console.error(err);
    stageWithCallback("build", (err2, res2) => {
      if (err2) return console.error(err2);
      stageWithCallback("test", (err3, res3) => {
        if (err3) return console.error(err3);
        stageWithCallback("deploy", (err4, res4) => {
          if (err4) return console.error(err4);
          stageWithCallback("celebrate", (err5, res5) => {
            if (err5) return console.error(err5);
            console.log("Pipeline finished (callbacks). 🎉");
          });
        });
      });
    });
  });
}

// ===== Async/Await implementation =====
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Stage complete (promise): ${name}`);
      resolve(name);
    }, 1000);
  });
}

async function runPipelineWithAsyncAwait() {
  console.log("Pipeline (async/await) starting...");
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline finished (async/await). 🎉");
  } catch (err) {
    console.error("Pipeline failed:", err);
  }
}

/*
Why async/await improves readability:
- The callback version nests each async step inside the previous step's callback, leading to deep nesting and harder-to-read code (the classic "callback hell").
- The async/await version reads top-to-bottom like synchronous code, making control flow, error handling (try/catch), and maintenance much easier.
*/

// Run both to demonstrate:
runPipelineWithCallbacks();

// Delay starting the async/await run to avoid interleaving too much (for clarity)
setTimeout(() => {
  runPipelineWithAsyncAwait();
}, 7000);

// q10_deliveryPipeline.js
// The Final Delivery: Async Pipeline Debugger
// Steps: takeOrder → prepare → pack → dispatch → deliver
// Each returns a Promise with random 1–2s delay and random success/failure.
// runPipeline() uses async/await and try/catch.

function randomDelay(min = 1000, max = 2000) {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((res) => setTimeout(res, ms));
}

function stage(name, failProbability = 0.15) {
  return async function () {
    await randomDelay();
    if (Math.random() < failProbability) {
      throw new Error(`${name} failed`);
    }
    return `${name} done`;
  };
}

const takeOrder = stage("Order taken", 0.05);
const prepare = stage("Food prepared", 0.15);
const pack = stage("Package ready", 0.05);
const dispatch = stage("Out for delivery", 0.1);
const deliver = stage("Delivery completed", 0.1);

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1: Order taken");
    await takeOrder();
    console.log("Step 2: Food prepared");
    await prepare();
    console.log("Step 3: Package ready");
    await pack();
    console.log("Step 4: Out for delivery");
    await dispatch();
    await deliver();
    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!");
    console.error("Reason:", err.message);
  }
}

/*
Comments on async behavior and event loop:
- Each 'await' pauses the async function until the awaited Promise settles, but it does NOT block the event loop.
- While awaiting, other microtasks/macrotasks can run — the event loop continues servicing other work.
- Using async/await gives linear/top-down control flow reading, while the underlying behavior is still asynchronous Promise resolution.
*/
runPipeline();

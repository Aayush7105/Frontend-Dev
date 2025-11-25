// q9_eventLoopDebug.js
// Debugging the Event Loop
// Predict and explain execution order, then run and compare.

// Predicted output (write this BEFORE running):
// 1. "Script start"            <- synchronous
// 2. "Script end"              <- synchronous
// 3. "Promise callback"        <- microtask (runs after current call stack)
// 4. "Timeout callback"        <- macrotask (runs later)
// This is because Promise callbacks (microtasks) run before macrotasks like setTimeout.

// Now execute and observe:
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Synchronous logs ("Script start" and "Script end") run immediately in the current call stack in order.
- Promise.then callbacks are queued into the microtask queue and will run after the current stack finishes but before the event loop processes the macrotask queue.
- setTimeout callbacks go to the macrotask queue; they will only run after microtasks are drained and the event loop picks the macrotask.
- Therefore "Promise callback" appears before "Timeout callback".
*/

// q2_taskOrder.js
// Task Scheduler: Micro vs Macro Challenge
// Demonstrates microtask (Promise.then) vs macrotask (setTimeout) ordering.

// Expected behaviour (explained in comments below):
// 1. "Start" (synchronous)
// 2. "Sync inside" (synchronous)
// 3. "Microtask: Promise" (Promise.then runs as a microtask after current script)
// 4. "End" (synchronous log after scheduling tasks — note order of statements in code)
// 5. "Macrotask: setTimeout" (runs later as a macrotask)

// However the exact sequence depends on where logs are placed.
// We'll implement as requested:

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then() (microtask)");
});

// Synchronous log:
console.log("Synchronous: immediate log");

// Final log:
console.log("End");

/*
Explanation (in comments):
- Synchronous code runs immediately in the current call stack, so "Start", "Synchronous: immediate log", and "End" appear first (in the order they appear).
- Promise.then() callbacks are microtasks: they run after the current call stack completes but before the event loop picks the next macrotask.
- setTimeout callbacks are macrotasks: they run on the next macrotask turn, after microtasks have drained.
- Therefore microtasks (Promise callbacks) run before macrotasks (setTimeout).
*/

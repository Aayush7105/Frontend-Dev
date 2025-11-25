// q8_retryOrder.js
// Order Processing Flow: Async Retry Mechanism
// submitOrder fails 50% of the time; processOrder tries up to 3 times.

function submitOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% failure
      if (Math.random() < 0.5) {
        reject(new Error("submitOrder: network / server error"));
      } else {
        resolve({ status: "ok", orderId: Math.floor(Math.random() * 10000) });
      }
    }, 500); // faster for demo but still async
  });
}

async function processOrder(order) {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder(order);
      console.log(`Attempt ${attempt}: Success -> orderId ${result.orderId}`);
      return result;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed -> ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      // optionally wait a bit before retrying
      await new Promise((res) => setTimeout(res, 300));
    }
  }
}

// Usage example with try/catch to handle final failure
(async () => {
  try {
    const result = await processOrder({ item: "Coffee Mug", qty: 1 });
    console.log("Order processed:", result);
  } catch (err) {
    console.error(err.message);
  }
})();

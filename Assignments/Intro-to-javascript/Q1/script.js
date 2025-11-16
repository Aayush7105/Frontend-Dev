const userName = "Aman";
const hour = new Date().getHours();

let message = "";

if (hour < 12) message = `Good Morning ${userName}!`;
else if (hour < 17) message = `Good Afternoon ${userName}!`;
else message = `Good Evening ${userName}!`;

console.log(message);

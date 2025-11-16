let feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.split(" ").length;

const negative =
  feedback.toLowerCase().includes("bad") ||
  feedback.toLowerCase().includes("poor");

console.log("Word Count:", words);

if (negative) console.log("Needs Improvement");
else console.log("Positive Feedback");

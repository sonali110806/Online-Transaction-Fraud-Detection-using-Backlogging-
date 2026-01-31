module.exports = function fraudCheck({
  listing,
  paymentMethod,
  recentOrders,
  previousAttempts,
  email
}) {
  let riskScore = 0;
  let reasons = [];

  if (listing.price > 50000) {
    reasons.push("High transaction amount");
    riskScore += 50;
  }

  if (paymentMethod === "COD" && listing.price > 2000) {
    reasons.push("COD on high-value product");
    riskScore += 30;
  }

  if (previousAttempts >= 3) {
    reasons.push("Multiple failed attempts");
    riskScore += 40;
  }

  if (recentOrders >= 2) {
    reasons.push("Multiple rapid transactions");
    riskScore += 20;
  }

  if (!email.includes("@") || email.length < 10) {
    reasons.push("Invalid email pattern");
    riskScore += 10;
  }

  if (riskScore >= 60) {
    return { status: "BLOCKED", riskScore, reasons };
  }

  return { status: "APPROVED", riskScore, reasons };
};

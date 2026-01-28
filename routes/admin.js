const express = require("express");
const router = express.Router();
const FraudLog = require("../models/FraudLog");
const { isAdminLoggedIn } = require("../middleware/auth");

router.get("/dashboard",isAdminLoggedIn, async (req, res) => {
  try {
    const totalBlocked = await FraudLog.countDocuments({
      riskLevel: "HIGH"
    });

    const highRisk = await FraudLog.countDocuments({
      fraudScore: { $gte: 60 }
    });

    const logs = await FraudLog.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .populate("user")
      .populate("order");
      
    res.render("admin/dashboard", {
      totalBlocked,
      highRisk,
      logs
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Admin dashboard error");
  }
});

module.exports = router;

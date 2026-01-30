const express = require("express");
const router = express.Router();
const FraudLog = require("../models/FraudLog");
const { isAdminLoggedIn } = require("../middleware/auth");

router.get("/login", (req, res) => {
    res.render("admin/login");
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body); //

    // TEMP check (we'll improve later)
    if (email === "admin@gmail.com" && password === "admin123") {
       req.session.admin = true;   
        return res.redirect("/admin/dashboard");
    }

    return res.send("Invalid admin credentials");
});

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

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin/login");
});


module.exports = router;


const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth/adminLogin");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    req.session.admin = true;
    return res.redirect("/admin/dashboard");
  }

  res.send("Invalid admin credentials");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;

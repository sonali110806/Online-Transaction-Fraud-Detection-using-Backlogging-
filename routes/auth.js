const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

/* ================= REGISTER ================= */

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    fullName,
    email,
    password: hashedPassword
  });

  await user.save(); 
  res.redirect("/login");
});

/* ================= LOGIN ================= */

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }); 
  if (!user) {
    return res.send("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send("Invalid credentials");
  }

  req.session.user = user._id;
  res.redirect("/listings");
});

module.exports = router;

module.exports.isUserLoggedIn = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.redirect("/login");
  }
  next();
};

module.exports.isAdminLoggedIn = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect("/admin/login");
};


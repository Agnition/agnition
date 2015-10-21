module.exports = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.render('landing_page');
  }
};

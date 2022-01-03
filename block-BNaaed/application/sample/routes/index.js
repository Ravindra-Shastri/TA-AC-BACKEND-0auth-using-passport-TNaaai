var express = require('express');
var router = express.Router();
const passport = require('passport');
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/success', function (req, res, next) {
  res.render('success');
});

router.get('/failure', function (req, res, next) {
  res.render('failure');
});

router.get('/auth/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/failure' }),
  (req, res) => {
    res.redirect('/success');
  }
);

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('components/index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('components/about', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('components/contact', { title: 'Contact Me' });
});

router.get('/services', function(req, res, next) {
  res.render('components/services', { title: 'Services' });
});

router.get('/projects', function(req, res, next) {
  res.render('components/projects', { title: 'Proyects' });
});

module.exports = router;

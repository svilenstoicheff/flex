var express = require('express');
var router = express.Router();

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSS Layouts' });
});
router.get('/template', function(req, res, next) {
  res.render('template', { title: 'Flex-box template' });
});
router.get('/grid', function(req, res, next) {
  res.render('grid', { title: 'Grid' });
});
router.get('/grid-flex', function(req, res, next) {
  res.render('grid-flex', { title: 'Grid - flexbox' });
});
router.get('/grid-table', function(req, res, next) {
  res.render('grid-table', { title: 'Grid - table' });
});
router.get('/positioning', function(req, res, next) {
  res.render('positioning', { title: 'Layout with floats' });
});
router.get('/grid-minimum', function(req, res, next) {
  res.render('grid-minimum', { title: 'Layout with floats' });
});
router.get('/scheduler', function(req, res, next) {
  res.render('scheduler', { title: 'Office Schedule' });
});



module.exports = router;

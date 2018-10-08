var express = require('express');
var router = express.Router();

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/template', function(req, res, next) {
  res.render('template', { title: 'Flex-box template' });
});
router.get('/grid', function(req, res, next) {
  res.render('grid', { title: 'Grid' });
});
router.get('/grid-flex', function(req, res, next) {
  res.render('grid-flex', { title: 'Grid' });
});

module.exports = router;

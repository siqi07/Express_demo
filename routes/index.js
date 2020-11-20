var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/t', function(req, res, next) {
  res.send("test");
});

router.get('/login', function(req, res, next){
  res.render('login', { title: 'login'});
});

router.post("/", function(req, res) {
  res.send("a POST request? nice");
});

router.put("/", function(req, res) {
  res.send("i don't see a lot of PUT requests anymore");
});

router.delete("/", function(req, res) {
  res.send("oh my, a DELETE??");
});


module.exports = router;

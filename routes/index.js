var express = require('express');
var router = express.Router();


// router.use('/', function(req, res, next) {
// 	console.log("got here");
// });

router.get('/', function(req, res){
	console.log("got here");
	res.render('index');
});


// router.post('/', function(req, res){
	
// });

module.exports = router;
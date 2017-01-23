var express = require("express");
var router = express.Router();
var path = require('path');

var data = require('../data/friend');

router.get('/survey/friend',function(req, res){
    res.send('DATA SENT');
});


module.exports = router;
var express = require("express");
var router = express.Router();
var path = require('path');

var data = require('../data/friend');

router.get('/api/friend',function(req, res){
    res.send(data);
});


module.exports = router;
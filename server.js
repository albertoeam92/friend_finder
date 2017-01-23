var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var pages = require('./app/routing/htmlRoutes');

app.use(pages);

app.use(bodyParser.json());



app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});



var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger= require('morgan');

var PORT = process.env.PORT || 8000;


app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

module.exports = app.listen(PORT, function(){
  console.log("listening on PORT:" + PORT);
});


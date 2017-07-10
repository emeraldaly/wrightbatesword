
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger= require('morgan');


const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app.listen(PORT, function(){
  console.log("listening on PORT:" + PORT);
});


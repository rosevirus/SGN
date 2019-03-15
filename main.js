var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var idxRouter = require('./routes/index.js');
var cmntRouter = require('./routes/community.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', idxRouter);
app.use('/community', cmntRouter);

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(9999);
var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var mysql = require('mysql');

var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tiger',
  database: 'solideo'
});

db.connect();

router.get('/', (req, res) => {
  db.query('SELECT * FROM sldo_notice', (error, result) => {
    var sldonotice = template.notice(result);
    var main = template.community(sldonotice);
    var title = template.title('Community');
    var html = template.html(title, main);
    res.send(html);
  });
});

module.exports = router;

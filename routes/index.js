var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var mysql = require('mysql');

//db connect
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
    var body = template.home(sldonotice);
    var title = template.title('');
    var html = template.html(title, body);
    res.send(html);
  });
});

module.exports = router;
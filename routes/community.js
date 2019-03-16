var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var mysql = require('mysql');

//database 연결
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tiger',
  database: 'solideo'
});
db.connect();

var title = template.title('Community');

//community 메인
router.get('/', (req, res) => {
  var login = template.login();
  var welcome = template.welcome();
  var body = template.community(login, welcome);
  var html = template.html(title, body);
  res.send(html);
});

//공지
router.get('/notice', (req, res) => {
  db.query('SELECT * FROM sldo_notice', (error, result) => {
  var login = template.login();
  var notice = template.notice(result);
  var body = template.community(login, notice);
  var html = template.html(title, body);
  res.send(html);
  });
});

//게시판
router.get('/board', (req, res) => {
  db.query('SELECT * FROM sldo_notice', (error, result) => {
  var login = template.login();
  var board = template.freeboard(result);
  var body = template.community(login, board);
  var html = template.html(title, body);
  res.send(html);
  });
});

//로그인 프로세스
router.post('/login_process', (req, res) => {
  db.query('SELECT * FROM sldo_user', (error, result) => {

  });
});

module.exports = router;

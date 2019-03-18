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

//공지 리스트
router.get('/notice', (req, res) => {
  db.query('SELECT * FROM sldo_notice', (error, result) => {
    var login = template.login();
    var notice = template.noticeboard(result);
    var body = template.community(login, notice);
    var html = template.html(title, body);
    res.send(html);
  });
});

//공지 상세
router.get('/notice_detail', (req, res) => {
  var rqi = req.query.id;

  db.query('SELECT * FROM sldo_notice WHERE id=' + rqi, (error, result) => {
    var login = template.login();
    var notice = template.noticedetail(result);
    var body = template.community(login, notice);
    var html = template.html(title, body);
    res.send(html);
  });
});

//게시판 리스트
router.get('/board', (req, res) => {
  var querys = `
  SELECT B.id id, B.subject subject, B.postdt postdt, B.viewcnt viewcnt, B.grp grp, B.grpid grpid, B.grpcnt grpcnt, U.name name
  FROM sldo_board B, sldo_user U
  WHERE U.id = B.uid
  ORDER BY B.grp DESC, B.grpcnt ASC`

  db.query(querys, (error, result) => {
    var login = template.login();
    var board = template.freeboard(result);
    var body = template.community(login, board);
    var html = template.html(title, body);
    res.send(html);
  });
});

//게시판 상세
router.get('/board_detail', (req, res) => {
  var rqi = req.query.id;

  var querys = `
  SELECT B.id id, B.subject subject, B.description description, B.postdt postdt, B.upddt upddt, B.viewcnt viewcnt, U.name name
  FROM sldo_board B, sldo_user U
  WHERE B.id = ${rqi}
  AND B.uid = U.id
  ORDER BY B.grp DESC, B.grpcnt ASC`

  db.query(querys, (error, result) => {
    var login = template.login();
    var board = template.fbdetail(result);
    var body = template.community(login, board);
    var html = template.html(title, body);
    res.send(html);
  });
});

//게시판 
router.get('/write', (req, res) => {
  var querys = `
  SELECT U.name name
  FROM sldo_user U
  WHERE U.id = 1
  `;

  db.query(querys, (error, result) => {
    var login = template.login();
    var board = template.write(result);
    var body = template.community(login, board);
    var html = template.html(title, body);
    res.send(html);
  });
});

router.get('/write_process', (req, res) => {
  var sel_querys = `SELECT id, grp, grpid, grpcnt FROM sldo_board ORDER BY grp DESC`;

  db.query(sel_querys, (error, result) => {
    var wt_querys = `INSERT INTO sldo_board (subject, description, postdt, upddt, delyn, viewcnt, uid, grp, grpid, grpcnt)
    VALUES ('write 테스트', 'write 테스트내용', now(), now(), default, default, '1','${result[0].grp+1}','0','0')`;
    db.query(wt_querys, (error, result) => {
      
    });
  });
});

//로그인 프로세스
router.post('/login_process', (req, res) => {
  db.query('SELECT * FROM sldo_user', (error, result) => {

  });
});

module.exports = router;
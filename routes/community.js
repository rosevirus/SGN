var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var mysql = require('mysql');
var cookieparse = require('cookie-parser');
var cookie = require('cookie');

app = express();
app.use(cookieparse());


cookieparse()
//database 연결
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tiger',
  database: 'solideo'
});
db.connect();

//nav 변수
var title = template.title('Community');

//community 메인
router.get('/', (req, res) => {
  var welcome = template.welcome();
  var login = template.login(req, res);
  var body = template.community(login, welcome);
  var html = template.html(title, body);
  res.send(html);
});

//공지 리스트
router.get('/notice', (req, res) => {
  db.query('SELECT * FROM sldo_notice', (error, result) => {
    var notice = template.noticeboard(result);
    var login = template.login(req, res);
    var body = template.community(login, notice);
    var html = template.html(title, body);
    res.send(html);
  });
});

//공지 상세
router.get('/notice_detail', (req, res) => {
  var rqi = req.query.id;
  db.query('SELECT * FROM sldo_notice WHERE id=' + rqi, (error, result) => {
    var notice = template.noticedetail(result);
    var login = template.login(req, res);
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
    var board = template.freeboard(result);
    var login = template.login(req, res);
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
    res.cookie('bid', rqi);
    var board = template.fbdetail(result);
    var login = template.login(req, res);
    var body = template.community(login, board);
    var html = template.html(title, body);
    res.send(html);
  });
});

//글쓰기
router.get('/write', (req, res) => {
  var uid = '1';
  if (req.headers.cookie !== undefined) {
    uid = cookie.parse(req.headers.cookie).uid;
  }
  var querys = `
  SELECT name
  FROM sldo_user
  WHERE id = '${uid}'
  `;

  db.query(querys, (error, result) => {
    var board = template.write(result);
    var login = template.login(req, res);
    var body = template.community(login, board);
    var html = template.html(title, body);
    res.send(html);
  });
});

router.get('/modify', (req, res) => {
  var rqi = req.query.id;
  var querys = `
  SELECT B.id id, B.subject subject, B.description description, U.name name
  FROM sldo_board B, sldo_user U
  WHERE B.id = ${rqi}
  AND B.uid = U.id
  ORDER BY B.grp DESC, B.grpcnt ASC`;

  db.query(querys, (error, result) => {
    var modify = template.modify(result);
    var login = template.login(req, res);
    var body = template.community(login, modify);
    var html = template.html(title, body);
    res.send(html);
  });
});

//글 저장 프로세스
router.post('/write_process', (req, res) => {
  var sel_querys = `SELECT id, grp, grpid, grpcnt FROM sldo_board ORDER BY grp DESC`;
  var subject = req.body.subject;
  var description = req.body.description;
  var cookies = cookie.parse(req.headers.cookie);
  var bid = '';

  db.query(sel_querys, (error, result) => {
    if (cookies.bid !== undefined) {
      bid = cookies.bid;
    } else {
      bid = result[0].id + 1;
    }
    var wt_querys = `INSERT INTO sldo_board (id, subject, description, postdt, upddt, delyn, viewcnt, uid, grp, grpid, grpcnt)
    VALUES (${bid},'${subject}', '${description}', now(), now(), default, default, '1','${result[0].grp+1}','0','0')
    ON DUPLICATE KEY
    UPDATE subject = '${subject}', description = '${description}', upddt = now();`;

    db.query(wt_querys, (error, result) => {
      res.clearCookie('bid');
      res.redirect(`/community/board_detail?id=${bid}`);
    });
  });
});

//로그인 프로세스
router.post('/login_process', (req, res) => {
  var querys = 'SELECT * FROM sldo_user';
  var auth = '';
  var name = '';
  var uid = '';
  var account = req.body.account;
  var password = req.body.password;
  var i = 0;
  db.query(querys, (error, result) => {
    for (i = 0; i < result.length; i++) {
      if (result[i].account === account && result[i].password === password) {
        auth = result[i].auth;
        name = result[i].name;
        uid = result[i].id;
      }
    }
    res.cookie('auth', auth);
    res.cookie('name', name);
    res.cookie('uid', uid);
    res.redirect('/community');
  });
});
//로그아웃 프로세스
router.post('/logout_process', (req, res) => {
  res.clearCookie('auth');
  res.clearCookie('name');
  res.clearCookie('uid');
  res.clearCookie('bid');

  res.redirect('/community');
});

module.exports = router;
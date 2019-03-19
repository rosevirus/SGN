var cookie = require('cookie');

function formatDate(date) {
  var d = new Date(date);
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function formatTime(date) {
  var d = new Date(date);
  var times = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

  return times;
}

function formatDateTime(date) {
  var dt = formatDate(date) + ' ' + formatTime(date);
  return dt;
}

module.exports = {
  //index
  html: (title, body) => {
    return `
    <!DOCTYPE html>
    <html lang="ko-kr">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="crossorigin="anonymous"></script>
      
      <title>Solideo</title>
    </head>

    <body>
      <div class="container-fluid">
        <header>
          <!-- NAV -->
          <nav class="navbar navbar-expand navbar-light bg-light text-center">
            <div class="mr-auto" style="vertical-align: middle">
            ${title}
            </div>
            ${body}
        <!-- Footer -->
        <footer class="footer mt-auto py-3 bg-light">
          <div class="text-center">
            <!-- icon -->
            <div>
              <span><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/instagram.png" alt="instar"></span>
              <span><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/envelop.png" alt="mail"></span>
              <!-- <span><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/facebook2.png" alt="facebook"></span> -->
            </div>
            <span>Ⓒ Solideo ALL RIGHT RESERVED.</span>
          </div>
        </footer>
      </div>
      
    </body>

    </html>
    `;
  },
  //헤드 타이틀
  title: (name) => {
    var title = `
    <a class="navbar-brand active" href='/${name}'>
      <h1>Solideo ${name}</h1>
    </a>`;
    return title;
  },
  //홈 바디 
  home: (notice) => {
    var hbody = `
<!-- category -->
              <ul class="navbar-nav" style="vertical-align: middle">
                <li class="nav-item"><a class="nav-link" href='#About'>ABOUT</a></li>
                <li class="nav-item"><a class="nav-link" href='#Notice'>NOTICE</a></li>
                <li class="nav-item"><a class="nav-link" href='#Contact'>CONTACT</a></li>
                <li class="nav-item"><a class="nav-link" href='/Community'>COMMUNITY</a></li>
              <ul>
            <!-- Worship 내용이 생기면 활성화 -->
            <!-- <span class="nav-item"><a class="nav-link" href='/worship'>WORSHIP</a></span> -->

            <!-- 추후 모바일 대응 기능 추가 예정 -->
            <!-- <div>
              <button class="toggle-menu" aria-label="Responsive Navigation Menu">☰</button>
            </div> -->
          </nav>
        </header>
<!-- main -->
        <main role="main">
          <div class="text-center mb-5">
            <img style="padding-top: 67px;" src="https://source.unsplash.com/1920x540/weekly?band" width="100%">
          </div>
<!-- index -->
          <div class="container">
            <div class="mb-5">
              <h2>So whether you eat or drink or whatever you do,</h2>
              <h2>do it all for the glory of God.</h2>
              <h1>1 Corinthians 10:31.</h1>
            </div>
<!-- ABOUT AREA-->
            <div>
              <hr>
            </div>
            <div id="About" class="my-5">
              <span class="text-center">
                <h1>ABOUT</h1> <!-- 추후에 대부분 이미지쓰 -->
              </span>
              <span class="text-center">
                <hr width="200px" style="border-top: 3px solid #000000;">
              </span>
              <div class="my-5">
                <div>
                  <h4>솔리데오란?</h4>
                  <P>
                    'Solideo'란 종교개혁.....
                  </P>
                  <div class="text-center">
                    <img src="https://source.unsplash.com/1280x540/daily?rose" width="100%">
                  </div>
                </div>
                <div class="my-5">
                  <h4>활동 사역</h4>
                  <span>
                    예배팀, 전도찬양, 축가, 해외선교
                  </span>
                </div>
              </div>
            </div>
<!-- WORSHIP AREA 추후 내용 추가 시  개발-->
            <!-- <div>
              <hr>
            </div> -->

            <!-- <div id="Worship" class="my-5">
              <div class="my-5">
                <h1>WORSHIP</h1>
              </div>
            </div> -->

            <div>
              <hr>
            </div>
<!-- Notice -->
            <div class="my-5" id="Notice">
              <span class="text-center">
                <h1>NOTICE</h1>
              </span>
              <span class="text-center">
                <hr width="200px" style="border-top: 3px solid #000000;">
              </span>
              <div class="my-5">
                <table class="table">
                  <colgroup>
                    <col style="width: 7%; text-align: center" />
                    <col style="width: 75%" />
                    <col style="width: 11%; text-align: center" />
                    <col style="width: 7%; text-align: center" />
                  </colgroup>
                  <thead class="thead-dark">
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>날짜</th>
                      <th>조회수</th>
                    </tr>
                  </thead>
                    ${notice}
                </table>
                <div>
                <span>자세한 내용은 <a href="/community">Solideo Community</a>에서 확인하실 수 있습니다.</span>
                </div>
              </div>
            </div>

            <div>
              <hr>
            </div>

<!-- CONTACT AREA-->
            <div id="Contact" class="my-5">
              <span class="text-center">
                <h1>CONTACT</h1>
              </span>
              <span class="text-center">
                <hr width="200px" style="border-top: 3px solid #000000;">
              </span>
              <!-- 각 문의 관련 아이콘 or 이미지 링크 -->
              <div class="my-5 text-center">
                <span class="mx-3">
                  <a><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/simpleQnA.png" alt="simpleQnA"></a>
                </span>
                <span class="mx-3">
                  <a><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/inviteQnA.png" alt="inviteQnA"></a>
                </span>
                <span class="mx-3">
                  <a><img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/donationQnA.png" alt="donationQnA"></a>
                </span>
              </div>
            </div>

            <!-- Map -->
            <div class="my-5">
              <!-- 1. 지도 노드 -->
              <div id="daumRoughmapContainer1552443085174" class="root_daum_roughmap root_daum_roughmap_landing"></div>
              <!--2. 설치 스크립트* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.-->
              <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
              <!-- 3. 실행 스크립트 -->
              <script charset="UTF-8">
                new daum.roughmap.Lander({
                  "timestamp": "1552443085174",
                  "key": "skd4",
                  "mapWidth": "1110",
                  "mapHeight": "360"
                }).render();
              </script>
            </div>
            <div>
              <input id="btnScrTop" class="btn btn-info" type="submit" value="top" style=" position: fixed; width:50px; height:50px; right: 20px; bottom: 30px;" >
            </div>
        </main>
    `
    return hbody;
  },
  //커뮤니티 바디
  community: (login, body) => {
    var cbody = `
<!-- category -->
            <ul class="navbar-nav" style="vertical-align: middle">
              <li class="nav-item"><a class="nav-link" href='/community/notice'>NOTICE</a></li>
              <li class="nav-item"><a class="nav-link" href='/community/board'>BOARD</a></li>
<!-- login 로그인 -->
            ${login}
          </nav>
        </header>
        <main role="main">
        <div class="container" id="community">
          ${body}
        </main>
    `;
    return cbody;
  },
  welcome: () => {
    var welcome = `
    <!-- index -->
            <div class="text-center mt-4 mb-5">
              <h1>솔리데오 커뮤니티에 오신 것을 환영합니다!!</h1>
            </div>
            <div class="text-center mb-5">
              <img src="https://s3.ap-northeast-2.amazonaws.com/sldo-storage/images/welcom.jpg" width="100%">
            </div>
          </div>
    `;
    return welcome;
  },
  //로그인
  login: (req, res) => {
    var auth = 3;
    var name = '';
    var cookies = {};
    if (req.headers.cookie !== undefined) {
      cookies = cookie.parse(req.headers.cookie);
      auth = cookies.auth;
      name = cookies.name;
    }

    var login = `
       <li class="nav-item"><a class="nav-link" href='/'>SOLIDEO HOME</a></li>
      </ul>
      <div>
        <form class="form-inline my-2 my-lg-0" action="/community/login_process" method="post"> <!-- /login_process -->
          <div>
            <span><input type="text" name="account" placeholder=" ID"></span>
            <span><input type="password" name="password" placeholder=" PASSWORD"></span>
            <span><input type="submit" value="LOGIN" class="btn btn-primary"></span>
            <span><input type="button" value="SIGN IN" class="btn btn-dark"></span>
          </div>
        </form>
      </div>
      `;
    if (auth === '0') {
      login = `
        <li class="nav-item"><a class="nav-link" href='/admin'>ADMIN PAGE</a></li>
      </ul>
      <div>
        <form class="form-inline my-2 my-lg-0" action="/community/logout_process" method="post"> <!-- /logout_process -->
          <div>
            <b> ${name} 님</b>
            <span><input type="button" value="edit" class="btn btn-dark"></span>
            <span><input type="submit" value="logout" class="btn btn-danger"></span>
          </div>
        </form>
      </div>`;
    } else if (auth !== 3) {
      login = `
          <li class="nav-item"><a class="nav-link" href='/'>SOLIDEO HOME</a></li>
        </ul> 
        <div>
          <form class="form-inline my-2 my-lg-0" action="/community/logout_process" method="post"> <!-- /logout_process -->
            <div>
              <b> ${name} 님 </b>
              <span><input type="button" value="edit" class="btn btn-dark"></span>
              <span><input type="submit" value="logout" class="btn btn-danger"></span>
            </div>
          </form>
        </div>`;
    }
    return login;
  },
  //홈 notice
  notice: (sldonotice) => {
    var notice = '<tbody>';
    var i = 0;
    for (i = 0; i < sldonotice.length; i++) {
      notice = notice + `
      <tr>
        <td>${sldonotice[i].id}</td>
        <td>${sldonotice[i].subject}</td>
        <td>${formatDate(sldonotice[i].postdt)}</td>
        <td>${sldonotice[i].viewcnt}</td>
      </tr>
      `;
    }
    notice = notice + '</tbody>';
    return notice;
  },
  //커뮤니티 공지 리스트
  noticeboard: (sldonotice) => {
    var nboard = `
    <div class="my-5" id="Notice">
      <span class="text-center">
        <h1>NOTICE</h1>
      </span>
      <span class="text-center">
        <hr width="200px" style="border-top: 3px solid #000000;">
      </span>
      <div class="my-5">
        <table class="table">
          <colgroup>
            <col style="width: 7%; text-align: center" />
            <col style="width: 75%" />
            <col style="width: 11%; text-align: center" />
            <col style="width: 7%; text-align: center" />
          </colgroup>
          <thead class="thead-dark text-center">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
          `;
    var i = 0;
    for (i = 0; i < sldonotice.length; i++) {
      nboard = nboard + `
    <tr>
      <td class="text-center">${sldonotice[i].id}</td>
      <td><a href="/community/notice_detail?id=${sldonotice[i].id}">${sldonotice[i].subject}</a></td>
      <td class="text-center">${sldonotice[i].postdt.toISOString().slice(0,10)}</td>
      <td class="text-center">${sldonotice[i].viewcnt}</td>
    </tr>
    `;
    }
    nboard = nboard + `
    </tbody>
    </table>
      </div>
    </div>
    `;
    return nboard;
  },
  //자유게시판 리스트
  freeboard: (sldofboard) => {
    var fboard = `
      <div class="my-5" id="Notice">
        <span class="text-center">
          <h1>BOARD</h1>
        </span>
        <span class="text-center">
          <hr width="200px" style="border-top: 3px solid #000000;">
        </span>
        <div class="my-5">
          <table class="table">
            <colgroup>
              <col style="width: 7%; text-align: center" />
              <col style="width: 64%" />
              <col style="width: 11%; text-align: center" />
              <col style="width: 11%; text-align: center" />
              <col style="width: 7%; text-align: center" />
            </colgroup>
            <thead class="thead-dark text-center">
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
            `;
    var i = 0;
    var j = 0;
    for (i = 0; i < sldofboard.length; i++) {
      fboard = fboard + `
      <tr>
        <td class="text-center">${sldofboard[i].id}</td>
        <td><a href="/community/board_detail?id=${sldofboard[i].id}">
        `;
      if (sldofboard[i].grpid > 0) {
        for (j = 1; j <= sldofboard[i].grpid; j++) {
          fboard = fboard + `└RE: `;
        }
      }
      fboard = fboard + `
        ${sldofboard[i].subject}</a></td>
        <td class="text-center">${sldofboard[i].name}</td>
        <td class="text-center">${sldofboard[i].postdt.toISOString().slice(0,10)}</td>
        <td class="text-center">${sldofboard[i].viewcnt}</td>
      </tr>
      `;
    }
    fboard = fboard + `
      </tbody>
      </table>
      <div>
        <input type="button" value="글쓰기" onclick="location.replace('/community/write')" class="btn btn-outline-dark">
       </div>  
        </div>
      </div>
      `;
    return fboard;
  },
  //글 작성, 수정
  write: (sldodata) => {
    var write = `
    <div class="my-3" id="Write">
      <span>
        <h2>Write</h2>
      </span>
    </div>
    <form class="form my-2 my-lg-0" action="/community/write_process" method="post">
      <div class="my-3">
        <h4><input type="text" name="subject" style="width: 540px;" placeholder="제목"></h4>
        <b>${sldodata[0].name}</b>
      </div>
      <div class="mt-3 text-center">
        <textarea name="description" style="width:100%; height: 480px;"></textarea>
      </div>
      <div>
        <span class="mr-2">
          <input type="submit" value="저장" class="btn btn-primary">
        </span>
        <span>
          <input type="button" value="취소" onclick="location.replace('/community/board');" class="btn btn-danger">
        </span>
    </form>
    `;
    return write;
  },
  //공지사항 상세
  noticedetail: (sldonotice) => {
    var detail = `
    <div class="my-5" id="Notice">
      <span>
        <h2>NOTICE</h2>
      </span>
    </div>
    <div>
      <div>
        <h4>${sldonotice[0].subject}</h4>
        <b>관리자</b>
      </div>
      <div>
        <b>작성일 </b>
        <span class="mr-3">${formatDate(sldonotice[0].postdt)}</span>
        <b>최종수정일 </b>
        <span>${formatDateTime(sldonotice[0].upddt)} </span>
      </div>
      <table class="table">
        <tr>
          <td>${sldonotice[0].description}</td>
        </tr>
      </table>
    </div>
    `;
    return detail;
  },
  //게시판 상세
  fbdetail: (sldofboard) => {
    var detail = `
    <div class="my-5" id="Notice">
      <span>
        <h2>BOARD</h2>
      </span>
    </div>
    <div>
      <div>
        <h4>${sldofboard[0].subject}</h4>
        <b>${sldofboard[0].name}</b>
      </div>
      <div>
        <b>작성일 </b>
        <span class="mr-3">${formatDate(sldofboard[0].postdt)}</span>
        <b>최종수정일 </b>
        <span>${formatDateTime(sldofboard[0].upddt)} </span>
      </div>
      <table class="table">
        <tr>
          <td>${sldofboard[0].description}</td>
        </tr>
      </table>
    </div>
    `;
    return detail;
  },
  fbreply: () => {

  }
}
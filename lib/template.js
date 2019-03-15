module.exports = {
  html: (title, body) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"></script>
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
  title: (name) => {
    var title = `
    <a class="navbar-brand active" href='/${name}'>
      <h1>Solideo ${name}</h1>
    </a>`;
    return title;
  },
  main: (notice) => {
    var main = `
    <!-- category -->
            <div class="navbar-nav" style="vertical-align: middle">
              <span class="nav-item"><a class="nav-link" href='#About'>ABOUT</a></span>
              <!-- Worship 내용이 생기면 활성화 -->
              <!-- <span class="nav-item"><a class="nav-link" href='/worship'>WORSHIP</a></span> -->
              <span class="nav-item"><a class="nav-link" href='#Notice'>NOTICE</a></span>
              <span class="nav-item"><a class="nav-link" href='#Contact'>CONTACT</a></span>
              <span class="nav-item"><a class="nav-link" href='/community'>COMMUNITY</a></span>
              </div>

            <!-- 추후 모바일 대응 기능 추가 예정 -->
            <!-- <div>
              <button class="toggle-menu" aria-label="Responsive Navigation Menu">☰</button>
            </div> -->

            <!-- login 로그인 기능 미구현 -->
            <!-- <div>
            <form class="form-inline my-2 my-lg-0" action="">
              <div>
                <span><input type="text" placeholder=" ID"></span>
                <span><input type="password" placeholder=" PASSWORD"></span>
                <span><input type="button" value="login" class="btn btn-secondary"></span>
              </div>
            </form>
          </div> -->

          </nav>
        </header>
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

            <div id="About">
              <hr>
            </div>

            <!-- ABOUT AREA-->
            <div class="my-5">
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

            <!-- <div id="Worship">
              <hr>
            </div> -->

            <!-- <div class="my-5">
              <div class="my-5">
                <h1>WORSHIP</h1>
              </div>
            </div> -->

            <div id="Notice">
              <hr>
            </div>

            <!-- Notice -->
            <div class="my-5">
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

            <div id="Contact">
              <hr>
            </div>

            <!-- CONTACT AREA-->
            <div class="my-5">
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
                  "mapWidth": "1080",
                  "mapHeight": "360"
                }).render();
              </script>
            </div>
        </main>
    `
    return main;
  },
  community: (notice) => {
    var community = `
    <!-- category -->
            <div class="navbar-nav" style="vertical-align: middle">
              <span class="nav-item"><a class="nav-link" href='#community'>COMMUNITY</a></span>
              <span class="nav-item"><a class="nav-link" href='/'></a></span>
              <span class="nav-item"><a class="nav-link" href='/'>SOLIDEO HOME</a></span>
            </div>

            <!-- 추후 모바일 대응 기능 추가 예정 -->
            <!-- <div>
              <button class="toggle-menu" aria-label="Responsive Navigation Menu">☰</button>
            </div> -->

            <!-- login 로그인 -->
          <div>
            <form class="form-inline my-2 my-lg-0" action="">
              <div>
                <span><input type="text" placeholder=" ID"></span>
                <span><input type="password" placeholder=" PASSWORD"></span>
                <span><input type="button" value="login" class="btn btn-secondary"></span>
              </div>
            </form>
          </div>

          </nav>
        </header>
        <main role="main">
    
          <!-- index -->
          <div class="container" id="community">
            <div class="text-center mb-5">
              <h1>솔리데오 커뮤니티에 오신 것을 환영합니다!!</h1>
            </div>

            <!-- Notice -->
            <div class="my-5">
              <span class="text-center">
                <h1></h1>
              </span>
              <span class="text-center">
                <hr width="200px" style="border-top: 3px solid #000000;">
              </span>
            </div>
        </main>
    `;
    return community;
  },
  notice: (sldonotice) => {
    var notice = '<tbody>';
    var i = 0;
    for (i = 0; i < sldonotice.length; i++) {
      notice = notice + `
      <tr>
        <td>${sldonotice[i].id}</td>
        <td>${sldonotice[i].subject}</td>
        <td>${sldonotice[i].postdt.toISOString().slice(0,10)}</td>
        <td>${sldonotice[i].viewcnt}</td>
      </tr>
      `;
    }
    notice = notice + '</tbody>';
    return notice;
  },
  freeboard: (sldofboard) => {
    var fboard = '<tbody>';
    var i = 0;
    for (i = 0; i < sldofboard.length; i++) {
      fboard = fboard + `
      <tr>
        <td>${sldofboard[i].id}</td>
        <td>${sldofboard[i].subject}</td>
        <td>${sldofboard[i].postdt.toISOString().slice(0,10)}</td>
        <td>${sldofboard[i].viewcnt}</td>
      </tr>
      `;
    }
    fboard = fboard + '</tbody>';
    return fboard;
  }
}
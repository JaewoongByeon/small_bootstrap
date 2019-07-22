const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/byeon', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b00.html'));
});
router.get('/byeon/01', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b01.html'));
});
router.get('/byeon/02', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b02.html'));
});
router.get('/byeon/03', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b03.html'));
});
router.get('/byeon/04', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b04.html'));
});
router.get('/byeon/05', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b05.html'));
});
router.get('/byeon/06', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b06.html'));
});
router.get('/byeon/07', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b07.html'));
});
router.get('/byeon/08', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b08.html'));
});
router.get('/byeon/09', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b09.html'));
});
router.get('/byeon/10', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b10.html'));
});
router.get('/byeon/11', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b11.html'));
});
router.get('/byeon/12', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b12.html'));
});
router.get('/byeon/13', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b13.html'));
});
router.get('/byeon/14', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b14.html'));
});
router.get('/byeon/15', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b15.html'));
});
router.get('/byeon/16', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b16.html'));
});
router.get('/byeon/17', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b17.html'));
});
router.get('/byeon/18', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b18.html'));
});
router.get('/byeon/18/go', function(req, res) {
  console.log(req.query);
  res.send(
      '요청된 파라미터<br>이메일: ' + req.query.email + '<br>체크박스 1: ' +
      req.query.check1 + '<br>체크박스 2: ' + req.query.check2 +
      '<br>라디오버튼: ' + req.query.radio + '<br>선택: ' + req.query.select)
});
router.get('/byeon/19', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b19.html'));
});
router.get('/byeon/19/go', function(req, res) {
  console.log(req.query);
  res.send('Request parameters : ' + req.query.email)
});
router.get('/byeon/20', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b20.html'));
});
router.get('/byeon/20/submit', function(req, res) {
  console.log(req.query);
  res.send(
      'Request parameters<br>Email 1: ' + req.query.email1 +
      '<br>Password 1: ' + req.query.pwd1 + '<br>Remeber me: ' + req.query.rem +
      '<br>Select list: ' + req.query.select +
      '<br>Multiple select list: ' + req.query.multiple +
      '<br>Option: ' + req.query.option + '<br>Remeber me: ' + req.query.rem +
      '<br>Select list: ' + req.query.select)
});
router.get('/byeon/21', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b21.html'));
});
router.get('/byeon/22', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b22.html'));
});
router.get('/byeon/23', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b23.html'));
});
router.get('/byeon/24', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b24.html'));
});
router.get('/byeon/25', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/byeon/b25.html'));
});


router.get('/park', function(req, res) {
  res.sendFile(path.join(__dirname + '/view/park/p00.html'));
});
router.get('/p/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/index.html'));
});
router.get('/p/sign_up', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/sign_up.html'));
});
router.get('/p/notice', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/notice.html'));
});
router.get('/p/write', function(req, res) {
  res.sendFile(path.join(__dirname + '/park/write.html'));
});

// Byeolchan -->
router.get('/Byeolchan', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/main.html'));
});

router.get('/Byeolchan/logout', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/logout.html'));
});

router.get('/Byeolchan/notice_detail', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/notice_detail.html'));
});

router.get('/Byeolchan/sign_up', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/sign_up.html'));
});

router.get('/Byeolchan/notice', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/notice.html'));
});

router.get('/Byeolchan/sign_in', function(req, res) {
  res.sendFile(path.join(__dirname + '/Byeolchan/views/sign_in.html'));
});
// <--Byeolchan

router.get('/park/sign_up', function(req, res) {
  res.send(
      '<br>이름 : ' + req.query.name + '<br>이메일 : ' + req.query.email +
      '<br>비밀번호 : ' + req.query.password + '<br>비밀번호 확인 : ' +
      req.query.re_password + '<br>생일 : ' + req.query.birthday)
});
router.get('/park/notice_board', function(req, res) {
  res.send(
      '<br>제목 : ' + req.query.title + '<br>작성자 : ' + req.query.writer +
      '<br>내용 : ' + req.query.content)
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
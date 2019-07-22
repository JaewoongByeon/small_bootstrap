const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/b', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/index.html'));
});
router.get('/b/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/signup.html'));
});
router.get('/b/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/byeon/notice.html'));
});
router.get('/b/submit', function (req, res) {
    res.send('<br>first name : ' + req.query.firstname + '<br>surname : ' + req.query.surname + '<br>e-mail : ' + req.query.email + '<br>password : ' + req.query.pwd
       +'<br>password confirm : ' + req.query.pwdcf + '<br>phone : ' + req.query.tel + '<br>month : ' + req.query.month + '<br>date : ' + req.query.date + '<br>year : ' + req.query.year + '<br>gender : ' + req.query.gender + '<br>agree send mail : ' + req.query.agree)
});


router.get('/park', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p00.html'));
});
router.get('/p/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/p_small_project/index.html'));
});
router.get('/p/sign_up', function (req, res) {
    res.sendFile(path.join(__dirname + '/p_small_project/sign_up.html'));
});
router.get('/p/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/p_small_project/notice.html'));
});

router.get('/sign_up', function (req, res) {
    res.send('<br>이름 : ' + req.query.name + '<br>이메일 : ' + req.query.email + '<br>비밀번호 : ' + req.query.password
       +'<br>비밀번호 확인 : ' + req.query.re_password + '<br>생일 : ' + req.query.birthday)
});





app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
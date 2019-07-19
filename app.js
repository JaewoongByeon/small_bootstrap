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

router.get('/byeon', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b00.html'));
});
router.get('/byeon/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b01.html'));
});
router.get('/byeon/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b02.html'));
});
router.get('/byeon/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b03.html'));
});
router.get('/byeon/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b04.html'));
});
router.get('/byeon/05', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b05.html'));
});
router.get('/byeon/06', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b06.html'));
});
router.get('/byeon/07', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b07.html'));
});
router.get('/byeon/08', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b08.html'));
});
router.get('/byeon/09', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b09.html'));
});
router.get('/byeon/10', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b10.html'));
});
router.get('/byeon/11', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b11.html'));
});
router.get('/byeon/12', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b12.html'));
});
router.get('/byeon/13', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b13.html'));
});
router.get('/byeon/14', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b14.html'));
});
router.get('/byeon/15', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b15.html'));
});
router.get('/byeon/16', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b16.html'));
});
router.get('/byeon/17', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b17.html'));
});
router.get('/byeon/18', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b18.html'));
});
router.get('/byeon/18/go', function (req, res) {
    console.log(req.query);
    res.send('요청된 파라미터<br>이메일: ' + req.query.email + '<br>체크박스 1: ' + req.query.check1 + '<br>체크박스 2: ' + req.query.check2 + '<br>라디오버튼: ' + req.query.radio + '<br>선택: ' + req.query.select)
});
router.get('/byeon/19', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b19.html'));
});
router.get('/byeon/19/go', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.email)
});
router.get('/byeon/20', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b20.html'));
});
router.get('/byeon/20/submit', function (req, res) {
    console.log(req.query);
    res.send('Request parameters<br>Email 1: ' + req.query.email1 + '<br>Password 1: ' + req.query.pwd1 + '<br>Remeber me: ' + req.query.rem + '<br>Select list: ' + req.query.select + '<br>Multiple select list: ' + req.query.multiple + '<br>Option: ' + req.query.option + '<br>Remeber me: ' + req.query.rem + '<br>Select list: ' + req.query.select)
});
router.get('/byeon/21', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b21.html'));
});
router.get('/byeon/22', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b22.html'));
});
router.get('/byeon/23', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b23.html'));
});
router.get('/byeon/24', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b24.html'));
});
router.get('/byeon/25', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/byeon/b25.html'));
});


router.get('/park', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p00.html'));
});
router.get('/park/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p01.html'));
});
router.get('/park/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p02.html'));
});

router.get('/park/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p03.html'));
});
router.get('/park/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p04.html'));
});
router.get('/park/05', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p05.html'));
});
router.get('/park/project00', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/project00.html'));
});
router.get('/park/07', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p07.html'));
});
router.get('/park/08', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p08.html'));
});
router.get('/park/09', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p09.html'));
});
router.get('/park/10', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p10_figure.html'));
});
router.get('/park/11', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p11_button.html'));
});
router.get('/park/12', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p12_collapse.html'));
});
router.get('/park/13', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p13_carousel.html'));
});
router.get('/park/14', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p14_dropdowns.html'));
});
router.get('/park/project01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/project01.html'));
});
router.get('/park/15', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p15_navbar.html'));
});
router.get('/park/16', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p16_collapse.html'));
});
router.get('/park/17', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p17_formgroup.html'));
});
router.get('/detail', function (req, res) {
    console.log(req.query.email);
    res.send('<br>Request parameters : ' + req.query.email + '<br>Request 비밀번호 : ' + req.query.pwd + '<br>Request 체크박스 : ' + req.query.vehicle
        + '<br>Request 라디오 : ' + req.query.optradio + '<br>Request 선택메뉴 : ' + req.query.sel1)
});
router.get('/email', function (req, res) {
    res.send('Request site : ' + req.query.username + '<br>Request Something clever : ' + req.query.something_clever)
});
router.get('/park/18', function (req, res) {
    console.log(req.query.username);
    res.sendFile(path.join(__dirname + '/view/park/p18_inputgroup.html'));
});
router.get('/park/project02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/project02.html'));
});
router.get('/first', function (req, res) {
    console.log(req.query.email);
    res.send('<br>Request 이메일 : ' + req.query.email + '<br>Request 비밀번호 : ' + req.query.password + '<br>Request 아이디기억 : ' + req.query.remember
        )
});
router.get('/second', function (req, res) {
    console.log(req.query.email);
    res.send('<br>Request 이메일 : ' + req.query.email + '<br>Request 비밀번호 : ' + req.query.password + '<br>Request 정보 : ' + req.query.info
        )
});
router.get('/third', function (req, res) {
    console.log(req.query.email);
    res.send('<br>Request 리스트 : ' + req.query.sel + '<br>Request 다중리스트 : ' + req.query.sel_multiple + '<br>Request 라디오버튼 : ' + req.query.radio
        )
});
router.get('/fourth', function (req, res) {
    console.log(req.query.email);
    res.send('<br>Request parameters : ' + req.query.disbled + '<br>Request 비밀번호 : ' + req.query.success + '<br>Request 체크박스 : ' + req.query.warning
        + '<br>Request 라디오 : ' + req.query.error)
});
router.get('/park/19', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p19_components.html'));
});
router.get('/park/20', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p20_card.html'));
});
router.get('/park/21', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p21_card2.html'));
});
router.get('/park/22', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p22_card3.html'));
});
router.get('/park/23', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p23_card4.html'));
});
router.get('/park/24', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p24_modal.html'));
});
router.get('/park/23', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p23_card4.html'));
});
router.get('/park/23', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/park/p23_card4.html'));
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
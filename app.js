var express = require('express'),
    ejs = require('ejs');

var app = express();

// view 미들웨어 연결
app.set('views', 'views');
app.set('view engine', 'ejs');

// 라우팅 등록
app.get('/', function(req, res){ res.render('layout.ejs', { data: 'index' }); });
app.get('/story/astera', function(req, res){  res.render('layout.ejs', { data: 'astera' }); });
app.get('/story/rule', function(req, res){ res.render('layout.ejs', { data: 'rule' }); });
app.get('/story/career', function(req, res){ res.render('layout.ejs', { data: 'career' }); });
app.get('/content/chat', function(req, res){ res.render('layout.ejs', { data: 'chat' }); });
app.get('/content/sirocco', function(req, res){ res.render('layout.ejs', { data: 'sirocco' }); });
app.get('/product/app', function(req, res){ res.render('layout.ejs', { data: 'app' }); });
app.get('/cs/support', function(req, res){ res.render('layout.ejs', { data: 'support' }); });
app.get('/manage/sponsor', function(req, res){ res.render('layout.ejs', { data: 'sponsor' }); });

// public static 연결
app.use('/', express.static(__dirname + '/public'));
app.use('/story/astera', express.static(__dirname + '/public'));
app.use('/story/rule', express.static(__dirname + '/public'));
app.use('/story/career', express.static(__dirname + '/public'));
app.use('/content/chat', express.static(__dirname + '/public'));
app.use('/content/sirocco', express.static(__dirname + '/public'));
app.use('/product/app', express.static(__dirname + '/public'));
app.use('/cs/support', express.static(__dirname + '/public'));
app.use('/manage/sponsor', express.static(__dirname + '/public'));

// 서버 연결
app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
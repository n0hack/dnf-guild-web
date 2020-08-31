var express = require('express'),
    ejs = require('ejs');
var app = express();

// view 미들웨어 연결
app.set('views', 'views');
app.set('view engine', 'ejs');

// 라우팅 등록
app.get('/', function(req, res){    
    res.render('layout.ejs', { data: 'index' });    
});

app.get('/story/astera', function(req, res){ 
    res.render('layout.ejs', { data: 'astera' });    
});

app.get('/story/rule', function(req, res){  
    res.render('layout.ejs', { data: 'rule' });   
});

app.get('/story/career', function(req, res){    
    res.render('layout.ejs', { data: 'career' });   
});

app.get('/content/chat', function(req, res){   
    res.render('layout.ejs', { data: 'chat' });
});

app.get('/content/raid', function(req, res){
    res.render('layout.ejs', { data: 'raid' });
});

app.get('/content/guide', function(req, res){
    res.render('layout.ejs', { data: 'guide' });
});

app.get('/content/lol', function(req, res){
    res.render('layout.ejs', { data: 'lol' });
});

app.get('/download/game', function(req, res){
    res.render('layout.ejs', { data: 'game' });
});

app.get('/download/util', function(req, res){
    res.render('layout.ejs', { data: 'util' });
});

app.get('/cs/question', function(req, res){
    res.render('layout.ejs', { data: 'question' });
});

app.get('/cs/report', function(req, res){
    res.render('layout.ejs', { data: 'report' });
});

app.get('/manage/log', function(req, res){
    res.render('layout.ejs', { data: 'log' });
});

app.get('/manage/sponsor', function(req, res){
    res.render('layout.ejs', { data: 'sponsor' });
});

// public static 연결
app.use('/', express.static(__dirname + '/public'));
app.use('/story/astera', express.static(__dirname + '/public'));
app.use('/story/rule', express.static(__dirname + '/public'));
app.use('/story/career', express.static(__dirname + '/public'));
app.use('/content/chat', express.static(__dirname + '/public'));
app.use('/content/raid', express.static(__dirname + '/public'));
app.use('/content/guide', express.static(__dirname + '/public'));
app.use('/content/lol', express.static(__dirname + '/public'));
app.use('/download/game', express.static(__dirname + '/public'));
app.use('/download/util', express.static(__dirname + '/public'));
app.use('/cs/question', express.static(__dirname + '/public'));
app.use('/cs/report', express.static(__dirname + '/public'));
app.use('/manage/log', express.static(__dirname + '/public'));
app.use('/manage/sponsor', express.static(__dirname + '/public'));

// 서버 연결
app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
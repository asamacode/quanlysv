var express = require('express');
var mongoDB = require('mongoose');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

var indexRouter = require('./routes/index');
var addRouter = require('./routes/add');
var deleteRouter = require('./routes/detele');
var updateRouter = require('./routes/update');
var searchRouter = require('./routes/search');
var db = 'mongodb://localhost:27017/mydb';

var app = express();
mongoDB.connect(db,{ useNewUrlParser: true });
mongoDB.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoDB.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Thanh cong");
});

app.set("view engine","ejs");
app.set("views","./views");

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/delete',deleteRouter);
app.use('/update',updateRouter);
app.use('/search',searchRouter);

module.exports = app;

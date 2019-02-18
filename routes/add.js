var express = require("express");
var router = express.Router();
var database = require("../dbconnect");

var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/",function (req,res) {
    res.render("add",{resu : ""});
});
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


router.post('/', function(request, response){

    database.addNewStudent(response,request);
});

module.exports = router;




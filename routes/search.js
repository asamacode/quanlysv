var express = require("express");
var router = express.Router();
var database = require("../dbconnect");

var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.post("/",function (req,res) {
    //database.updateStudent(req,res);
});


router.get("/",function (req,res) {
    if (req.query.q) {
        database.searchStudent(req,res);
        console.log("da vao");
    }  else {
        res.render("search",{list : []});
        console.log("da vao duoi");
    }
});

module.exports = router;
var express = require("express");
var router = express.Router();
var database = require("../dbconnect");

var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.post("/:id",function (req,res) {
    database.updateStudent(req,res);
});

router.get("/:id",function (req,res) {
    var iddel = req.params.id.toString();
    database.findStudentID(iddel,req,res);
});

module.exports = router;
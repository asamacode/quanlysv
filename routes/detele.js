var express = require("express");
var router = express.Router();
var database = require("../dbconnect");

router.get("/",function (req,res) {
   database.getAllStudent(res);
});

router.get("/:id",function (req,res) {
   var iddel = req.params.id.toString();
    database.removeStudent(iddel,res);
});

module.exports = router;
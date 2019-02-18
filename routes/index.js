var express = require("express");
var router = express.Router();



router.get("/",function (req,res) {
   res.render("index");
});
// var bodyParser = require("body-parser")
//
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({
//    extended: true
// }));

// app.post('/add', function(request, response){
//    console.log(request.body.svname);
//    console.log(request.body.svid);
//    //response.render("index",{resu : "Thanh Cong"});
// });
module.exports = router;




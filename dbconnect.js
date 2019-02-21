const express = require("express");
const router = express.Router();
const SinhVien = require("./models/sinhvien");

var database = {
    //them sinh vien
    addNewStudent: function (res,req) {
        var sv = new SinhVien({
         id : req.body.svid,
         name : req.body.svname,
         class : req.body.svclass,
         birthday : req.body.svbirthday
        });
        sv.save(function (err,sinhvien) {
            if (err) {
                res.render("add",{resu: "Thêm Thất Bại"});
                console.log("That bai");
            } else {
                res.render("add",{resu: "Thêm Thành Công"});
            }
            ;
        })
    },
    getAllStudent : function (res) {
        SinhVien.find({},function (err,listsv) {
            console.log(listsv.length+"");
            res.render("delete",{list : listsv});
        });
    },
    removeStudent : function (iddel,res) {
        SinhVien.deleteOne({ id: iddel }, function(err) {
            if (!err) {
                //message.type = 'notification!';
                res.redirect("../delete");
            }
            else {
                res.send("Xảy ra lỗi");
                res.end();
            }
        });
    },
    updateStudent : function (req,res) {
        SinhVien.findOne({id: req.body.svid},function (err,data) {
            if (err)
            {
                res.send("Xảy ra lỗi");
                res.end();
            }
            if (! data)
            {
                res.json('Không tồn tại dữ liệu');
            }
            else
            {
                data.name = req.body.svname;
                data.class = req.body.svclass;
                data.birthday = req.body.svbirthday;
                data.save(function (err) {
                    if (err)
                    {
                        // TODO: Handle the error!
                        res.render("update",{resu : "Cập nhật lỗi"});
                    }
                    res.render("update",{datasv:data,resu : "Cập nhật thành công"});
                });
            }
        });
    },
    findStudentID : function (idfind,req,res) {
        SinhVien.findOne({id: idfind}, function (err,data) {
            if (err)
            {
                res.send("Xảy ra lỗi");
                res.end();
            }
            if (! data)
            {
                res.json('Không tồn tại dữ liệu');
            }
            else
            {
                res.render("update",{datasv : data,resu:""});
            }
        });
    },
    searchStudent : function (req,res) {
        //const regex = new RegExp('^'+req.query.q+'$', "i");
        SinhVien.find({name : { '$regex' : req.query.q, '$options' : 'i' }},function (err,data) {
            if (err)
            {
                res.send("Xảy ra lỗi");
                res.end();
            }
            if (! data)
            {
                res.json('Không tồn tại dữ liệu');
            }
            else
            {
                res.render("search",{list : data});
            }
        });
    }
}
    module.exports = database;

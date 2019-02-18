var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//tao SinhVien va Schema
const SVSchema = new Schema( {
    id : {
        type: String,
        index: true,
        unique: true,
        required : [true,'id field is required']
    },
    name : {
        type : String,
        required : [true,' field is required']
    },
    class : {
        type : String,
        required : [true,' field is required']
    },
    birthday : {
        type : String,
        required : [true,' field is required']
    },
    versionKey: false
});
    var SinhVien = mongoose.model("SinhVien",SVSchema);
    module.exports = SinhVien;
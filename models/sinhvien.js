var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

//tao SinhVien va Schema
const SVSchema = new Schema( {
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
    SVSchema.plugin(AutoIncrement, {id:'id_seq',inc_field: 'id'});
    var SinhVien = mongoose.model("SinhVien",SVSchema);
    module.exports = SinhVien;
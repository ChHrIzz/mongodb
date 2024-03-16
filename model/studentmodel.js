const mongoose = require('mongoose');
const studentschema = mongoose.Schema({
    name:String,
    age:Number,
    place:String
})
const studentmodel = mongoose.model('student',studentschema)
module.exports = studentmodel;

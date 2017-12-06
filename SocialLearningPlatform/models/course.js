var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    courseName: {type:String , required: true},
    description: {type:String, required: true},
    imagePath: {type:String, required: true},
    instructorName: {type:String, required: true},
    instructor: {type: Schema.Types.ObjectId, ref: 'Instructor'}
});

module.exports = mongoose.model('Course', schema);
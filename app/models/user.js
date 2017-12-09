var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-nodejs');

var  UserSchema = new Schema({
    firstName: {type:String,required: true},
    lastName: {type:String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}]
});

let validPassword = (password) =>{

    if(!password){
        return false;
    }else{
        return password;
    }

}

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', UserSchema);
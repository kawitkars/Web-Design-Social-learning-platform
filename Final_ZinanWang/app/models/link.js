

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LinkSchema = new Schema({

    title:{
        type:String,
        required:"title is required"
    },
    contentType:{
        type:String,
        required:"type is required"
    },
    
    author:{
        type:String,
        required:"author is required"
    },

    content:{
        type:String,
        required:"content is required"
    },

    date:{

        type:Date,
        default:Date.now
    },

    url:{
        type:URL,
        required:true,
        index:{unique:true}
    }
});

module.exports = mongoose.model('Link', LinkSchema);
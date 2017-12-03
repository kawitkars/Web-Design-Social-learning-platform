const mongoose = require('mongoose');

links = mongoose.model('Link');

let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

// exports.get = function (callback) {
//     Sticky.find({},function (err, links) {
//         throwError(err);
//         callback(links);
//     });

};
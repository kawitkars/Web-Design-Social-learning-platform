var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

module.exports = function(app,express){

    var auth = express.Router();

    auth.post('/register',function(req,res,next){

        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email
        });

        user.save(function(err, result){
                     if (err) {
                         return res.status(500).json({
                             title: 'An error occurred',
                             error: err
                         });
                     }
                     res.status(201).json({
                         message: 'User created',
                         obj: result
                     });
                 });
    });

    auth.post('/login',function(req,res){

        if(!req.body.email){

            res.json({success:false, message:"No email was provided"});

        }else{
            
            User.findOne({email: req.body.email},(err,user) =>{
                if(err){
                    res.json({success:false, message:err});
                 }else{
                     if(!user){
                         res.json({success:false,message:"User no found."});
                     }else{
                         const validPassword = user.comparePassword(req.body.password);

                         if(!validPassword){
                             res.json({success:false,message:"Password Invalid"});
                         }else{
                             res.json({success:true,message:"Success!",user:{email:user.email}}); 
                         }

                     }
                 }
            });
        }


    });

    


    return auth;

}


// router.post('/signin', function (req, res, next) {
//     User.findOne({email: req.body.email}, function(err, user){
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         if(!user) {
//             return res.status(401).json({
//                 title: 'Login failed1',
//                 error: {message: 'Invalid login credentials'}
//             });
//         }
//         if (!bcrypt.compareSync(req.body.password, user.password)){
//             return res.status(401).json({
//                 title: 'Login failed2',
//                 error: {message: 'Invalid login credentials'}
//             });
//         }

//         var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
//         res.status(200).json({
//             message: 'Successfully logged in',
//             token: token,
//             userId: user._id
//         });
//     });
// });

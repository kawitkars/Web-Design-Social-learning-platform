var Link = require('../models/link');

module.exports = function(app,express){

    var api = express.Router();

    api.post('/signup',function(req,res){

        var link = new Link({
            title:req.body.title,
            contentType:req.body.contentType,
            author:req.body.author,
            content:req.body.content,
            date:req.body.date,
            url:req.body.url,
            courseName: req.body.courseName

        });

        link.save(function(err){
            if(err){
                res.send(err);
                return;
            }
            res.json({message:'link has created'});
        });

    });

    api.get('/links',function(req,res){

        Link.find({},function(err,links){

            if(err){
                res.send(err);
                return;
            }

            res.json(links);
        });
    });

    api.get('/sort',function(req,res){
        
                Link.find({},function(err,links){
        
                    if(err){
                        res.send(err);
                        return;
                    }
        
                    res.json(links);
                });
            });

    api.get('/me',function(req,res){
        res.json(req.decoded);
    });

    return api;
}

var express = require('express');
var router = express.Router();

var Course = require('../models/course');

router.post('/', function (req, res, next) {
    var course = new Course({
        courseName: req.body.courseName,
        description : req.body.description,
        imagePath : req.body.imagePath,
        instructorName: req.body.instructorName
    });
    course.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            course: 'Saved course',
            obj: result
        });
    });
});

module.exports = router;

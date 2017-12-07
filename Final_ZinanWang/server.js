let express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'), //created model loading here
bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/socialstudy', function(err){
    if(err){
        console.log(err);
    }else {
        console.log("connected to the database...");
    }    
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
extended: true
}));

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.static(__dirname + '/SocialLearningPlatform/dist'));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app,express);
app.use('/api',api);

// app.get('*',function(req,res){
//     res.sendFile(__dirname + '/public/app/views/index.html');
// });

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/SocailLearningPlatform/dist/index.html'));
});

app.listen(port);
console.log('Stickies RESTful API server started on: ' + port);
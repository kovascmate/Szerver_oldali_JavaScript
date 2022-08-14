var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./route/index.js')(app);
app.post('/',(req,res,next)=>{});
/*
app.use((err,req,res,next)=>{
    res.end('Problem...');
    console.log(err);
});
*/  
var server = app.listen(3000, function () {
	console.log("index");
});
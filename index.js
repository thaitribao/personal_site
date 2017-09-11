var express = require('express'); 
var app = express(); 
var ejs = require('ejs'); 

//Home page
app.get('/', function(req, res){
    res.send('Hello Word from Port 8000!');
}); 


app.listen(8000, function(){
    console.log('Example app listening on port 8000!'); 
});

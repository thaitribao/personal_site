var express = require('express'); 
var app = express();  

app.use(express.static("public"));
app.set('view engine', 'ejs');


//Home page - resume-like page will be hosted here
app.get('/', function(req, res){
    res.render("home");
}); 

//Projects - page containing links to several projects
app.get('/projects', function(req, res){
    res.render('projects'); 
});
//Blogs - page containing links to several blogs
app.get('/blogs', function(req, res){
    res.render('blogs');  
});
//Blogs - cycling
app.get('/blogs/bikes', function(req, res){
    res.send('Reached the bike blogs'); 
});
//Blogs - technical 
app.get('/blogs/technical', function(req, res){
    res.send('Reached the technical blogs');
});
//Blogs - food
app.get('/blogs/food', function(req, res){
    res.send('Reached the food blogs'); 
});

app.listen(8000, function(){
    console.log('Example app listening on port 8000!'); 
});

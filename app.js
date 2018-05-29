//import express, like importing tornado
var express = require('express');

//templating engine
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});


//static file storage location
app.use(express.static('public'));

//use app for get request at listed url run the following function to handle it.
app.get('/', function (request, response) {
    response.send('Hello World!');
});

app.get('/about', function (request, response) {
    response.send('About Page')
});

app.get('/projects', function (request, response) {
    response.send('Projects Page')
})

//get parameters from url
app.get('/post/:slug', function (request, response) {
    var slug = request.params.slug;
    response.send('Post About: ' + slug);
});

//get parameters from url query.../hello?name=Nick. 'World' is default if no input defined.
// app.get('/hello', function (request, response) {
//     var name = request.query.name || 'World';
//     response.send('Hello ' + name)
// })

//need a template, we send it variables called context, then the template gets rendered
app.get('/home', function (request, response) {
    var name = request.query.name || 'World';
    var context = {
        title: 'Hello',
        name: name,
        friends: [
            {name: "Wiggles"},
            {name: "Angie"},
            {name: "Roland"},
            {name: "Jacob"}
        ]
    };

    response.render('index.html', context);
});


app.listen(8080, function () {
    console.log('Listening on port 8080');
});
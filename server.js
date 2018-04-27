var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require("path");



var friends = require("./app/data/friends.js");

app.use(express.static(path.join(__dirname , 'app/public')));

//set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var PORT = process.env.PORT || 3000;



require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//allows html to have access to our public folder in the server
app.use(express.static(path.join(__dirname, "/public")));

//starts the server to begin listening
app . listen(PORT,function() {
    console.log("App listening on PORT " + PORT);
});
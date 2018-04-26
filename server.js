var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require("path");



var friends = require("./app/data/friends.js");

app.use(express.static(path.join(_dirname , 'app/public')));

//set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var PORT = process.env.PORT || 3000;



require('./app/routing/appRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//starts the server to begin listening
app . listen(PORT,function() {
    console.log("App listening on PORT " + PORT);
});
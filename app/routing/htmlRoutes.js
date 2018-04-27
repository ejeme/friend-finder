var path = require('path');

module.exports = function(app) {
console.log("export worked");
	// connects to survey page 
	app.get('/survey',function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// connects to home page
	app.get('/', function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}
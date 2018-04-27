var friends = require('../data/friend.js');
//Import the list of friend entries
var path = require('path');

//Export API routes
module.exports = function(app) {
console.log("Export working");
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        //friends.push(req.body);

        var surveyData = req.body;
        var temp = [];
        var match = {};

        friends.forEach(function (element) {

            var obj = {};
            var scores = element.scores;
            var arr = [];

            for (var i = 0; i < scores.length; i++) {
                arr.push(Math.abs(scores[i] - surveyData.scores[i]));
            }
        }

        )
    }
)
};
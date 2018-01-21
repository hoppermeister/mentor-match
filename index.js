var express = require('express');
var app = express();

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
*/

//set static folder + contents
app.use(express.static("static"));
app.use("/mentormatch.css", express.static(__dirname + "/mentormatch.css"));

//Set the port (environment variable, or 5000 default)
app.set('port', (process.env.PORT || 5000));

//Serve the index file
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get('/api/call', function(request, response) {
	response.json({"key": "value"});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/api/call', function(request, response) {
	
});

var users = [
	{
		"id": 0,
		"name": "Alastair", 
		"interests": [],
		"bio": "I'm very interested in world cultures, and have studied abroad numerous times!",
		"is_mentor": true,
		"matches": [],
		"experiences": [0]
	},
	
 ];

 var matches = [
	{
		"mentor": [0],
		"mentee": [1],
		"messages": []
	}
 ];
 
 var messages = [
	{
		"time": "",
		"string": "Hi, how are you?",
		"by": 1,
		"to": 0
	}
];

var interests = [
	{
		"name": "study abroad",
		"mentors": [0],
		"mentees": []
	}
];

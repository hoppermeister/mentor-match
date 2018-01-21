var express = require('express');
var app = express();

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

app.get('/api/getUsers', function(request, response) {
	response.json(users);
});

app.get('/api/matchMentor', function(request, response){
	var mentee = request.query.mentee;
	var mentor = request.query.mentor;
	var category = request.query.category;
	
	var matchIndex = matches.push({"mentor": mentor, "mentee": mentee, "messages": [], "category": category});
	console.log(mentee);
	users[mentee].matches.push(matchIndex);
	users[mentor].matches.push(matchIndex);
	response.json({"error": false});
	
});

app.get('/api/getMentorsByCategory', function(request, response) {
	var category = request.query.category;
	for(var cat in categories){
		if(category == cat.name){
			response.json(category.mentors);
			return;
		}
	}
});

var users = [
	{
		"id": 0,
		"name": "Alastair", 
		"interests": [0, 4],
		"bio": "I'm very interested in world cultures, and have studied abroad numerous times!",
		"is_mentor": true,
		"matches": [],
		"experiences": [0]
	},
		{
		"id": 1,
		"name": "Swiper", 
		"interests": [3],
		"bio": "I'm very interested in SWIPING. Also, I would like to learn Spanish.",
		"is_mentor": true,
		"matches": [],
		"experiences": [0]
	},
		{
		"id": 2,
		"name": "Ada", 
		"interests": [],
		"bio": "I love Charles Babbage machines.",
		"is_mentor": true,
		"matches": [],
		"experiences": [0, 3]
	},
		{
		"id": 3,
		"name": "", 
		"interests": [],
		"bio": "",
		"is_mentor": true,
		"matches": [],
		"experiences": []
	}
 ];

 var matches = [
	{
		"mentor": 0,
		"mentee": 1,
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

var categories = [
	{
		"name": "studying abroad",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "time travel",
		"mentors": [0],
		"mentees": []
	},
		{
		"name": "Greek life",
		"mentors": [0],
		"mentees": []
	},
			{
		"name": "coding",
		"mentors": [0],
		"mentees": []
	},
			{
		"name": "learning languages",
		"mentors": [0],
		"mentees": []
	},
];

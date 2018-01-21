var express = require('express');
var util = require('util');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true }));
app.use(bodyParser.json());
//set static folder + contents
app.use(express.static("static"));
app.use("/mentormatch.css", express.static(__dirname + "/mentormatch.css"));

app.use("/mentormatch.css", express.static(__dirname + "/custom_styles.css"));

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
	console.log(JSON.stringify(users));
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

app.post('/api/addUser', function(request, response) {
	console.log(request.body);
	var newUser = request.body;
	newUser.id = users.length;
	newUser.is_mentor = true;
	newUser.matches = []; 
	users.push(newUser);
	
	response.json(users);
});

var users = [
	{
		"id": 0,
		"name": "Alastair", 
		"interests": [0, 4],
		"bio": "I'm very interested in world cultures, and have studied abroad numerous times!",
		"is_mentor": true,
		"matches": [],
		"experiences": [0, 1]
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
		"name": "Greger", 
		"interests": [],
		"bio": "Who dares!?",
		"is_mentor": true,
		"matches": [],
		"experiences": [1, 7, 3]
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
		"time": "4:19PM",
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
		"name": "greek life",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "agile development",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "learning languages",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "game dev",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "kotlin",
		"mentors": [0],
		"mentees": []
	},
	{
		"name": "competitive programming",
		"mentors": [0],
		"mentees": []
	}

];

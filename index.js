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
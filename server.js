var express = require('express');
var app = express();
var path = require('path');

// this sets up the public folder to serve the assets
// it will automatically look in the public folder for stuff like CSS and JS
app.use(express.static(__dirname + '/public'));

// for any request (the "*" wildcard), we will send the index.html
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname) + '/public/views/index.html')
})

app.listen(8080, function(){
	console.log("listening on 8080")
})




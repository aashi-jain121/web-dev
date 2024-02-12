const express = require('express');
const app = express();
const PORT = 3000;

// Without middleware
app.get('/', function (req, res) {
	//  res.sendFile(__dirname + "/index.html")
	res.sendFile("index.html")
});

// app.post('/', function(req, res){
// 	res.send("thank you")
// })

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

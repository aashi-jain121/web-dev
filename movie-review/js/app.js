const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const path = require('path');
const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'html')));

app.get('/', (req, res) => {
    // Send the index.html file
    res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
    console.log("index html sent")
});



app.listen(PORT, function(){
    console.log("server running on " + PORT)
})
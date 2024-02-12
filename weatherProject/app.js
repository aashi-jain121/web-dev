const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
    
})

app.post("/", function(req, res){
    console.log(req.body.cityName)

    const query = req.body.cityName
    const apiKey = "37312245fa1880d968ce718a1a02a40d"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + apiKey + "&units=" + unit

    https.get(url, function(response){
        console.log(response)

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<h1> The temp in " + query +  " is " + temp + " degree celcius</h1>")
            res.write("<h1> The weather is currently " + desc + "</h1>")
            res.write("<img src = " + imageUrl + ">")
            res.send()
        })
    })
})
    


// on cmd
app.listen(3000, function(){
    console.log("server listening on 3000")
})


// api key 37312245fa1880d968ce718a1a02a40d
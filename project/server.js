const http = require("http")
const fs = require("fs")
const PORT = 8000

var html;
fs.readFile("./project.html", "utf8", function (err, data) {
    if(!err) {
        html = data;
    }
})

var js;
fs.readFile("./project.js", "utf8", function (err, data) {
    if(!err) {
        js = data;
    }
})

var css;
fs.readFile("./style.css", "utf8", function (err, data) { 
    if(!err) {
        css = data;
    }
})

var image1;
fs.readFile("../images/1.jpg", function (err, data) {
    if(!err) {
        image1 = data;
    }
})

function setResponse(req, res, data, type) {
    res.statusCode = 200
    res.setHeader("Content-Type", type)
    res.write(data)
    res.end()
}


var app = http.createServer(function (req, res) {
    var type;
    var data;

    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    else if(req.url == "/" || req.url == "/project.html") {
        type = "text/html"
        data = html
    }

    else if(req.url == "/project.js") {
        type = "application/javascript"
        data = js
    }

    else if(req.url == "/style.css") {
        type = "text/css"
        data = css
    }

    else if(req.url == "/microservice.html") {
        type = "image/jpeg"
        data = image1
    }

    // console.log(type)
    // console.log(data)
    // console.log(req.url)
    setResponse(req, res, data, type)
})


app.listen(PORT, function () {
    console.log("== Server is istening onto port " + PORT)
})
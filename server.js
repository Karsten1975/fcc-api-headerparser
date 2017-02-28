var express = require("express");
var app = express();

app.get("/", function(req, res){
    var returnObj = {};
    returnObj.ipaddress = req.headers['x-forwarded-for'];
    var langArr = req.headers['accept-language'].split(";");
    var langArrTwo = langArr[0].split(",");
    returnObj.language = langArrTwo[0];
    var softwareArr = req.headers['user-agent'].split("(");
    var softwareArrTwo = softwareArr[1].split(")");
    returnObj.software = softwareArrTwo[0];
    res.json(returnObj);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The header_parser server is running ....");
});
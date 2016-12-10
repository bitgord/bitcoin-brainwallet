var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/wallet", function(req, res) {
	var brainsrc = req.body.brainsrc;
	console.log(brainsrc);
});

app.listen(3009, function () {
	console.log("listening on post 3009");
});
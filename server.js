var express = require('express');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var config = require('./config');


var app = express();
app.use(bodyParser.json()); // parse application/json

// Routers
const todoRoute = require('./routes/todoRoute');

app.use('/', todoRoute);

var db;

if (process.env.NODE_ENV === "test") {
    db = mongoose.connect(config.test_db);
    app.listen(config.test_port);
    console.log("App listening on port " + config.test_port);
} else {
    db = mongoose.connect(config.db);
    app.listen(config.port);
    console.log("App listening on port " + config.port);
}

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config.db);
});

module.exports = app;
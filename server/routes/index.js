const mongoose = require('mongoose');
var user = require('./people/user');
var chat = require('./people/chat');
var zone = require('./zone/zone');
module.exports = function (app) {
    mongoose.connect('mongodb://127.0.0.1:27017');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        user(app,mongoose);
        chat(app,mongoose);
    })
};
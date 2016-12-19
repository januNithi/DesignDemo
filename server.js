
var express = require('./config/express');

var app = express();

var server = app.listen(4000, function () {
    var port = server.address().port;

    console.log('Server running at %s', port);
});

module.exports = {
    app : app,
    server : server
};


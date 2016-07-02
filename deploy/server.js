// Initialize the express application
var app = require('./config/express')();
var portId = process.env.PORT || 8070;

// Start the app by listening on <port>
app.listen(portId);

console.log('Server Running on ' + portId);

// Expose app
module.exports = app;

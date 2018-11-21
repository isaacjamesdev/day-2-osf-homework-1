var app = require("express")();
//importing the my api.
// Now, my 'app' have an attribute called 'api', that it contains some functions
app.api = require('../api/api');

//In routes, is expected one parameter, this parameter must be an instance express
require("../routes/hello")(app);

module.exports = app;
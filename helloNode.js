//importing an express already configured
var app = require('./conifg/express');
var bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8081);

console.log('Server running at http://127.0.0.1:8081/')

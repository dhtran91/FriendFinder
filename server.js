const express = require('express'),
    bodyParser = require('body-parser'),
    friendRouter = require('./app/routing/apiRoutes.js')(),
    htmlRouter = require('./app/routing/htmlRoutes.js')();

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', friendRouter);
app.use(htmlRouter);

app.listen(port, function () {
    console.log("Listening on port: " + port);
})
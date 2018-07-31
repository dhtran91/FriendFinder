let express = require('express'),
    path = require('path');

let htmlRoutes = function () {
    let htmlRouter = express.Router();
    htmlRouter.route('/')
        .get((req, res) => {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });

    htmlRouter.route('/survey')
        .get((req, res) => {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        })
    return htmlRouter;
}

module.exports = htmlRoutes;

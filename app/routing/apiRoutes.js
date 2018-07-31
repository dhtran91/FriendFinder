let express = require('express'),
    friends = require('../data/friends.js');


let apiRoutes = function () {
    let friendRouter = express.Router();
    friendRouter.route('/friends')
        .get((req, res) => {
            res.json(friends);
        })
        .post((req, res) => {
            let friend = new friends.newFriend(req.body.name, req.body.photo, req.body.scores)
            friends.push(friend);
            res.send(friend);
        });
        
    return friendRouter;
}

module.exports = apiRoutes;



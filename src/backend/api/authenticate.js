var config = require('./../dataset/customers.json');

exports.authenticateUser = function(req, res){
    /**
     * req = {username: 'bob', password: 'password'}
     * 
     */

    var user = req.body.username;
    var password = req.body.password;

    for (var i = 0; i < config.length; i++) { 
        var currentDetails = config[i];
        var currentUser = currentDetails.username;
        var currentPassword = currentDetails.password;
        if (currentUser == user) {
            if (currentPassword == password) {
                res.status(200).send("authenticated");
                return;
            } else {
                res.status(400).send("wrong password");
                return;
            }
        } 
    }
    res.status(400).send("user does not exist");
    return;
};
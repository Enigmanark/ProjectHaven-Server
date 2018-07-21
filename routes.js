var signup = require("./signup");

module.exports = function(app, passport) {
    app.get("/", function(req, res) {
        console.log("Got connection!");
        res.send("Okay");
    });

    //Process login form
    app.post("/login", passport.authenticate('local', {}), function(req, res) {
        res.send("Success");
    }
    );

    app.post("/signup", signup, function(req, res) {
        res.send("Success");
    });

    function isAuthenticated(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        else {
            console.log("User not logged in");
        }
    };
}
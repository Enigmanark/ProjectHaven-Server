var signup = require("./signup");

module.exports = function(app) {
    app.get("/", function(req, res) {
        console.log("Got connection!");
        res.send("Okay");
    });

    app.post("/login", function(req, res) {
        var json = req.body;
        var email = json.Email;
        var password = json.Password;
        console.log("Username is: " + email);
        console.log("Password is: " + password);
        res.send("Success");
    });

    app.post("/signup", signup, function(req, res) {

    });
}
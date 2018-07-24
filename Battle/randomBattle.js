var locations = require("../Enemies/enemyLocations");
var Enemy = require("../Models/enemy");

module.exports = async function() {
    var rand = Math.floor(Math.random() * locations.length);
    var randLoc = locations[rand];

    await Enemy.find({}).lean().where('Locations').in([randLoc]).limit(30).exec(function(err, en) {
        if(err) {
            console.log("Query error or database offline or something");
            res.send("801");
        }
        else {
            var enemies = en;
            rand = Math.floor(Math.random() * enemies.length);
            var battle = enemies[rand];
            battle = JSON.stringify(battle);
            battle["BattleLocation"] = randLoc;
            console.log("Sending battle data");
            res.send(battle);
        }
    });
};
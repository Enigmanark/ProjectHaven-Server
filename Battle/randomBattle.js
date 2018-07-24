var locations = require("../Enemies/enemyLocations");
var Enemy = require("../Models/enemy");

module.exports = function(res) {
    var locs = locations(); 
    var rand = Math.floor(Math.random() * locs.length);
    var randLoc = locs[rand];
    //console.log(locs);
    //console.log(rand);
    //console.log(randLoc);
    Enemy.find({}).lean().where('Locations').in([randLoc]).limit(30).exec(function(err, en) {
        if(err) {
            console.log("Query error or database offline or something");
            res.send("801");
        }
        else if(en){
            if(en.size != 0) {
                var enemies = en;
                rand = Math.floor(Math.random() * enemies.length);
                var battle = enemies[rand];
                battle = JSON.stringify(battle);
                battle["BattleLocation"] = randLoc;
                console.log("Sending battle data");
                res.send(battle);
            }
            else {
                console.log("Couldn't find a random battle with those search queries");
                res.send("802");
            }
        }
        else {
            console.log("Couldn't find a random battle with those search queries");
            res.send("802");
        }
    });
};
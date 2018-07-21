var signup = require("./signup");
var Player = require("./Models/player");
var login = require("./config/login");

module.exports = function(app, passport) {
    app.get("/", function(req, res) {
        console.log("Got connection!");
        res.send("Okay");
    });

    //Process login form
    app.post("/login", login, function(req, res) {
        res.send("Success");
    }
    );

    app.get("/getcharacter", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                if(player.validPassword(req.body.Password)) {
                    console.log("Found account, now sending character data");
                    var character = {
                        "Name" : "Solar",
                        "Level" : 100,
                        "Experience" : 0,
                        "Gold" : 0,
                        "ExperienceToLevelUp" : 100,
                        "TrainingPoints" : 0,
                        "baseHP" : 50,
                        "MaxHP" : 0,
                        "CurrentHP" : 0,
                        "BaseSP" : 15,
                        "MaxSP" : 0,
                        "CurrentSP" : 0,
                        "BaseMP" : 0,
                        "MaxMP" : 0,
                        "CurrentMP" : 0,
                        "Strength" : 0,
                        "CurrentStrength" : 0,
                        "Dexterity" : 0,
                        "CurrentDexterity" : 0,
                        "Endurance" : 0,
                        "CurrentEndurance" : 0,
                        "Intelligence" : 0,
                        "CurrentIntelligence" : 0,
                        "Willpower" : 0,
                        "CurrentWillpower" : 0,
                        "Agility" : 0,
                        "CurrentAgility" : 0,
                        "MeleeDef" : 0,
                        "CurrentMeleeDef" : 0,
                        "RangedDef" : 0,
                        "CurrentRangedDef" : 0,
                        "SpellDef" : 0,
                        "CurrentSpellDef" : 0,
                        "Earth" : 1,
                        "CurrentEarth" : 1,
                        "Water" : 1,
                        "CurrentWater" : 1,
                        "Air" : 1,
                        "CurrentAir" : 1,
                        "Fire" : 1,
                        "CurrentFire" : 1,
                        "Ice" : 1,
                        "CurrentIce" : 1,
                        "Thunder" : 1,
                        "CurrentThunder" : 1,
                        "Light" : 1,
                        "CurrentLight" : 1,
                        "Dark" : 1,
                        "CurrentDark" : 1,
                        "CurrentWeaponID" : 1,
                    }
                    character = JSON.stringify(character);
                    console.log(character);
                    res.send(character);
                }
                else {
                    res.send("300");
                }
            }
            else {
                res.send("300");
            }
        });
    });

    app.post("/signup", signup, function(req, res) {
        res.send("Success");
    });
}
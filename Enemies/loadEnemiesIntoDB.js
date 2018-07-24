var Enemy = require("../Models/enemy");
var enemyData = require("./enemyData");
module.exports = async function() {
    var enemies = enemyData();
    for(i = 0; i < enemies.length; i++) {
        var e = new Enemy();
        e.Name = enemies[i]["Name"];
        e.Level = enemies[i]["Level"];
        e.Gold = enemies[i]["Gold"];
        e.Experience = enemies[i]["Experience"];
        e.ID = enemies[i]["ID"];
        e.Path = enemies[i]["Path"];
        e.PathToAvatar = enemies[i]["PathToAvatar"];
        e.MaxHP = enemies[i]["MaxHP"];
        e.MaxMP = enemies[i]["MaxMP"];
        e.MaxSP = enemies[i]["MaxSP"];
        e.MeleeDef = enemies[i]["MeleeDef"];
        e.RangedDef = enemies[i]["RangeDef"];
        e.SpellDef = enemies[i]["SpellDef"];
        e.Strength = enemies[i]["Strength"];
        e.Dexterity = enemies[i]["Dexterity"];
        e.Agility = enemies[i]["Agility"];
        e.Endurance = enemies[i]["Endurance"];
        e.Intelligence = enemies[i]["Intelligence"];
        e.Willpower = enemies[i]["Willpower"];
        e.MinDamage = enemies[i]["MinDamage"];
        e.MaxDamage = enemies[i]["MaxDamage"];
        e.Earth = enemies[i]["Earth"];
        e.Water = enemies[i]["Water"];
        e.Air = enemies[i]["Air"];
        e.Fire = enemies[i]["Fire"];
        e.Ice = enemies[i]["Ice"];
        e.Thunder = enemies[i]["Thunder"];
        e.Light = enemies[i]["Light"];
        e.Dark = enemies[i]["Dark"];
        e.Locations = enemies[i]["Locations"];
        //Check if there's an enemy already with that ID
        await Enemy.findOne( { "ID" : e.ID}, await function(err, en) {
            var name = e.Name;
            if(err) throw err;
            if(en) { //If we found an enemy, then adding enemy fails
                console.log("Not adding the same enemy twice");
                return;
            }
            else {
                e.save(function(err) { //save the enemy
                    console.log("Added the enemy " + name + " to the database");
                });
            }
        });
    };
};
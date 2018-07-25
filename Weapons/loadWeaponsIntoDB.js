var Weapon = require("../Models/weapon");
var weaponData = require("./WeaponData");
module.exports = async function() {
    var weapons = weaponData();
    for(i = 0; i < weapons.length; i++) {
        var w = new Weapon();
        w.Name = weapons[i]["Name"];
        w.ID = weapons[i]["ID"];
        w.Path = weapons[i]["Path"];
        w.Type = weapons[i]["Type"];
        w.Description = weapons[i]["Description"];
        w.MinDamage = weapons[i]["MinDamage"];
        w.MaxDamage = weapons[i]["MaxDamage"];
        w.BonusAccuracy = weapons[i]["BonusAccuracy"];
        w.BonusCritRate = weapons[i]["BonusCritRate"];
        w.Element = weapons[i]["Element"];
        //Check if there's an enemy already with that ID
        await Weapon.findOne( { "ID" : w.ID}, await function(err, wep) {
            var name = w.Name;
            if(err) throw err;
            if(wep) { //If we found an enemy, then adding enemy fails
                console.log("Not adding the same weapon twice");
                return;
            }
            else {
                w.save(function(err) { //save the enemy
                    console.log("Added the weapon " + name + " to the database");
                });
            }
        });
    };
    console.log("Finished loading weapons into DB");
};
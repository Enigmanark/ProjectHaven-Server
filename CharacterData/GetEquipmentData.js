var Weapon = require("../Models/weapon");
var Armor = require("../Models/armor");
var Shield = require("../Models/shield");
module.exports = async function(req, res, character) {
    console.log("About to check the weapon database");
    var wepArray = character["Inventory"]["Weapons"];
    await Weapon.find({}).where('ID').in([wepArray[0], wepArray[1],
        wepArray[2], wepArray[3], wepArray[4], wepArray[5], wepArray[6], 
        wepArray[7], wepArray[8], wepArray[9], ]).exec(async function(err, weapons) {
		if(err) {
            console.log("Got a database error in GetWeaponData");
            throw err;
        }
        console.log("No database error, continuing");
		if(weapons.length > 0) {
            var newWepArray = [];
            for(k = 0; k < 10; k++) {
                newWepArray[k] = null;
            }
            for(i = 0; i < 10; i++) {
                var wep = weapons[i];
                if(wep != null) {
                    for(j = 0; j < wepArray.length; j++) {
                        if(wep["ID"] == wepArray[j]) {
                            newWepArray[j] = JSON.parse(JSON.stringify(shil));
                        }
                    }
                }
            }
            character["Inventory"]["Weapons"] = newWepArray;
            console.log("Got weapon data");
            console.log("About to check the armor database");
            var armorArray = character["Inventory"]["Armors"];
            await Armor.find({}).where('ID').in([armorArray[0], armorArray[1],
               armorArray[2], armorArray[3], armorArray[4], armorArray[5], armorArray[6], 
                armorArray[7], armorArray[8], armorArray[9], ]).exec(async function(err, armors) {
                if(err) {
                    console.log("Got a database error in GetArmorData");
                    throw err;
                }
                console.log("No database error, continuing");
                if(armors.length > 0) {
                    var newArmorArray = [];
                    for(k = 0; k < 10; k++) {
                        newArmorArray[k] = null;
                    }
                    for(i = 0; i < 10; i++) {
                        var armor = armorss[i];
                        if(armor != null) {
                            for(j = 0; j < armorArray.length; j++) {
                                if(armor["ID"] == armorArray[j]) {
                                    newArmorArray[j] = JSON.parse(JSON.stringify(shil));
                                }
                            }
                        }
                    }
                    character["Inventory"]["Armors"] = newArmorArray;
                    console.log("Got armor data");
                    console.log("About to check the shield database");
                    var shieldArray = character["Inventory"]["Shields"];
                    await Shield.find({}).where('ID').in([shieldArray[0], shieldArray[1],
                       shieldArray[2], shieldArray[3], shieldArray[4], shieldArray[5], shieldArray[6], 
                        shieldArray[7], shieldArray[8], shieldArray[9], ]).exec(async function(err, shields) {
                        if(err) {
                            console.log("Got a database error in GetShieldData");
                            throw err;
                        }
                        console.log("No database error, continuing");
                        if(shields.length > 0) {
                            var newShieldArray = [];
                            for(k = 0; k < 10; k++) {
                                newShieldArray[k] = null;
                            }
                            for(i = 0; i < 10; i++) {
                                var shil = shields[i];
                                if(shil != null) {
                                    for(j = 0; j < shieldArray.length; j++) {
                                        if(shil["ID"] == shieldArray[j]) {
                                            newShieldArray[j] = JSON.parse(JSON.stringify(shil));
                                        }
                                    }
                                }
                            }
                            character["Inventory"]["Shields"] = newShieldArray;
                            character = JSON.stringify(character);
                            console.log("Got shield data");

                            res.send(character);
                            console.log("Character sent!");
                        }
                        else { 
                            console.log("Error loading shield ata");
                            res.send("506");
                        }
                    });
                }
                else { 
                    console.log("Error loading armor data");
                    res.send("506");
                }
            });

		}
		else { 
			console.log("Error loading weapon data");
			res.send("506");
		}
	});
}
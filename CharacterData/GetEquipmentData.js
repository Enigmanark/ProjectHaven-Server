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
			for(i = 0; i < 10; i++) {
                if(wepArray[i] == null) {
                    newWepArray[i] = null;
                }
                else if(weapons[i] == null) {}
                else if(weapons[i]["ID"] == wepArray[0]) newWepArray[0] = JSON.parse(JSON.stringify(weapons[i]));
                else if(weapons[i]["ID"] == wepArray[1]) newWepArray[1] = JSON.parse(JSON.stringify(weapons[i]));
                else if(weapons[i]["ID"] == wepArray[2]) newWepArray[2] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[3]) newWepArray[3] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[4]) newWepArray[4] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[5]) newWepArray[5] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[6]) newWepArray[6] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[7]) newWepArray[7] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[8]) newWepArray[8] = JSON.parse(JSON.stringify(weapons[i])); 
                else if(weapons[i]["ID"] == wepArray[9]) newWepArray[9] = JSON.parse(JSON.stringify(weapons[i]));
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
                    for(i = 0; i < 10; i++) {
                        if(armorArray[i] == null) {
                            newArmorArray[i] = null;
                        }
                        else if(armors[i] == null) { }
                        else if(armors[i]["ID"] == armorArray[0]) newArmorArray[0] = JSON.parse(JSON.stringify(armors[i]));
                        else if(armors[i]["ID"] == armorArray[1]) newArmorArray[1] = JSON.parse(JSON.stringify(armors[i]));
                        else if(armors[i]["ID"] == armorArray[2]) newArmorArray[2] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[3]) newArmorArray[3] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[4]) newArmorArray[4] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[5]) newArmorArray[5] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[6]) newArmorArray[6] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[7]) newArmorArray[7] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[8]) newArmorArray[8] = JSON.parse(JSON.stringify(armors[i])); 
                        else if(armors[i]["ID"] == armorArray[9]) newArmorArray[9] = JSON.parse(JSON.stringify(armors[i]));
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
                            for(i = 0; i < 10; i++) {
                                if(shieldArray[i] == null) {
                                    newShieldArray[i] = null;
                                }
                                else if(shields[i] == null) { }
                                else if(shields[i]["ID"] == shieldArray[0]) newShieldArray[0] = JSON.parse(JSON.stringify(shields[i]));
                                else if(shields[i]["ID"] == shieldArray[1]) newShieldArray[1] = JSON.parse(JSON.stringify(shields[i]));
                                else if(shields[i]["ID"] == shieldArray[2]) newShieldArray[2] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[3]) newShieldArray[3] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[4]) newShieldArray[4] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[5]) newShieldArray[5] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[6]) newShieldArray[6] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[7]) newShieldArray[7] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[8]) newShieldArray[8] = JSON.parse(JSON.stringify(shields[i])); 
                                else if(shields[i]["ID"] == shieldArray[9]) newShieldArray[9] = JSON.parse(JSON.stringify(shields[i]));
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
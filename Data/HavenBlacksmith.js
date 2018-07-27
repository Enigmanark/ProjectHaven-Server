var Weapon = require("../Models/weapon");
var Armor = require("../Models/armor");
var Shield = require("../Models/shield");

module.exports = async function (req, res) {
    var inventory = {};
    var weapons = [];
    weapons.push(2);
    weapons.push(3);
    weapons.push(4);
    weapons.push(5);
    weapons.push(6);
    weapons.push(7);
    weapons.push(8);
    weapons.push(null);
    weapons.push(null);
    weapons.push(null);

    var armor = [];
    armor.push(2);
    armor.push(3);
    armor.push(4);
    armor.push(5);
    armor.push(6);
    armor.push(7);
    armor.push(8);
    armor.push(9);
    armor.push(null);
    armor.push(null);

    var shields = [];
    shields.push(2);
    shields.push(3);
    shields.push(4);
    shields.push(5);
    shields.push(6);
    shields.push(7);
    shields.push(8);
    shields.push(9);
    shields.push(null);
    shields.push(null);

    await Weapon.find().where('ID').in([ weapons[0], weapons[1], weapons[2], weapons[3], weapons[4], weapons[5], weapons[6],
    weapons[7], weapons[8], weapons[9] ]).exec(async function (err, weaponDataArray) {
        
        if (err) {
            console.log("Got a database error in weapons in HavenBlacksmith");
            throw err;
        }
        else if(weaponDataArray.length > 0) {
            var newWepArray = [];
			for(i = 0; i < 10; i++) {
                if(weapons[i] == null) {
                    newWepArray[i] = null;
                }
                else if(weaponDataArray[i]["ID"] == weapons[0]) newWepArray[0] = JSON.parse(JSON.stringify(weaponDataArray[i]));
                else if(weaponDataArray[i]["ID"] == weapons[1]) newWepArray[1] = JSON.parse(JSON.stringify(weaponDataArray[i]));
                else if(weaponDataArray[i]["ID"] == weapons[2]) newWepArray[2] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[3]) newWepArray[3] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[4]) newWepArray[4] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[5]) newWepArray[5] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[6]) newWepArray[6] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[7]) newWepArray[7] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[8]) newWepArray[8] = JSON.parse(JSON.stringify(weaponDataArray[i])); 
                else if(weaponDataArray[i]["ID"] == weapons[9]) newWepArray[9] = JSON.parse(JSON.stringify(weaponDataArray[i]));
            }
            
            inventory["Weapons"] = newWepArray;
            console.log("Got weapon data for the shop");
            console.log("About to get armor");

            var armorArray = armor;
            await Armor.find({}).where('ID').in([armorArray[0], armorArray[1],
                armorArray[2], armorArray[3], armorArray[4], armorArray[5], armorArray[6], 
                armorArray[7], armorArray[8], armorArray[9], ]).exec(async function(err, armors) {
                if(err) {
                    console.log("Got a database error getting armor in HavenBlackSmith");
                    throw err;
                }
                console.log("No database error, continuing");
                if(armors.length > 0) {
                    var newArmorArray = [];
                    for(i = 0; i < 10; i++) {
                        if(armorArray[i] == null) {
                            newArmorArray[i] = null;
                        }
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
                    inventory["Armors"] = newArmorArray;
                    console.log("Got armor data for blacksmith");
                    console.log("About to get shields");

                    var shieldArray = shields;
                    await Shield.find({}).where('ID').in([shieldArray[0], shieldArray[1],
                        shieldArray[2], shieldArray[3], shieldArray[4], shieldArray[5], shieldArray[6], 
                        shieldArray[7], shieldArray[8], shieldArray[9], ]).exec(async function(err, shields) {
                        if(err) {
                            console.log("Got a database error in shields in HavenBlacksmith");
                            throw err;
                        }
                        console.log("No database error, continuing");
                        if(shields.length > 0) {
                            var newShieldArray = [];
                            for(i = 0; i < 10; i++) {
                                if(shieldArray[i] == null) {
                                    newShieldArray[i] = null;
                                }
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
                            inventory["Shields"] = newShieldArray;
                            console.log("Got shield data");

                            inventoryJSON = JSON.stringify(inventory);
                            res.send(inventoryJSON);
                            console.log("Shop data sent!");
                        }
                        else {
                            console.log("Havenblacksmith shielddataarray is not complete");
                            res.send("401");
                        }
                    });
                }
                else {
                    console.log("Havenblacksmith armorDatAarray is not complete");
                    res.send("401");
                }
            });               
        }
        else {
            console.log("HavenBlackSmith weaponDataArray is not complete");
            res.send("401");
        }
    });
};
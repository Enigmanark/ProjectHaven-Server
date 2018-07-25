var Weapon = require("../Models/weapon");

module.exports = async function(req, res, character) {
    var wepArray = character["Inventory"]["Weapons"];
    await Weapon.find({}).where('ID').in([wepArray[0], wepArray[1],
        wepArray[2], wepArray[3], wepArray[4], wepArray[5], wepArray[6], 
        wepArray[7], wepArray[8], wepArray[9], ]).exec(function(err, weapons) {
		if(err) throw err;
		if(weapons.length > 0) {
            var newWepArray = [];
			for(i = 0; i < 10; i++) {
                if(weapons[i] == null) {
                    newWepArray[i] = null;
                }
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
            character = JSON.stringify(character);
            res.send(character);
            console.log("Weapon Array is " + newWepArray.length);
            console.log("Character sent!");
		}
		else { 
			console.log("Error loading inventoryJSON");
			res.send("506");
		}
	});
}
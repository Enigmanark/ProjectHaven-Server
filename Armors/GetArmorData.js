var Armor = require("../Models/armor");

module.exports = async function(req, res, character) {
    console.log("About to check the armor database");
    var armorArray = character["Inventory"]["Armors"];
    await Armor.find({}).where('ID').in([armorArray[0], armorArray[1],
       armorArray[2], armorArray[3], armorArray[4], armorArray[5], armorArray[6], 
        armorArray[7], armorArray[8], armorArray[9], ]).exec(function(err, armors) {
		if(err) {
            console.log("Got a database error in GetArmorData");
            throw err;
        }
        console.log("No database error, continuing");
		if(armorss.length > 0) {
            var newArmorArray = [];
			for(i = 0; i < 10; i++) {
                console.log("Checking " + armors[i]);
                if(armors[i] == null) {
                    newArmorArray[i] = null;
                }
                else if(armors[i]["ID"] == wepArray[0]) newArmorArray[0] = JSON.parse(JSON.stringify(armors[i]));
                else if(armors[i]["ID"] == wepArray[1]) newArmorArray[1] = JSON.parse(JSON.stringify(armors[i]));
                else if(armors[i]["ID"] == wepArray[2]) newArmorArray[2] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[3]) newArmorArray[3] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[4]) newArmorArray[4] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[5]) newArmorArray[5] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[6]) newArmorArray[6] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[7]) newArmorArray[7] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[8]) newArmorArray[8] = JSON.parse(JSON.stringify(armors[i])); 
                else if(armors[i]["ID"] == wepArray[9]) newArmorArray[9] = JSON.parse(JSON.stringify(armors[i]));
			}
            character["Inventory"]["Armors"] = newArmorArray;
            character = JSON.stringify(character);
            res.send(character);
            console.log("Character sent!");
		}
		else { 
			console.log("Error loading inventoryJSON");
			res.send("506");
		}
	});
}
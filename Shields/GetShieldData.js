var Shield = require("../Models/shield");

module.exports = async function(req, res, character) {
    console.log("About to check the shield database");
    var shieldArray = character["Inventory"]["Shields"];
    await Shield.find({}).where('ID').in([shieldArray[0], shieldArray[1],
       shieldArray[2], shieldArray[3], shieldArray[4], shieldArray[5], shieldArray[6], 
        shieldArray[7], shieldArray[8], shieldArray[9], ]).exec(function(err, shields) {
		if(err) {
            console.log("Got a database error in GetShieldData");
            throw err;
        }
        console.log("No database error, continuing");
		if(shields.length > 0) {
            var newShieldArray = [];
			for(i = 0; i < 10; i++) {
                console.log("Checking " + shields[i]);
                if(shields[i] == null) {
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
            character["Inventory"]["Shields"] = newShieldArray;
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
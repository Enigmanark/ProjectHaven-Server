module.exports = function(newChar, trainingStat) {
    var newData = newChar;
    if(trainingStat == "Strength") {
        var original = newData["Strength"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Strength"] = newStat;
        return newData;
    }
    else if(trainingStat == "Endurance") {
        var original = newData["Endurance"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Endurance"] = newStat;
        return newData;
    }
    else if(trainingStat == "Dexterity") {
        var original = newData["Dexterity"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Dexterity"] = newStat;
        return newData;
    }
    else if(trainingStat == "Intelligence") {
        var original = newData["Intelligence"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Intelligence"] = newStat;
        return newData;
    }
    else if(trainingStat == "Willpower") {
        var original = newData["Willpower"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Willpower"] = newStat;
        return newData;
    }
    else if(trainingStat == "Agility") {
        var original = newData["Agility"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        newChar["Gold"] -= cost;
        newChar["Agility"] = newStat;
        return newData;
    }

    function calculateCost(attribute) {
        if(attribute < 20) return attribute * 30;
	    else if(attribute < 50) return attribute * 50;
	    else if(attribute < 75) return attribute * 60;
	    else if(attribute < 90) return attribute * 70;
	    else if(attribute < 100) return attribute * 100;
    };
};
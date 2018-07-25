module.exports = function(newChar, trainingStat) {
    var newData = newChar;
    if(trainingStat == "Strength") {
        var original = newData["Strength"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Strength"] = newStat;
            return newData;
        }
        else return null;
    }
    else if(trainingStat == "Endurance") {
        var original = newData["Endurance"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Endurance"] = newStat;
            return newData;
        }
        else return null;
    }
    else if(trainingStat == "Dexterity") {
        var original = newData["Dexterity"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Dexterity"] = newStat;
            return newData;
        }
        else return null;
    }
    else if(trainingStat == "Intelligence") {
        var original = newData["Intelligence"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Intelligence"] = newStat;
            return newData;
        }
        else return null;
    }
    else if(trainingStat == "Willpower") {
        var original = newData["Willpower"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Willpower"] = newStat;
            return newData;
        }
        else return null;
    }
    else if(trainingStat == "Agility") {
        var original = newData["Agility"];
        var newStat = original + 5;
        var cost = calculateCost(newStat);
        if(newChar["Gold"] >= cost) {
            newChar["Gold"] -= cost;
            newChar["TrainingPoints"] -= 1;
            newChar["Agility"] = newStat;
            return newData;
        }
        else return null;
    }

    function calculateCost(attribute) {
        if(attribute < 20) return attribute * 30;
	    else if(attribute < 50) return attribute * 50;
	    else if(attribute < 75) return attribute * 60;
	    else if(attribute < 90) return attribute * 70;
	    else if(attribute < 100) return attribute * 100;
    };
};
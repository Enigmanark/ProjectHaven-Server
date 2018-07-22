module.exports = function(newChar, experience, gold) {
    var newData = newChar;
    newData["Experience"] += experience;
    newData["Gold"] += gold;
    if(newData["Experience"] >= newData["ExperienceToLevelUp"]) {
        newData["Experience"] -= newData["ExperienceToLevelUp"];
        newData["Level"] += 1;
    }
    return newData;
};
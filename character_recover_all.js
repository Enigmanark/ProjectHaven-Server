module.exports = function(characterData) {
    characterData["CurrentHP"] = characterData["MaxHP"];
    characterData["CurrentSP"] = characterData["MaxSP"];
    characterData["CurrentMP"] = characterData["MaxMP"];
    return characterData;
};
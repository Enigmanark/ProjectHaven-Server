var healthEnduranceMod = 10;
var manaIntelligenceMod = 15;
var staminaEnduranceMod = 2;

exports.updateHealth = function(stats) {
    stats["MaxHP"] = stats["BaseHP"] + (stats["Endurance"] * healthEnduranceMod);
    return stats;
};

exports.updateMana = function(stats) {
    stats["MaxMP"] = stats["BaseMP"] + (stats["Intelligence"] * manaIntelligenceMod);
    return stats;
};

exports.updateStamina = function(stats) {
    stats["MaxSP"] = stats["BaseSP"] + (stats["Endurance"] * staminaEnduranceMod);
    return stats;
};
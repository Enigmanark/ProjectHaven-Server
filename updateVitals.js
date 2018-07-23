var healthEnduranceMod = 10;
var manaIntelligenceMod = 15;
var staminaEnduranceMod = 2;

var updateHealth = function(stats) {
    stats["MaxHP"] = stats["BaseHP"] + (stats["Endurance"] * healthEnduranceMod);
    return stats;
};

var updateMana = function(stats) {
    stats["MaxMP"] = stats["BaseMP"] + (stats["Intelligence"] * manaIntelligenceMod);
    return stats;
};

var updateStamina = function(stats) {
    stats["MaxSP"] = stats["BaseSP"] + (stats["Endurance"] * staminaEnduranceMod);
    return stats;
};

exports = updateHealth;
exports = updateMana;
exports = updateStamina;
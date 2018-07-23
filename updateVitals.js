var healthEnduranceMod = 10;
var manaIntelligenceMod = 15;
var staminaEnduranceMod = 2;

function updateHealth(stats) {
    stats["MaxHP"] = stats["BaseHP"] + (stats["Endurance"] * healthEnduranceMod);
    return stats;
};

function updateMana(stats) {
    stats["MaxMP"] = stats["BaseMP"] + (stats["Intelligence"] * manaIntelligenceMod);
    return stats;
};

function updateStamina(stats) {
    stats["MaxSP"] = stats["BaseSP"] + (stats["Endurance"] * staminaEnduranceMod);
    return stats;
};

exports = updateHealth();
exports = updateMana();
exports = updateStamina();
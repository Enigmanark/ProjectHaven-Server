var mongoose = require('mongoose');

//define the schema for our user
var weaponSchema = new mongoose.Schema({
    Name: String,
    Level : Number,
    Gold : Number,
    ID : Number,
    Path : String,
    Type : String,
    Description : String,
    MinDamage : Number,
    MaxDamage : Number,
    BonusAccuracy : Number,
    BonusCritRate : Number,
    Element : String
});

module.exports = mongoose.model("Weapon", weaponSchema);
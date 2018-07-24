var mongoose = require('mongoose');

//define the schema for our user
var enemySchema = new mongoose.Schema({
    Name: String,
    Level : Number,
    Gold : Number,
    Experience : Number,
    ID : Number,
    Path : String,
    PathToAvatar : String,
    MaxHP : Number,
    MaxMP : Number,
    MaxSP : Number,
    MeleeDef : Number,
    RangedDef : Number,
    SpellDef : Number,
    Strength : Number,
    Dexterity : Number,
    Endurance: Number,
    Intelligence : Number,
    Willpower : Number,
    Agility : Number,
    MinDamage : Number,
    MaxDamage : Number,
    AttackElement : String,
    Earth : Number,
    Water : Number,
    Air : Number,
    Fire : Number,
    Ice : Number,
    Thunder : Number,
    Light : Number,
    Dark : Number,
    Locations : []
});

module.exports = mongoose.model("Enemy", enemySchema);
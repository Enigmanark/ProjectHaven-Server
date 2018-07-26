var mongoose = require('mongoose');
var shieldSchema = new mongoose.Schema({
    Name: String,
    ID : Number,
    Path : String,
    Level : Number,
    Gold : Number,
    Description: String,
    MeleeDef : Number,
    RangedDef : Number,
    SpellDef : Number,
    Earth : Number,
    Water : Number,
    Air : Number,
    Fire : Number,
    Ice : Number,
    Thunder : Number,
    Dark : Number,
    Light : Number
});

module.exports = mongoose.model("Shield", shieldSchema);
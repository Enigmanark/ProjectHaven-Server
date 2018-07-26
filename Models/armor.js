var mongoose = require('mongoose');

var mongoose = require('mongoose');

//define the schema for armor
var armorSchema = new mongoose.Schema({
    Name: String,
    ID : Number,
    Path : String,
    ArmPath : String,
    Description: String,
    Level : Number,
    Gold : Number,
    Earth : Number,
    Water : Number,
    Air : Number,
    Fire : Number,
    Ice : Number,
    Thunder : Number,
    Dark : Number,
    Light : Number
});

module.exports = mongoose.model("Armor", armorSchema);
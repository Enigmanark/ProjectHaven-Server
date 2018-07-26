var shieldSchema = new mongoose.Schema({
    Name: String,
    Path : String,
    Level : Number,
    Gold : Number,
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
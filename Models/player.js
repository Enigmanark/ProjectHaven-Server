var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//define the schema for our user
var playerSchema = new mongoose.Schema({
    email: String,
    password : String,
    characters : []
});

//Methods

//generate a hash for the password
playerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

playerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("Player", playerSchema);
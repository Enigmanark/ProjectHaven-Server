var Player = require("../Models/player");

module.exports = function(req, res) {
    var email = req.body.Email;
    var password = req.body.Password;
    var playerName = req.body.CharacterName;
    var stat = req.body.ToTrain;
    
    console.log("Looking for player's account");
    Player.findOne( { "email" : email }, function(err, player) {
        if(err) res.send("300");
        else if(player) {
            if(player.validPassword(password)) {
                console.log("Valid password!");
                console.log("Looking for character..");
                var charName = playerName;
                var id = -1;
                for(i = 0; i < player.characters.length; i++) {
                    var n = player.characters[i]["Name"];
                    if(n == charName) {
                        console.log("Found character!");
                        id = i;
                        break;
                    }
                }
                if(id == -1) {
                    console.log("Could not find character :^(");
                    res.send("400");
                }
                else {
                    var playerStats = player.characters[i];
                    var playerLevel = playerStats["Level"]; 
                    //Do the trainer magic here
                    if(stat == "Strength") {
                        //Strength 
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Strength"] += 5;
                        alyonis["RangedDef"] = 50;
                        alyonis["SpellDef"] = 50;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);
                    }
                    else if(stat == "Dexterity"){
                        //Dexterity
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Dexterity"] += 5;
                        alyonis["MeleeDef"] = 20;
                        alyonis["RangedDef"] = 20;
                        alyonis["SpellDef"] = 50;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);
                    }
                    else if(stat == "Endurance") {
                        //Endurance
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Endurance"] += 5;
                        alyonis["MeleeDef"] = 40;
                        alyonis["RangedDef"] = 40;
                        alyonis["SpellDef"] = 40;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);	
                    }
                    else if(stat == "Intelligence") {
                        //Intelligence
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Intelligence"] += 5;
                        alyonis["MeleeDef"] = 50;
                        alyonis["RangedDef"] = 50;
                        alyonis["DamageType"] = "Magic";
                        alyonis["BonusAccuracy"] = 10;
                        alyonis["BonusCrit"] = 0;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);	
                    }
                    else if(stat == "Willpower") {
                        //Willpower
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Willpower"] += 5;
                        alyonis["MeleeDef"] = 50;
                        alyonis["RangedDef"] = 50;
                        alyonis["DamageType"] = "Magic";
                        alyonis["BonusAccuracy"] = 10;
                        alyonis["BonusCrit"] = 0;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);	
                    }
                
                    else if(stat == "Agility") {
                        //Agility
                        var alyonis = get_base_alyonis_battle(playerLevel);
                        alyonis = apply_damage_level(playerLevel, alyonis);
                        alyonis = apply_trainer_stats(playerStats, alyonis);
                        alyonis["Agility"] += 5;
                        alyonis["MeleeDef"] = 25;
                        alyonis["RangedDef"] = 25;
                        alyonis["SpellDef"] = 50;
                        var battle = JSON.stringify(alyonis);
                        battle = JSON.parse(battle);
                        battle["BattleLocation"] = "Forest";
                        battle["NextScene"] = "res://Assets/Scenes/Training/Training_Reward.tscn";
                        battle = JSON.stringify(battle);
                        console.log("Sending battle data");
                        res.send(battle);
                    }
                }
            } else res.send("300");
        }
    });

    function apply_trainer_stats(player, trainer){
        trainer["Strength"] = player["Strength"];
        trainer["Dexterity"] = player["Dexterity"];
        trainer["Endurance"] = player["Endurance"];
        trainer["Intelligence"] = player["Intelligence"];
        trainer["Willpower"] = player["Willpower"];
        trainer["Agility"] = player["Agility"];
        trainer = scale_hp(trainer);
        trainer = scale_sp(trainer);
        trainer = scale_mp(trainer);
        return trainer;
    }

    function scale_hp(trainer){
        console.log(require("../CharacterData/attributeModifiers").healthEnduranceMod);
        trainer["MaxHP"] = trainer["BaseHP"] + (trainer["Endurance"] * 
            require("../CharacterData/attributeModifiers").healthEnduranceMod);
        return trainer;
    }

    function scale_sp(trainer){
        trainer["MaxSP"] = trainer["BaseSP"] + (trainer["Endurance"] *
            require("../CharacterData/attributeModifiers").staminaEnduranceMod);
        return trainer;
    }

    function scale_mp(trainer) {
        trainer["MaxMP"] = trainer["BaseMP"] + (trainer["Intelligence"] *
            require("../CharacterData/attributeModifiers").manaIntelligenceMod);
        return trainer;
    }

    function apply_damage_level(playerLevel, trainer) {
        if(playerLevel < 10) return trainer;
        else if(playerLevel < 20){
            trainer["MinDamage"] = 8;
            trainer["MaxDamage"] = 15;
            return trainer;
        }
        else if(playerLevel < 30) {
            trainer["MinDamage"] = 10;
            trainer["MaxDamage"] = 20;
            return trainer;
        }
    }
    function get_base_alyonis_battle(playerLevel) {
        var alyonis = {};
        alyonis["ID"] = -1;
        alyonis["Level"] = playerLevel+1;
        alyonis["Experience"] = 0;
        alyonis["Gold"] = 0;
        alyonis["BaseHP"] = 50;
        alyonis["BaseSP"] = 10;
        alyonis["BaseMP"] = 0;
        alyonis["Path"] = "res://Assets/Prefabs/BattleSystem/Enemies/Training/Alyonis_Battle.tscn";
        alyonis["PathToAvatar"] = "res://Assets/Prefabs/GUI/Avatars/AvatarTrainerAlyonis.tscn";
        alyonis["Name"] = "Alyonis";
        alyonis["ID"] = -1;
        alyonis["MaxSP"] = 25;
        alyonis["MaxMP"] = 25;
        alyonis["MeleeDef"] = 10;
        alyonis["RangedDef"] = 10;
        alyonis["SpellDef"] = 10;
        alyonis["Strength"] = 1;
        alyonis["Dexterity"] = 1;
        alyonis["Endurance"] = 1;
        alyonis["Intelligence"] = 1;
        alyonis["Willpower"] = 1;
        alyonis["Agility"] = 1;
        alyonis["DamageType"] = "Melee";
        alyonis["BonusAccuracy"] = 10;
        alyonis["BonusCrit"] = 0;
        alyonis["MinDamage"] = 6;
        alyonis["MaxDamage"] = 10;
        alyonis["AttackElement"] = "Light";
        alyonis["Earth"] = 1;
        alyonis["Water"] = 1;
        alyonis["Air"] = 1;
        alyonis["Fire"] = 1;
        alyonis["Ice"] = 1;
        alyonis["Thunder"] = 1;
        alyonis["Light"] = 1;
        alyonis["Dark"] = 1;
        return alyonis;
    }
};
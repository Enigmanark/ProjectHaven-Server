module.exports = function() {
    var enemies = [];

    var name;
	var level
	var gold;
	var experience;
	var id;
	var path;
	var pathToAvatar;
	var maxHP;
	var maxSP;
	var maxMP;
	var meleeDef;
	var rangedDef;
	var spellDef;
	var strength;
	var dexterity;
	var endurance;
	var intelligence;
	var willpower;
	var agility;
	var minDamage;
	var maxDamage;
	var attackElement;
	var earth;
	var water;
	var air;
	var fire;
	var ice;
	var thunder;
	var light;
	var dark;
    var locations;

    name = "Green Slime";
    level = 1;
    experience = 35;
    gold = 20;
    id = 1;
    path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/greenSlime1.tscn";
    pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarGreenSlime.tscn";
    maxHP = 50;
    maxSP = 25;
    maxMP = 25;
    meleeDef = 10;
    rangedDef = 10;
    spellDef = 10;
    strength = 1;
    dexterity = 1;
    endurance = 1;
    intelligence = 1;
    willpower = 1;
    agility = 1;
    minDamage = 4;
    maxDamage = 8;
    attackElement = "Air";
    earth = .5;
    water = 1;
    air = .8;
    fire = 1;
    ice = 2;
    thunder = 1;
    light = 1;
    dark = 1;
    locations = [];
    locations.push("Plains");
    locations.push("Mountains");
    locations.push("Dungeon");
    enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
	    strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));

    
    name = "Undead Fighter";
	level = 5;
	experience = 50;
	gold = 60;
	id = 2;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Undead/UndeadFighter.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarUndeadFighter.tscn";
	maxHP = 100;
	maxSP = 75;
	maxMP = 25;
	meleeDef = 20;
	rangedDef = 10;
	spellDef = 10;
	strength = 5;
	dexterity = 3;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 2;
	maxDamage = 8;
	attackElement = "Dark";
	earth = .8;
	water = 1;
	air = 1;
	fire = 1.5;
	ice = .8;
	thunder = .9;
	light = 2;
    dark = .50;
    locations = [];
    locations.push("Dark Forest");
    locations.push("Dungeon");
	enemies.push(make_enemy(name, id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));

    name = "Fire Slime";
	id = 3;
	level = 1;
	gold = 30;
	experience = 25;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/fireSlime1.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarFireSlime.tscn";
	maxHP = 60;
	maxSP = 25;
	maxMP = 25;
	meleeDef = 10;
	rangedDef = 10;
	spellDef = 10;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 2;
	maxDamage = 8;
	attackElement = "Fire";
	earth = 1;
	water = 2;
	air = 1;
	fire = .7;
	ice = .5;
	thunder = 1;
	light = 1;
    dark = 1;
    locations = [];
    locations.push("Volcano");
    locations.push("Dungeon");
	enemies.push(make_enemy(name, id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));


    name = "Cold Slime";
	id = 4;
	level = 2;
	gold = 45;
	experience = 45;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/coldSlime1.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarColdSlime.tscn";
	maxHP = 60;
	maxSP = 25;
	maxMP = 25;
	meleeDef = 10;
	rangedDef = 10;
	spellDef = 10;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 3;
	maxDamage = 10;
	attackElement = "Ice";
	earth = 1;
	water = .8;
	air = .5;
	fire = 2;
	ice = .7;
	thunder = 1;
	light = 1;
    dark = 1;
    locations = [];
    locations.push("Glacier");
    locations.push("Dungeon");
	enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));


    name = "Electric Slime";
	id = 5;
	level = 3;
	gold = 35;
	experience = 35;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/electricSlime.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarElectricSlime.tscn";
	maxHP = 80;
	maxSP = 25;
	maxMP = 25;
	meleeDef = 10;
	rangedDef = 10;
	spellDef = 10;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 4;
	maxDamage = 12;
	attackElement = "Thunder";
	earth = 2;
	water = .5;
	air = 1;
	fire = 1;
	ice = 1;
	thunder = .7;
	light = 1;
    dark = 1;
    locations = [];
    locations.push("Mountains");
    locations.push("Beach");
    locations.push("Dungeon");
	enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));

        
    name = "Mud Slime";
	id = 6;
	level = 1;
	gold = 20;
	experience = 26;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/mudSlime.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarMudSlime.tscn";
	maxHP = 50;
	maxSP = 5;
	maxMP = 5;
	meleeDef = 15;
	rangedDef = 15;
	spellDef = 10;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 3;
	maxDamage = 10;
	attackElement = "Earth";
	earth = .7;
	water = .8;
	air = 2;
	fire = .9;
	ice = 1;
	thunder = .5;
	light = 1;
    dark = 1;
    locations = [];
    locations.push("Forest");
    locations.push("Dungeon");
    locations.push("Plains");
    locations.push("Dark Forest");
	enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));	

    
    var name = "Shiny Slime";
	id = 7;
	level = 5;
	gold = 55;
	experience = 55;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/shinySlime.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarShinySlime.tscn";
	maxHP = 110;
	maxSP = 50;
	maxMP = 50;
	meleeDef = 15;
	rangedDef = 20;
	spellDef = 10;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 5;
	maxDamage = 15;
	attackElement = "Light";
	earth = 1;
	water = 1.5;
	air = .8;
	fire = .8;
	ice = 1;
	thunder = 1;
	light = .5;
    dark = 2;
    locations = [];
    locations.push("Desert");
    locations.push("Dungeon");
	enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));


    var name = "Void Slime";
	id = 8;
	level = 4;
	gold = 35;
	experience = 45;
	path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/voidSlime.tscn";
	pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarVoidSlime.tscn";
	maxHP = 90;
	maxSP = 25;
	maxMP = 25;
	meleeDef = 10;
	rangedDef = 10;
	spellDef = 30;
	strength = 1;
	dexterity = 1;
	endurance = 1;
	intelligence = 1;
	willpower = 1;
	agility = 1;
	minDamage = 3;
	maxDamage = 10;
	attackElement = "Dark";
	earth = 1;
	water = 1;
	air = 1;
	fire = 1.2;
	ice = 1.2;
	thunder = 1;
	light = 2;
    dark = .5;
    locations = [];
    locations.push("Dark Forest");
    locations.push("Dungeon");
	enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
		strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));

    
    var name = "Drippy Slime";
	var id = 9;
	var level = 2;
	var gold = 15;
	var experience = 25;
	var path = "res://Assets/Prefabs/BattleSystem/Enemies/Slimes/waterSlime.tscn";
	var pathToAvatar = "res://Assets/Prefabs/GUI/Avatars/AvatarDrippySlime.tscn";
	var maxHP = 60;
	var maxSP = 25;
	var maxMP = 25;
	var meleeDef = 10;
	var rangedDef = 10;
	var spellDef = 10;
	var strength = 1;
	var dexterity = 1;
	var endurance = 1;
	var intelligence = 1;
	var willpower = 1;
	var agility = 1;
	var minDamage = 3;
	var maxDamage = 10;
	var attackElement = "Water";
	var earth = 1;
	var water = .7;
	var air = 1;
	var fire = .5;
	var ice = .9;
	var thunder = 2;
	var light = 1;
	var dark = 1;
	locations = [];
	locations.push("Beach");
    locations.push("Dungeon");
    enemies.push(make_enemy(name,id, maxHP, maxSP, maxMP, meleeDef, rangedDef, spellDef,
	    strength, dexterity, endurance, intelligence, willpower, agility, pathToAvatar,
		minDamage, maxDamage, attackElement, path, earth, water, air, fire, ice, thunder,
		light, dark, level, experience, gold, locations));

    return enemies;

    function make_enemy(name, id, maxhp, maxsp, maxmp, meleeDef, rangedDef, spellDef, strength, dexterity,
        endurance, intelligence, willpower, agility, pathToAvatar, minD, maxD, attackElement,
        path, earth, water, air, fire, ice, thunder, light, dark, level, experience, gold, locations) {
		var enemy = {};
		enemy["Name"] = name;
        enemy["Level"] = level;
        enemy["Experience"] = experience;
        enemy["Gold"] = gold;
        enemy["MaxHP"] = maxhp;
        enemy["Path"] = path;
        enemy["PathToAvatar"] = pathToAvatar;
        enemy["Name"] = name;
        enemy["ID"] = id;
        enemy["MaxSP"] = maxsp;
        enemy["MaxMP"] = maxmp;
        enemy["MeleeDef"] = meleeDef;
        enemy["RangedDef"] = rangedDef;
        enemy["SpellDef"] = spellDef;
        enemy["Strength"] = strength;
        enemy["Dexterity"] = dexterity;
        enemy["Endurance"] = endurance;
        enemy["Intelligence"] = intelligence;
        enemy["Willpower"] = willpower;
        enemy["Agility"] = agility;
        enemy["MinDamage"] = minD;
        enemy["MaxDamage"] = maxD;
        enemy["AttackElement"] = attackElement;
        enemy["Earth"] = earth;
        enemy["Water"] = water;
        enemy["Air"] = air;
        enemy["Fire"] = fire;
        enemy["Ice"] = ice;
        enemy["Thunder"] = thunder;
        enemy["Light"] = light;
        enemy["Dark"] = dark;
        enemy["Locations"] = locations;
        return enemy;
    }
}

module.exports = function() {
    var weps = [];
	weps.push(1);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);
	weps.push(null);

	var armors = [];
	armors.push(1);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);
	armors.push(null);

	var shields = [];
	shields.push(1);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);
	shields.push(null);

	var inventory = {
		"Weapons" : weps,
		"Armors" : armors,
		"Shields" : shields,
		"HealthPotions": 2,
		"ManaPotions" : 2,
		"StaminaPotions" : 2,
	};
	return inventory;
};
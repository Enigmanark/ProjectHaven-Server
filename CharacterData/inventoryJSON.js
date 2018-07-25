
module.exports = function() {
    var weps = [];
	weps.push(1);
	weps.push(2);
	weps.push(3);
	weps.push(4);
	weps.push(5);
	weps.push(6);
	weps.push(7);
	weps.push(8);
	weps.push(null);
	weps.push(null);

	var inventory = {
		"Weapons" : weps,
		"HealthPotions": 2,
		"ManaPotions" : 2,
		"StaminaPotions" : 2,
	};
	return inventory;
};
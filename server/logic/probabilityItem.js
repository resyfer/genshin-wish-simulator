const probItem = probArr => {
	const chance = Math.random() * Math.random() * 100;

	for (let i = 0; i < probArr.length; i++) {
		if (chance < probArr[i].probability) {
			return probArr[i];
		}
	}
};

module.exports = {
	probItem,
};

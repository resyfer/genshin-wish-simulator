const probItem = probArr => {
	const chance = (~~(Math.random() * Math.random() * 8564567) % 100000) / 1000;

	for (let i = 0; i < probArr.length; i++) {
		if (chance < probArr[i].probability) {
			return probArr[i];
		}
	}
};

module.exports = {
	probItem,
};

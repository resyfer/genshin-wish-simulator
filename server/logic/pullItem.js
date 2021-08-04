const { Item } = require('../models/ItemModel');
const { pulls } = require('../logic/gachaPity');

const itemFetch = async (n, pity) => {
	const pullArr = pulls(n);

	const itemArr = [];

	for (let i = 0; i < n; i++) {
		let pull = {
			value: pullArr[i].value,
			rateup: pullArr[i].rateup,
			standard: pullArr[i].standard,
		};

		if (pity.pity5.value >= 89) {
			pull.value = 5;
			pull.rateup = pity.pity5.guarantee
				? true
				: Boolean(~~(Math.random() * 45837) % 2);
			pull.standard = !pull.rateup;
		} else if (pity.pity4.value >= 9) {
			pull.value = 4;
			pull.rateup = pity.pity4.guarantee
				? true
				: Boolean(~~(Math.random() * 45837) % 2);
			pull.standard = true;
		}

		pity.pity4.value = pull.value == 4 ? 0 : pity.pity4.value + 1;
		pity.pity5.value = pull.value == 5 ? 0 : pity.pity5.value + 1;

		if (pull.value == 5) pity.pity5.guarantee = !pull.rateup;
		if (pull.value == 4) pity.pity4.guarantee = !pull.rateup;

		const item = await Item.find({
			rarity: pull.value,
			rateup: pull.rateup,
			standard: pull.standard,
		});

		let pullItem = item[~~(Math.random() * 654653486) % item.length];
		itemArr.push(pullItem);
	}
	return { itemArr, pity };
};

module.exports = {
	itemFetch,
};

const { Item } = require('../models/ItemModel');
const { pulls } = require('../logic/gachaPity');

let pity = {
	pity4: 0,
	pity5: 0,
};

const itemFetch = async n => {
	const pullArr = pulls(n);

	const itemArr = [];

	for (let i = 0; i < n; i++) {
		let pull = {
			value: pullArr[i].value,
			rarity: pullArr[i].rateup,
			standard: pullArr[i].standard,
		};

		if (pity.pity5 >= 89) {
			pull.value = 5;
			pull.rateup = Boolean(~~(Math.random() * 45837) % 2);
			pull.standard = !pull.rateup;
		} else if (pity.pity4 >= 9) {
			pull.value = 4;
			pull.rateup = true;
			pull.standard = true;
		}

		pity.pity4 = pull.value == 4 ? 0 : pity.pity4 + 1;
		pity.pity5 = pull.value == 5 ? 0 : pity.pity5 + 1;

		const item = await Item.find({
			rarity: pullArr[i].value,
			rateup: pullArr[i].rateup,
			standard: pullArr[i].standard,
		});

		let pullItem = item[~~((Math.random() * 654653486) % item.length)];
		itemArr.push(pullItem);
		console.log(pity.pity4, pity.pity5);
	}
	return itemArr;
};

module.exports = {
	itemFetch,
};

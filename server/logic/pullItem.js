const { Item } = require('../models/ItemModel');

const { pulls } = require('../logic/gachaPity');

const itemFetch = async n => {
	const pullArr = pulls(n);

	const itemArr = [];

	for (let i = 0; i < n; i++) {
		const item = await Item.find({
			rarity: pullArr[i].value,
			rateup: pullArr[i].rateup,
			standard: pullArr[i].standard,
		});

		let pullItem = item[~~((Math.random() * 65451564) % item.length)];
		itemArr.push(pullItem);
	}
	return itemArr;
};

module.exports = {
	itemFetch,
};

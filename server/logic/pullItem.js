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
		console.log(
			'Pull : ',
			pullArr[i].value,
			pullArr[i].rateup,
			pullArr[i].standard
		);
		itemArr.push(item[~~((Math.random() * 65451564) % item.length)]);
	}
	return itemArr;
};

module.exports = {
	itemFetch,
};

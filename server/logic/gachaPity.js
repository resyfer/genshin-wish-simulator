const { probArr } = require('./probabilityArray');
const { probItem } = require('./probabilityItem');

const types = [
	{
		value: 5,
		chances: [
			{
				rateup: true,
				standard: false,
				probability: 0.3,
			},
			{
				rateup: false,
				standard: true,
				probability: 0.3,
			},
		],
	},
	{
		value: 4,
		chances: [
			{
				rateup: true,
				standard: true,
				probability: 2.55,
			},
			{
				rateup: false,
				standard: true,
				probability: 2.55,
			},
		],
	},
	{
		value: 3,
		chances: [
			{
				rateup: false,
				standard: true,
				probability: 94.3,
			},
		],
	},
];

const cumulativeDistribution = probArr(types);

const pulls = n => {
	const items = [];

	for (let i = 0; i < n; i++) items.push(probItem(cumulativeDistribution));

	return items;
};

module.exports = {
	pulls,
};

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	rarity: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	element: String,
	weaponType: String,
	weapon: String,
	sex: String,
	nation: String,
	rateup: Boolean,
	standard: Boolean,
	img: String,
});

const Item = mongoose.model('item', ItemSchema);

module.exports = {
	Item,
};

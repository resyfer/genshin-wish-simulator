const mongoose = require('mongoose');

const { Item } = require('../models/ItemModel');

const { itemFetch } = require('../logic/pullItem');

const allItemsGet = async (req, res) => {
	const items = await Item.find();

	res.status(200).json({
		success: true,
		data: items,
	});
};

const ItemGet = async (req, res, n) => {
	res.status(200).json({
		success: true,
		data: await itemFetch(n),
	});
};

module.exports = {
	ItemGet,
	allItemsGet,
};

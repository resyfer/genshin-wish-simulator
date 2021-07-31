const mongoose = require('mongoose');

const { Item } = require('../models/ItemModel');

const allItemsGet = async (req, res) => {
	const items = await Item.find();

	res.status(200).json({
		success: true,
		data: items,
	});
};

module.exports = {
	allItemsGet,
};

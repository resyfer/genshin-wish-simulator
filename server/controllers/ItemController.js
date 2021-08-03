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

const ItemGet = async (req, res, pity, n) => {
	pity.pity5.value = parseInt(req.params.p5val, 10);
	pity.pity5.guarantee = parseInt(req.params.p5guar, 10);
	pity.pity4.value = parseInt(req.params.p4val, 10);
	pity.pity4.guarantee = parseInt(req.params.p4guar, 10);

	res.status(200).json({
		success: true,
		data: await itemFetch(n, pity),
	});
};

module.exports = {
	ItemGet,
	allItemsGet,
};

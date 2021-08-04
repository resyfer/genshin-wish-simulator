const express = require('express');
const router = express.Router();

//* Controllers
const { ItemGet, allItemsGet } = require('../controllers/ItemController');

router.get('/', (req, res) => {
	res.send('Hello World');
});

router.get('/all', allItemsGet);

let pity = {
	pity4: {
		value: 0,
		guarantee: false,
	},
	pity5: {
		value: 0,
		guarantee: false,
	},
};

router.get('/:pulls/:p5val/:p5guar/:p4val/:p4guar/', (req, res) =>
	ItemGet(req, res, pity, parseInt(req.params.pulls, 10))
);

module.exports = {
	router,
};
